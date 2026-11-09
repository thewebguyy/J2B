import { test } from "node:test";
import assert from "node:assert/strict";
import {
  ENQUIRY_CATEGORIES,
  CATEGORY_IDS,
  isValidEmail,
  parseEnquiry,
} from "../src/lib/enquiry.ts";

const valid = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  country: "United Kingdom",
  interest: "community",
  message: "I would like to learn more.",
  consent: true,
};

test("exposes the six enquiry categories", () => {
  assert.equal(ENQUIRY_CATEGORIES.length, 6);
  const expected = [
    "community",
    "book-resources",
    "writing-mentorship",
    "speaking",
    "workshops-retreats-events",
    "merchandise",
  ];
  assert.deepEqual(CATEGORY_IDS, expected);
});

test("accepts a valid, consented enquiry", () => {
  const result = parseEnquiry(valid);
  assert.equal(result.ok, true);
  assert.equal(result.data.email, "ada@example.com");
  assert.equal(result.data.interest, "community");
});

test("rejects a missing name", () => {
  const result = parseEnquiry({ ...valid, name: "" });
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((e) => e.field === "name"));
});

test("rejects a malformed email", () => {
  const result = parseEnquiry({ ...valid, email: "not-an-email" });
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((e) => e.field === "email"));
});

test("rejects an unknown area of interest", () => {
  const result = parseEnquiry({ ...valid, interest: "pricing" });
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((e) => e.field === "interest"));
});

test("rejects a missing consent", () => {
  const result = parseEnquiry({ ...valid, consent: false });
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((e) => e.field === "consent"));
});

test("rejects a honeypot-filled submission", () => {
  const result = parseEnquiry({ ...valid, website: "https://spam.example" });
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((e) => e.field === "form"));
});

test("rejects an oversized message", () => {
  const result = parseEnquiry({ ...valid, message: "x".repeat(2001) });
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((e) => e.field === "message"));
});

test("validates email addresses sensibly", () => {
  assert.equal(isValidEmail("a@b.co"), true);
  assert.equal(isValidEmail("first.last+tag@example.com"), true);
  assert.equal(isValidEmail("plainaddress"), false);
  assert.equal(isValidEmail("a@b"), false);
  assert.equal(isValidEmail("a b@c.co"), false);
});
