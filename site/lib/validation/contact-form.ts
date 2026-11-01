const EMAIL_RE =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE_RE = /^[\d\s+().-]{8,20}$/;

export type ContactFormFields = {
  fullName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  website?: string;
};

export type ContactFormErrors = Partial<
  Record<keyof Omit<ContactFormFields, "website">, string>
>;

export function validateContactForm(
  fields: ContactFormFields,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const fullName = fields.fullName.trim();
  if (fullName.length < 2) {
    errors.fullName = "Please enter your full name.";
  } else if (fullName.length > 120) {
    errors.fullName = "Name is too long.";
  }

  const email = fields.email.trim();
  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_RE.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const phone = fields.phone.trim();
  if (!phone) {
    errors.phone = "Please enter your phone number.";
  } else if (!PHONE_RE.test(phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  const interest = fields.interest.trim();
  if (!interest) {
    errors.interest = "Please tell us your course or destination interest.";
  } else if (interest.length > 200) {
    errors.interest = "Please shorten this field.";
  }

  const message = fields.message.trim();
  if (message.length < 10) {
    errors.message = "Please add a short message (at least 10 characters).";
  } else if (message.length > 5000) {
    errors.message = "Message is too long.";
  }

  return errors;
}

export function sanitizeContactPayload(fields: ContactFormFields) {
  return {
    fullName: fields.fullName.trim().slice(0, 120),
    email: fields.email.trim().slice(0, 254),
    phone: fields.phone.trim().slice(0, 30),
    interest: fields.interest.trim().slice(0, 200),
    message: fields.message.trim().slice(0, 5000),
  };
}
