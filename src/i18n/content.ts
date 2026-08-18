export type Lang = "fr" | "en";

export interface SkillGroupData {
  name: string;
  items: string[];
}
export interface ServiceCard {
  title: string;
  desc: string;
  tags: string[];
}
export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
}
export interface ProjectItem {
  name: string;
  desc: string;
  tags: string[];
}
export interface EducationItem {
  degree: string;
  school: string;
  period: string;
}
export interface Stat {
  value: string;
  label: string;
}

export interface Content {
  nav: { about: string; skills: string; services: string; experience: string; projects: string; contact: string };
  langLabel: string;
  hero: {
    available: string;
    greeting: string;
    name: string;
    roles: string[];
    tagline: string;
    ctaContact: string;
    ctaProjects: string;
    ctaCV: string;
    cvFile: string;
    location: string;
  };
  about: { title: string; kicker: string; paragraphs: string[]; stats: Stat[] };
  skills: { title: string; kicker: string; subtitle: string; groups: SkillGroupData[] };
  services: { title: string; kicker: string; subtitle: string; cards: ServiceCard[]; note: string };
  experience: { title: string; kicker: string; items: ExperienceItem[] };
  projects: { title: string; kicker: string; subtitle: string; items: ProjectItem[] };
  education: { title: string; kicker: string; items: EducationItem[]; languagesTitle: string; languages: string[] };
  contact: {
    title: string;
    kicker: string;
    subtitle: string;
    email: string;
    phone: string;
    cta: string;
    emailLabel: string;
    phoneLabel: string;
  };
  footer: string;
}

const EMAIL = "rdarquin@gmail.com";
const PHONE = "+33 6 28 72 47 48";

