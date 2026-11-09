export type EnquiryCategory = {
  id: string;
  label: string;
  description: string;
};

export const ENQUIRY_CATEGORIES: EnquiryCategory[] = [
  {
    id: "community",
    label: "Community participation",
    description: "Joining or learning about the Journey2Better community.",
  },
  {
    id: "book-resources",
    label: "Book and resources interest",
    description: "The memoir, journals, study guide and other resources.",
  },
  {
    id: "writing-mentorship",
    label: "Writing and storytelling mentorship",
    description: "Support exploring or writing your own life story.",
  },
  {
    id: "speaking",
    label: "Speaking or facilitation enquiries",
    description: "Inviting Sade to speak or facilitate at an event.",
  },
  {
    id: "workshops-retreats-events",
    label: "Workshops, retreats and events",
    description: "Better Together, annual events, retreats, travel and shared experiences.",
  },
  {
    id: "merchandise",
    label: "Merchandise updates",
    description: "Books, journals, mugs, T-shirts, sweatshirts and keepsakes.",
  },
];

export const CATEGORY_IDS: string[] = ENQUIRY_CATEGORIES.map((category) => category.id);

export const CONTACT_EMAIL = "hello@journey2better.com";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: string): boolean {
  return value.length <= 254 && EMAIL_PATTERN.test(value.trim());
}

export function categoryLabel(id: string): string {
  return ENQUIRY_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}

export type EnquiryInput = {
  name?: unknown;
  email?: unknown;
  country?: unknown;
  interest?: unknown;
  message?: unknown;
  consent?: unknown;
  website?: unknown;
};

export type EnquiryFieldError = { field: string; message: string };

export type ParsedEnquiry = {
  name: string;
  email: string;
  country: string;
  interest: string;
  message: string;
};

export type EnquiryResult =
  | { ok: true; data: ParsedEnquiry }
  | { ok: false; errors: EnquiryFieldError[] };

export function parseEnquiry(input: EnquiryInput): EnquiryResult {
  const errors: EnquiryFieldError[] = [];

  const website = typeof input.website === "string" ? input.website : "";
  if (website.trim().length > 0) {
    return { ok: false, errors: [{ field: "form", message: "Your submission could not be processed." }] };
  }

  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim().toLowerCase() : "";
  const country = typeof input.country === "string" ? input.country.trim().slice(0, 80) : "";
  const interest = typeof input.interest === "string" ? input.interest : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";
  const consent = input.consent === true;

  if (name.length === 0) {
    errors.push({ field: "name", message: "Please enter your name." });
  } else if (name.length > 120) {
    errors.push({ field: "name", message: "Please keep your name under 120 characters." });
  }

  if (email.length === 0) {
    errors.push({ field: "email", message: "Please enter your email address." });
  } else if (!isValidEmail(email)) {
    errors.push({ field: "email", message: "Please enter a valid email address." });
  }

  if (!CATEGORY_IDS.includes(interest)) {
    errors.push({ field: "interest", message: "Please choose an area of interest." });
  }

  if (message.length > 2000) {
    errors.push({ field: "message", message: "Please keep your message under 2000 characters." });
  }

  if (consent !== true) {
    errors.push({ field: "consent", message: "Please confirm you are happy to be contacted." });
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: { name, email, country, interest, message },
  };
}
