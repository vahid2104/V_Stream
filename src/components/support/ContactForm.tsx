"use client";

import { useState, type FormEvent } from "react";

import PhoneInput from "./PhoneInput";
import { supportStyles } from "./SupportPageContent.styles";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phoneCountry: string;
  phoneNumber: string;
  message: string;
  isAgreed: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneCountry: "+994",
  phoneNumber: "",
  message: "",
  isAgreed: false,
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [ticketId, setTicketId] = useState("");
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  function updateField<T extends keyof FormState>(field: T, value: FormState[T]) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validateForm() {
    const nextErrors: FormErrors = {};

    if (!form.firstName.trim()) {
      nextErrors.firstName = "First name is required";
    }

    if (!form.lastName.trim()) {
      nextErrors.lastName = "Last name is required";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email";
    }

    if (!form.phoneNumber.trim()) {
      nextErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d+$/.test(form.phoneNumber)) {
      nextErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Message is required";
    } else if (form.message.trim().length < 20) {
      nextErrors.message = "Message must be at least 20 characters";
    }

    if (!form.isAgreed) {
      nextErrors.isAgreed = "You must agree to the terms";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) return;

    const randomTicket = `VS-${Math.floor(10000 + Math.random() * 90000)}`;

    setTicketId(randomTicket);
    setIsSuccessOpen(true);
    setForm(initialFormState);
  }

  return (
    <>
      <form id="support-form" className={supportStyles.formCard} onSubmit={handleSubmit}>
        <div className={supportStyles.formGrid}>
          <div className={supportStyles.field}>
            <label className={supportStyles.label}>First Name</label>
            <input
              value={form.firstName}
              onChange={(event) => updateField("firstName", event.target.value)}
              placeholder="Enter first name"
              className={supportStyles.input}
            />
            {errors.firstName && <p className={supportStyles.error}>{errors.firstName}</p>}
          </div>

          <div className={supportStyles.field}>
            <label className={supportStyles.label}>Last Name</label>
            <input
              value={form.lastName}
              onChange={(event) => updateField("lastName", event.target.value)}
              placeholder="Enter last name"
              className={supportStyles.input}
            />
            {errors.lastName && <p className={supportStyles.error}>{errors.lastName}</p>}
          </div>

          <div className={supportStyles.field}>
            <label className={supportStyles.label}>Email</label>
            <input
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="Enter your email"
              className={supportStyles.input}
            />
            {errors.email && <p className={supportStyles.error}>{errors.email}</p>}
          </div>

          <div className={supportStyles.field}>
            <label className={supportStyles.label}>Phone Number</label>
            <PhoneInput
              countryCode={form.phoneCountry}
              phoneNumber={form.phoneNumber}
              onCountryChange={(value) => updateField("phoneCountry", value)}
              onPhoneChange={(value) => updateField("phoneNumber", value)}
            />
            {errors.phoneNumber && <p className={supportStyles.error}>{errors.phoneNumber}</p>}
          </div>

          <div className={supportStyles.fullField}>
            <label className={supportStyles.label}>Message</label>
            <textarea
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Enter your message"
              className={supportStyles.textarea}
            />
            {errors.message && <p className={supportStyles.error}>{errors.message}</p>}
          </div>
        </div>

        <div className={supportStyles.bottomRow}>
          <div>
            <label className={supportStyles.checkboxLabel}>
              <input
                type="checkbox"
                checked={form.isAgreed}
                onChange={(event) => updateField("isAgreed", event.target.checked)}
                className={supportStyles.checkbox}
              />

              <span>
                I agree with{" "}
                <a href="#" className={supportStyles.link}>
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className={supportStyles.link}>
                  Privacy Policy
                </a>
              </span>
            </label>

            {errors.isAgreed && <p className={supportStyles.error}>{errors.isAgreed}</p>}
          </div>

          <button type="submit" className={supportStyles.sendButton}>
            Send Message
          </button>
        </div>
      </form>

      {isSuccessOpen && (
        <div className={supportStyles.modalOverlay} onClick={() => setIsSuccessOpen(false)}>
          <div className={supportStyles.modalBox} onClick={(event) => event.stopPropagation()}>
            <h2 className={supportStyles.modalTitle}>Request received</h2>

            <p className={supportStyles.modalText}>
              Your support request has been created successfully. We will contact you as soon as possible.
            </p>

            <p className={supportStyles.modalTicket}>Ticket ID: {ticketId}</p>

            <button
              type="button"
              className={supportStyles.modalButton}
              onClick={() => setIsSuccessOpen(false)}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}