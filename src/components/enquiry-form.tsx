"use client";

import { useSearchParams } from "next/navigation";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { business, services, whatsappLink } from "@/lib/business";

export function EnquiryWithService() {
  const service = useSearchParams().get("service");
  const selected = services.find(({ id }) => id === service)?.id ?? "";
  return <EnquiryForm key={selected} initialService={selected} />;
}

export function EnquiryForm({ initialService = "" }: { initialService?: string }) {
  const [draft, setDraft] = useState<{ subject: string; body: string } | null>(null);
  const [error, setError] = useState("");
  const draftHeading = useRef<HTMLHeadingElement>(null);
  const formHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (draft) draftHeading.current?.focus();
  }, [draft]);

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = String(fields.get("name") ?? "").trim();
    const email = String(fields.get("email") ?? "").trim();
    const message = String(fields.get("message") ?? "").trim();
    const service = services.find(({ id }) => id === fields.get("service"))?.title ?? "General enquiry";

    if (!name || !message) {
      setError("Please enter your name and a short description of your project.");
      return;
    }

    setError("");
    setDraft({
      subject: `Project enquiry · ${service}`,
      body: [
        "Hello Stafida Analytica,",
        "",
        message,
        "",
        `Service: ${service}`,
        `Name: ${name}`,
        ...(email ? [`Email: ${email}`] : []),
      ].join("\n"),
    });
  }

  return (
    <div className="enquiry-form">
      <div hidden={draft !== null}>
        <h2 ref={formHeading} tabIndex={-1}>Tell us about your project.</h2>
        <p>Prepare a message to send by WhatsApp or email.</p>
        <form onSubmit={prepareEnquiry}>
          <div className="form-row">
            <label>Your name
              <input name="name" required autoComplete="name" maxLength={100} placeholder="Full name" />
            </label>
            <label>Email <span>(optional)</span>
              <input name="email" type="email" autoComplete="email" maxLength={150} placeholder="you@example.com" />
            </label>
          </div>
          <label>Service
            <select name="service" defaultValue={initialService}>
              <option value="">General enquiry</option>
              {services.map(({ id, title }) => <option value={id} key={id}>{title}</option>)}
            </select>
          </label>
          <label>What are you working on?
            <textarea name="message" required rows={5} maxLength={1000} placeholder="Share your goal, timeline or the question you’d like to answer." />
          </label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button type="submit" className="button button-dark">Prepare enquiry</button>
        </form>
      </div>
      {draft && <div className="enquiry-draft">
        <h2 ref={draftHeading} tabIndex={-1}>Your enquiry is ready.</h2>
        <p>Choose an app below, then send the message from there.</p>
        <div className="draft-message">{draft.body}</div>
        <div className="actions">
          <a className="button button-dark" href={whatsappLink(draft.body)} target="_blank" rel="noopener noreferrer">Open WhatsApp</a>
          <a className="button button-outline" href={`mailto:${business.email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`}>Open email</a>
        </div>
        <button type="button" className="text-button" onClick={() => {
          setDraft(null);
          requestAnimationFrame(() => formHeading.current?.focus());
        }}>Edit message</button>
      </div>}
    </div>
  );
}