export const contentFR: Content = {
  nav: { about: "À propos", skills: "Compétences", services: "Services", experience: "Parcours", projects: "Réalisations", contact: "Contact" },
  langLabel: "EN",
  hero: {
    available: "Ouvert aux opportunités",
    greeting: "Bonjour, je suis",
    name: "Rémy Darquin",
    roles: ["Consultant Data", "Data Analyst", "Professeur de mathématiques"],
    tagline:
      "Data Analyst passionné par l'analyse de données et l'aide à la décision, avec une appétence pour les défis intellectuels et la pédagogie. J'aime transformer des données complexes en insights clairs et actionnables.",
    ctaContact: "Me contacter",
    ctaProjects: "Voir mes réalisations",
    ctaCV: "Télécharger le CV",
    cvFile: "cv/Remy_Darquin_CV_FR.pdf",
    location: "France",
  },
  about: {
    title: "À propos",
    kicker: "01 — Qui je suis",
    paragraphs: [
      "Diplômé d'un Master 2 Mathématiques Appliquées, Statistiques et Économétrie (Université de Rennes 1), j'ai construit mon parcours autour de deux passions : l'analyse de données et la transmission du savoir.",
      "En alternance chez Accor, j'ai analysé les pages web des hôtels pour améliorer le taux de conversion et développé un modèle de Customer Lifetime Value (CLTV), avec une restitution claire aux équipes métiers. Chez SYSTRA, j'ai découvert la collecte et la préparation de données ainsi que les outils BI (Excel, Power BI).",
      "Curieux et rigoureux, je recherche aujourd'hui une mission ou un poste de Data Analyst / Data Scientist, où mettre à profit ma capacité à transformer des données complexes en analyses claires et exploitables pour la prise de décision.",
    ],
    stats: [
      { value: "Master 2", label: "Maths appliquées & data" },
      { value: "Accor", label: "Data Analyst en alternance" },
      { value: "FR · EN", label: "Anglais professionnel (B2)" },
      { value: "3 ans", label: "d'enseignement des maths" },
    ],
  },
  skills: {
    title: "Compétences",
    kicker: "02 — Ma boîte à outils",
    subtitle: "De la donnée brute à la décision — et à sa transmission.",
    groups: [
      { name: "Techniques", items: ["SQL", "Python", "Power BI", "Excel"] },
      { name: "Data science", items: ["Analyse exploratoire", "Data visualisation", "Machine learning", "Statistiques"] },
      { name: "Qualités", items: ["Esprit analytique", "Pédagogie", "Rigueur", "Curiosité"] },
    ],
  },
  services: {
    title: "Ce que j'apporte",
    kicker: "03 — Domaines d'expertise",
    subtitle: "Analyser, visualiser et expliquer — trois réflexes qui vont ensemble.",
    cards: [
      {
        title: "Analyse de données & BI",
        desc: "Requêtage SQL, tableaux de bord Power BI et suivi d'indicateurs, avec une restitution claire et synthétique aux équipes métiers.",
        tags: ["SQL", "Power BI", "Excel", "Dashboards"],
      },
      {
        title: "Data science & modélisation",
        desc: "Analyse exploratoire et modèles prédictifs — comme un modèle de Customer Lifetime Value — au service de la prise de décision.",
        tags: ["Python", "Machine Learning", "CLTV", "Statistiques"],
      },
      {
        title: "Pédagogie & vulgarisation",
        desc: "Rendre une analyse de données accessible et compréhensible pour des interlocuteurs non techniques, avec clarté et rigueur.",
        tags: ["Vulgarisation", "Storytelling data", "Clarté"],
      },
    ],
    note: "La donnée n'a de valeur que si elle éclaire une décision — chaque analyse part d'une question métier claire.",
  },
  experience: {
    title: "Parcours",
    kicker: "04 — Expérience",
    items: [
      {
        role: "Data Analyst (Alternance)",
        org: "Accor",
        period: "2024 — 2025",
        location: "Issy-les-Moulineaux",
        bullets: [
          "Analyse des pages web des hôtels afin d'améliorer le taux de conversion.",
          "Développement d'un modèle de Customer Lifetime Value (CLTV).",
          "Restitution synthétique des études aux équipes métiers.",
        ],
      },
      {
        role: "Data Analyst (Stage)",
        org: "SYSTRA",
        period: "Juin — Août 2024",
        location: "Issy-les-Moulineaux",
        bullets: [
          "Collecte et préparation des données liées à la politique de formation interne.",
          "Formation aux outils BI : Excel et Power BI.",
        ],
      },
      {
        role: "Professeur de mathématiques (contractuel)",
        org: "Collège des Baous",
        period: "Avril — Juillet 2026",
        location: "Saint-Jeannet",
        bullets: [
          "Construction de cours adaptés à chaque niveau et gestion de la classe.",
        ],
      },
      {
        role: "Professeur particulier de mathématiques",
        org: "Acadomia · Cours Ado",
        period: "2023 — Présent",
        location: "France",
        bullets: [
          "Accompagnement personnalisé d'élèves du collège au lycée.",
        ],
      },
    ],
  },
  projects: {
    title: "Réalisations",
    kicker: "05 — Réalisations",
    subtitle: "Quelques projets et engagements qui comptent pour moi.",
    items: [
      {
        name: "Modèle de Customer Lifetime Value",
        desc: "Développement d'un modèle CLTV chez Accor pour mieux anticiper la valeur client dans le secteur hôtelier.",
        tags: ["Python", "CLTV", "Machine Learning"],
      },
      {
        name: "Certification Finance de marché",
        desc: "12 ECTS validés au CNAM (février 2026) — une porte d'entrée vers les métiers de la finance quantitative.",
        tags: ["Finance", "CNAM", "Certification"],
      },
    ],
  },
  education: {
    title: "Formation & langues",
    kicker: "06 — Formation",
    items: [
      { degree: "Master 2 Mathématiques Appliquées, Statistiques et Économétrie", school: "Université de Rennes 1", period: "2023 — 2025" },
      { degree: "Licence 3 Mathématiques et licence 3 Statistiques", school: "Université Bretagne-Sud (Vannes)", period: "2021 — 2023" },
      { degree: "3e année d'école d'ingénieur en mathématiques", school: "Polytech Clermont-Ferrand", period: "2020 — 2021" },
      { degree: "Classe préparatoire (CPGE) — Physique / Sciences de l'Ingénieur", school: "Lycée François 1er, Fontainebleau", period: "2018 — 2020" },
    ],
    languagesTitle: "Langues",
    languages: ["Français — langue maternelle", "Anglais — B2 (TOEIC 785)"],
  },
  contact: {
    title: "Discutons",
    kicker: "07 — Contact",
    subtitle: "Une mission data, un projet pédagogique, une question ? Écrivez-moi.",
    email: EMAIL,
    phone: PHONE,
    cta: "Envoyer un email",
    emailLabel: "Email",
    phoneLabel: "Téléphone",
  },
  footer: "Conçu et développé pour Rémy Darquin · React + TypeScript + Tailwind",
};

