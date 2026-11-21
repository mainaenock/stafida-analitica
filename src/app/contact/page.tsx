import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EnquiryForm, EnquiryWithService } from "@/components/enquiry-form";
import { PageIntro } from "@/components/site";
import { business, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Stafida Analytica in Nairobi by WhatsApp, phone or email to discuss your project.",
};

export default function Contact() {
  return (
    <>
      <PageIntro label="Contact" title="Let’s talk about" accent="your project."
        description="Tell us what you’re working on, what you need help with and when you need it." />
      <section className="wrap contact-grid section-space" aria-label="Contact options">
        <div className="contact-direct" data-reveal>
          <h2>Get in touch directly.</h2>
          <ul>
            <li><span className="icon-box"><MessageCircle size={21} aria-hidden="true" /></span><div><h3>WhatsApp</h3><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Chat with Stafida Analytica</a></div></li>
            <li><span className="icon-box"><Phone size={21} aria-hidden="true" /></span><div><h3>Phone</h3><a href={`tel:${business.telephone}`}>{business.phone}</a></div></li>
            <li><span className="icon-box"><Mail size={21} aria-hidden="true" /></span><div><h3>Email</h3><a href={`mailto:${business.email}`}>{business.email}</a></div></li>
            <li><span className="icon-box"><MapPin size={21} aria-hidden="true" /></span><div><h3>Based in</h3><p>Nairobi, Kenya</p></div></li>
          </ul>
        </div>
        <div data-reveal>
          <Suspense fallback={<EnquiryForm />}><EnquiryWithService /></Suspense>
        </div>
      </section>
    </>
  );
}
