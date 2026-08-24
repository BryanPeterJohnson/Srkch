import { useState } from "react";

// ─── Reusable Formspree submission hook ─────────────────────────────────────
// Usage:
//   const { submit, submitting, submitted, error, reset } =
//     useFormspree("meajvrgk");
//   await submit({ name, email, message });

type FormspreePayload = Record<string, string | number | boolean | undefined>;

interface UseFormspreeReturn {
  submit: (data: FormspreePayload) => Promise<boolean>;
  submitting: boolean;
  submitted: boolean;
  error: string | null;
  reset: () => void;
}

export function useFormspree(formId: string): UseFormspreeReturn {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(data: FormspreePayload): Promise<boolean> {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        return true;
      }

      const body = await res.json().catch(() => null);
      setError(
        body?.errors?.[0]?.message ??
          "Something went wrong. Please try again."
      );
      return false;
    } catch {
      setError("Network error. Please check your connection and try again.");
      return false;
    } finally {
      setSubmitting(false);
    }
  }

  function reset() {
    setSubmitted(false);
    setError(null);
  }

  return { submit, submitting, submitted, error, reset };
}