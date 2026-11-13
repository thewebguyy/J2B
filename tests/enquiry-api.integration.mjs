import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const port = 3100 + Math.floor(Math.random() * 400);
const base = `http://127.0.0.1:${port}`;
const allowedOrigin = base;

let server;

async function waitForServer() {
  const deadline = Date.now() + 60_000;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(`${base}/robots.txt`);
      if (res.ok) return;
    } catch {
      // not ready yet
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error("Next dev server did not become ready");
}

function post(body, headers = {}) {
  return fetch(`${base}/api/enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

const valid = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  country: "United Kingdom",
  interest: "community",
  message: "I would like to learn more.",
  consent: true,
};

before(async () => {
  server = spawn(
    process.execPath,
    [join(repoRoot, "node_modules", "next", "dist", "bin", "next"), "dev", "-p", String(port)],
    {
      cwd: repoRoot,
      env: {
        ...process.env,
        ALLOWED_ORIGINS: allowedOrigin,
        RESEND_API_KEY: "",
        ENQUIRY_TO_EMAIL: "",
        NEXT_TELEMETRY_DISABLED: "1",
      },
      stdio: ["ignore", "pipe", "pipe"],
    }
  );
  server.stdout.on("data", () => {});
  server.stderr.on("data", () => {});
  await waitForServer();
});

after(() => {
  if (server && !server.killed) server.kill("SIGTERM");
});

test("valid request reaches the disabled-delivery state (503, no email sent)", async () => {
  const res = await post(valid, { Origin: allowedOrigin });
  assert.equal(res.status, 503);
  const json = await res.json();
  assert.equal(json.error, "unavailable");
});

test("non-browser request without Origin is accepted (not treated as auth)", async () => {
  const res = await post(valid);
  assert.equal(res.status, 503);
});

test("invalid JSON returns a controlled 400", async () => {
  const res = await post("{not-json", { Origin: allowedOrigin });
  assert.equal(res.status, 400);
  const json = await res.json();
  assert.equal(json.error, "invalid_request");
});

test("unsupported Content-Type returns 415", async () => {
  const res = await fetch(`${base}/api/enquiries`, {
    method: "POST",
    headers: { "Content-Type": "text/plain", Origin: allowedOrigin },
    body: "{}",
  });
  assert.equal(res.status, 415);
});

test("unauthorized Origin returns 403", async () => {
  const res = await post(valid, { Origin: "https://evil.example.com" });
  assert.equal(res.status, 403);
});

test("oversized body (Content-Length) returns 413", async () => {
  const res = await post({
    ...valid,
    message: "x".repeat(20_000),
  }, { Origin: allowedOrigin });
  assert.equal(res.status, 413);
  const json = await res.json();
  assert.equal(json.error, "payload_too_large");
});

test("oversized streamed body without Content-Length returns 413", async () => {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(new TextEncoder().encode(`{"name":"${"x".repeat(20_000)}"}`));
      controller.close();
    },
  });
  const res = await fetch(`${base}/api/enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: allowedOrigin },
    body: stream,
    duplex: "half",
  });
  assert.equal(res.status, 413);
});

test("security headers are present", async () => {
  const res = await fetch(`${base}/robots.txt`);
  assert.equal(res.headers.get("x-content-type-options"), "nosniff");
  assert.equal(res.headers.get("referrer-policy"), "strict-origin-when-cross-origin");
  assert.equal(res.headers.get("x-frame-options"), "SAMEORIGIN");
});