export const contentEN: Content = {
  nav: { about: "About", skills: "Skills", services: "Services", experience: "Experience", projects: "Highlights", contact: "Contact" },
  langLabel: "FR",
  hero: {
    available: "Open to opportunities",
    greeting: "Hi, I'm",
    name: "Rémy Darquin",
    roles: ["Data Consultant", "Data Analyst", "Maths Teacher"],
    tagline:
      "Data Analyst passionate about data analysis and decision support, with a taste for intellectual challenges and clear communication. I enjoy turning complex data into clear, actionable insights.",
    ctaContact: "Get in touch",
    ctaProjects: "See my highlights",
    ctaCV: "Download resume",
    cvFile: "cv/Remy_Darquin_CV_FR.pdf",
    location: "France",
  },
  about: {
    title: "About",
    kicker: "01 — Who I am",
    paragraphs: [
      "Holding a Master's in Applied Mathematics, Statistics and Econometrics (Université de Rennes 1), I've built my path around two passions: analysing data and passing on knowledge.",
      "As a data analyst apprentice at Accor, I analysed hotel web pages to improve conversion rates and built a Customer Lifetime Value (CLTV) model, presenting findings clearly to business teams. At SYSTRA, I learned data collection and preparation along with BI tools (Excel, Power BI).",
      "Curious and rigorous, I'm now looking for a Data Analyst / Data Scientist role where I can put my ability to turn complex data into clear, decision-ready analysis to good use.",
    ],
    stats: [
      { value: "MSc", label: "Applied maths & data" },
      { value: "Accor", label: "Data Analyst apprentice" },
      { value: "FR · EN", label: "Professional English (B2)" },
      { value: "3 yrs", label: "teaching mathematics" },
    ],
  },
  skills: {
    title: "Skills",
    kicker: "02 — My toolkit",
    subtitle: "From raw data to decision — and to explaining it.",
    groups: [
      { name: "Technical", items: ["SQL", "Python", "Power BI", "Excel"] },
      { name: "Data science", items: ["Exploratory analysis", "Data visualisation", "Machine learning", "Statistics"] },
      { name: "Strengths", items: ["Analytical mindset", "Teaching", "Rigour", "Curiosity"] },
    ],
  },
  services: {
    title: "What I bring",
    kicker: "03 — Areas of expertise",
    subtitle: "Analyse, visualise and explain — three reflexes that go together.",
    cards: [
      {
        title: "Data analysis & BI",
        desc: "SQL querying, Power BI dashboards and KPI tracking, with clear and concise reporting for business teams.",
        tags: ["SQL", "Power BI", "Excel", "Dashboards"],
      },
      {
        title: "Data science & modelling",
        desc: "Exploratory analysis and predictive models — like a Customer Lifetime Value model — in support of decision-making.",
        tags: ["Python", "Machine Learning", "CLTV", "Statistics"],
      },
      {
        title: "Teaching & knowledge sharing",
        desc: "Making data analysis accessible and understandable for non-technical stakeholders, with clarity and rigour.",
        tags: ["Storytelling", "Clarity", "Communication"],
      },
    ],
    note: "Data is only worth as much as the decision it informs — every analysis starts with a clear business question.",
  },
  experience: {
    title: "Experience",
    kicker: "04 — Experience",
    items: [
      {
        role: "Data Analyst (Apprenticeship)",
        org: "Accor",
        period: "2024 — 2025",
        location: "Issy-les-Moulineaux, France",
        bullets: [
          "Analysed hotel web pages to improve conversion rate.",
          "Developed a Customer Lifetime Value (CLTV) model.",
          "Delivered concise, synthesised findings to business teams.",
        ],
      },
      {
        role: "Data Analyst (Internship)",
        org: "SYSTRA",
        period: "Jun — Aug 2024",
        location: "Issy-les-Moulineaux, France",
        bullets: [
          "Collected and prepared data related to internal training policy.",
          "Trained on BI tools: Excel and Power BI.",
        ],
      },
      {
        role: "Mathematics Teacher (fixed-term)",
        org: "Collège des Baous",
        period: "Apr — Jul 2026",
        location: "Saint-Jeannet, France",
        bullets: [
          "Built lessons tailored to each class level and managed classroom discipline.",
        ],
      },
      {
        role: "Private Mathematics Tutor",
        org: "Acadomia · Cours Ado",
        period: "2023 — Present",
        location: "France",
        bullets: [
          "One-on-one support for middle- and high-school students.",
        ],
      },
    ],
  },
  projects: {
    title: "Highlights",
    kicker: "05 — Highlights",
    subtitle: "A few projects and commitments that matter to me.",
    items: [
      {
        name: "Customer Lifetime Value model",
        desc: "Built a CLTV model at Accor to better anticipate customer value in the hospitality sector.",
        tags: ["Python", "CLTV", "Machine Learning"],
      },
      {
        name: "Market Finance certification",
        desc: "12 ECTS credits validated at CNAM (February 2026) — a gateway into quantitative finance.",
        tags: ["Finance", "CNAM", "Certification"],
      },
    ],
  },
  education: {
    title: "Education & languages",
    kicker: "06 — Education",
    items: [
      { degree: "MSc Applied Mathematics, Statistics and Econometrics", school: "Université de Rennes 1", period: "2023 — 2025" },
      { degree: "BSc Mathematics & BSc Statistics", school: "Université Bretagne-Sud (Vannes)", period: "2021 — 2023" },
      { degree: "3rd year of engineering school, mathematics track", school: "Polytech Clermont-Ferrand", period: "2020 — 2021" },
      { degree: "Preparatory classes (CPGE) — Physics / Engineering Sciences", school: "Lycée François 1er, Fontainebleau", period: "2018 — 2020" },
    ],
    languagesTitle: "Languages",
    languages: ["French — native", "English — B2 (TOEIC 785)"],
  },
  contact: {
    title: "Let's talk",
    kicker: "07 — Contact",
    subtitle: "A data project, a teaching opportunity, a question? Drop me a line.",
    email: EMAIL,
    phone: PHONE,
    cta: "Send an email",
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
  footer: "Designed & built for Rémy Darquin · React + TypeScript + Tailwind",
};

export const CONTENT: Record<Lang, Content> = { fr: contentFR, en: contentEN };
