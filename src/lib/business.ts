export const business = {
  name: "Stafida Analytica Limited",
  phone: "+254 727 262 321",
  telephone: "+254727262321",
  email: "kipkoechkemboiezrah@gmail.com",
  instagram: "https://www.instagram.com/kipkoech_ezrah/",
  linkedin: "https://ke.linkedin.com/in/kipkoech-ezrah",
};

export function whatsappLink(message = "Hello Stafida Analytica, I’d like to discuss a project.") {
  return `https://wa.me/${business.telephone.slice(1)}?text=${encodeURIComponent(message)}`;
}

export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

export const services = [
  {
    id: "research",
    title: "Research, polls & surveys",
    short: "Research & surveys",
    summary: "Understand the people and markets behind your next decision.",
    description: "We design market and social research around the question you need answered. Combine quantitative surveys with interviews or focus groups to understand what people think, what they do, and what drives their choices.",
    offerings: ["Market and social research", "Opinion polls and survey design", "Interviews and focus groups", "Analysis and reporting"],
  },
  {
    id: "analytics",
    title: "Data science & analytics",
    short: "Data & analytics",
    summary: "Turn complex datasets into clear findings you can act on.",
    description: "From planning how to collect data to interpreting the results, we help you build a reliable evidence base. Where the question calls for it, we use statistical modelling and machine learning to explore patterns or make predictions.",
    offerings: ["Data collection planning and tools", "Data cleaning and statistical analysis", "Predictive modelling and machine learning", "Visualisation and analytical reports"],
  },
  {
    id: "actuarial",
    title: "Actuarial & insurance",
    short: "Actuarial & insurance",
    summary: "Understand your exposure and make better-informed risk decisions.",
    description: "We bring quantitative analysis to questions about risk and uncertainty. Our actuarial consulting and insurance support help you understand the exposure, evaluate your options, and decide what to do next.",
    offerings: ["Actuarial consulting", "Quantitative risk assessment", "Scenario analysis and modelling", "Insurance agency services"],
  },
  {
    id: "academic",
    title: "Academic research support",
    short: "Academic support",
    summary: "Get expert guidance from the first research question through to your defence.",
    description: "We support researchers working on master's projects, theses and PhD dissertations. Get guidance on your methodology and analysis, feedback on your own drafts, and coaching to explain and defend your findings.",
    offerings: ["Proposal and research design guidance", "Data collection tools and statistical support", "Draft feedback, editing and referencing", "Presentation and oral defence coaching"],
  },
] as const;
