import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { ConsultationBanner, PageIntro, ServiceIcon } from "@/components/site";
import { services } from "@/lib/business";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Stafida Analytica’s market research and surveys, statistical analysis and machine learning, actuarial and insurance services, and thesis and dissertation support.",
};

export default function Services() {
  return (
    <>
      <PageIntro label="Services" title="Find the expertise" accent="your project needs."
        description="Get help designing a survey, making sense of your data, assessing risk or moving your research forward." />
      <div className="service-index"><nav className="wrap service-index-inner" aria-label="Jump to a service">
        {services.map(({ id, short }) => <Link key={id} href={`#${id}`}><ServiceIcon id={id} size={17} />{short}</Link>)}
      </nav></div>
      <div className="wrap service-list">
        {services.map((service) => (
          <section key={service.id} className="service-detail" id={service.id} aria-labelledby={`title-${service.id}`}>
            <div className="service-detail-copy" data-reveal>
              <span className="icon-box"><ServiceIcon id={service.id} /></span>
              <h2 id={`title-${service.id}`}>{service.title}</h2>
              <p>{service.description}</p>
              <Link className="button button-dark" href={`/contact/?service=${service.id}`}>Enquire about this service</Link>
            </div>
            <div className="offerings" data-reveal>
              <h3>How we can help</h3>
              <ul>{service.offerings.map((offering) => <li key={offering}><Check size={19} strokeWidth={1.65} aria-hidden="true" />{offering}</li>)}</ul>
            </div>
          </section>
        ))}
      </div>
      <ConsultationBanner />
    </>
  );
}
