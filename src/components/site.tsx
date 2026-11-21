import Image from "next/image";
import Link from "next/link";
import { ChartNoAxesCombined, GraduationCap, MapPin, MessagesSquare, ShieldCheck } from "lucide-react";
import { asset, business, services, whatsappLink } from "@/lib/business";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

const serviceIcons = {
  research: MessagesSquare,
  analytics: ChartNoAxesCombined,
  actuarial: ShieldCheck,
  academic: GraduationCap,
};

export function ServiceIcon({ id, size = 23 }: { id: keyof typeof serviceIcons; size?: number }) {
  const Icon = serviceIcons[id];
  return <Icon size={size} strokeWidth={1.55} aria-hidden="true" />;
}

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Stafida Analytica home">
      <span className="brand-mark" aria-hidden="true">
        <Image src={asset("/images/stafida-emblem.webp")} alt="" width={256} height={188} loading="eager" />
      </span>
      <span className="brand-name" aria-hidden="true">
        <span className="brand-primary">Stafida</span>
        <span className="brand-secondary">Analytica</span>
        <span className="brand-legal">Limited</span>
      </span>
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-intro">
            <Brand />
            <p>Research, analytics and advisory<br className="desktop-break" /> from Nairobi, Kenya.</p>
          </div>
          <div>
            <h2>Explore</h2>
            {navigation.slice(1).map(({ label, href }) => <Link key={href} href={href}>{label}</Link>)}
          </div>
          <div>
            <h2>Services</h2>
            {services.map((service) => <Link key={service.id} href={`/services/#${service.id}`}>{service.short}</Link>)}
          </div>
          <div>
            <h2>Get in touch</h2>
            <a href={`mailto:${business.email}`}>{business.email}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={business.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={business.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-base">
          <span>© {new Date().getUTCFullYear()} {business.name}</span>
          <span><MapPin size={15} aria-hidden="true" /> Nairobi, Kenya</span>
        </div>
      </div>
    </footer>
  );
}

export function ConsultationBanner() {
  return (
    <section className="consultation">
      <div className="wrap consultation-inner" data-reveal>
        <div>
          <h2>What are you working on?</h2>
          <p>Tell us what you need to find out, assess or decide.</p>
        </div>
        <Link className="button button-dark" href="/contact/">Discuss your project</Link>
      </div>
    </section>
  );
}

export function PageIntro({ label, title, accent, description }: {
  label: string;
  title: string;
  accent?: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <div className="intro-grid" aria-hidden="true" />
      <div className="wrap intro-inner entrance">
        <p className="eyebrow light">{label}</p>
        <h1>{title}{accent && <> <em>{accent}</em></>}</h1>
        <p className="intro-description">{description}</p>
      </div>
    </section>
  );
}
