import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardList, Compass, FileChartColumn } from "lucide-react";
import { ConsultationBanner, PageIntro } from "@/components/site";
import { asset } from "@/lib/business";

export const metadata: Metadata = {
  title: "About",
  description: "Get to know Stafida Analytica Limited and how the Nairobi-based consultancy approaches research, analysis and risk advisory.",
};

const approach = [
  { Icon: Compass, title: "Define the question", text: "We agree on what you need to learn, what evidence is available and what a useful result would look like." },
  { Icon: ClipboardList, title: "Gather and analyse evidence", text: "We choose methods suited to the question, whether that means a survey, a statistical model or a review of existing evidence." },
  { Icon: FileChartColumn, title: "Explain what the findings mean", text: "We put the results in plain language so you can see what the evidence supports, where it has limits and what you might do next." },
];

export default function About() {
  return (
    <>
      <PageIntro label="About Stafida Analytica" title="Evidence you can" accent="work with."
        description="A Nairobi-based consultancy working across research, data science, actuarial services and academic research support." />
      <section className="wrap about-story section-space" aria-labelledby="about-title">
        <div className="about-image" data-reveal><Image src={asset("/images/boardroom.webp")} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
        <div className="about-copy" data-reveal>
          <h2 id="about-title">Who we work with.</h2>
          <p>Stafida Analytica Limited works with businesses, public institutions, nonprofits and individual researchers. Our work ranges from understanding how a market is changing to interpreting survey results, assessing financial risk and helping researchers develop their own studies.</p>
          <p>Every project starts by getting clear on what you need to know and how you’ll use the findings.</p>
        </div>
      </section>
      <section className="approach section-space" aria-labelledby="approach-title">
        <div className="wrap">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Our approach</p>
            <h2 id="approach-title">How we work.</h2>
          </div>
          <div className="approach-grid">
            {approach.map(({ Icon, title, text }) => (
              <article key={title} data-reveal>
                <span className="icon-box"><Icon size={23} strokeWidth={1.55} aria-hidden="true" /></span>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ConsultationBanner />
    </>
  );
}
