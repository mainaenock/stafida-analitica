import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { ConsultationBanner, ServiceIcon } from "@/components/site";
import { asset, services } from "@/lib/business";

export default function Home() {
  return (
    <>
      <section className="home-hero" aria-labelledby="hero-title">
        <Image className="hero-image" src={asset("/images/nairobi.webp")} alt="" fill preload sizes="100vw" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="wrap hero-inner">
          <div className="hero-copy entrance">
            <p className="eyebrow light">Research, analytics & advisory</p>
            <h1 id="hero-title">Clarity in a<br /><em>complex world.</em></h1>
            <p className="hero-description">From market research to risk modelling, we help organisations and researchers make decisions grounded in evidence.</p>
            <div className="actions">
              <Link className="button button-sky" href="/services/">Explore our services</Link>
              <Link className="button button-outline-light" href="/contact/">Talk to us</Link>
            </div>
          </div>
          <div className="hero-location"><MapPin size={15} strokeWidth={1.7} aria-hidden="true" /> Nairobi, Kenya</div>
        </div>
      </section>

      <section className="wrap home-services section-space" aria-labelledby="expertise-title">
        <div className="section-heading split-heading" data-reveal>
          <div>
            <p className="eyebrow">Our expertise</p>
            <h2 id="expertise-title">How we can help.</h2>
          </div>
          <p>Find support at every stage, from designing a study and collecting data to assessing risk and explaining what the results mean.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <Link className="service-card" href={`/services/#${service.id}`} key={service.id} data-reveal>
              <span className="icon-box"><ServiceIcon id={service.id} /></span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <span className="card-link">Explore service<span className="sr-only"> {service.title}</span></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap home-story" aria-labelledby="story-title" data-reveal>
        <div className="story-copy">
          <p className="eyebrow light">Based in Nairobi</p>
          <h2 id="story-title">Good analysis starts with <em>the right question.</em></h2>
          <p>We start with the decision or research question you’re facing, then choose a method that fits. You’ll know what the evidence supports and where uncertainty remains.</p>
          <Link className="button button-outline-light" href="/about/">How we work</Link>
        </div>
        <div className="story-image"><Image src={asset("/images/boardroom.webp")} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
      </section>
      <ConsultationBanner />
    </>
  );
}
