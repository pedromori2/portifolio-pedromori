import type { Locale } from "@/types/content";

export const locales: Locale[] = ["pt", "en"];
export const defaultLocale: Locale = "pt";

export const dictionary = {
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      experience: "Experiência",
      skills: "Habilidades",
      contact: "Contato",
    },
    hero: {
      viewProjects: "Ver projetos",
      downloadResume: "Baixar currículo",
      contact: "Contato",
    },
    stats: {
      title: "Destaques em números",
    },
    about: {
      title: "Sobre",
      education: "Formação",
    },
    projects: {
      title: "Projetos",
      featured: "Em destaque",
      statusLive: "Em produção",
      statusInDevelopment: "Em desenvolvimento",
      statusConcept: "Conceito",
      features: "Funcionalidades",
      pricing: "Planos",
      stack: "Stack",
      viewDetails: "Ver detalhes",
      playfulTitle: "Nas horas vagas",
      backToProjects: "Voltar para projetos",
      architecture: "Arquitetura",
    },
    experience: {
      title: "Experiência",
    },
    skills: {
      title: "Habilidades",
    },
    contact: {
      title: "Contato",
      subtitle: "Vamos conversar? Esses são os melhores jeitos de me encontrar.",
      email: "E-mail",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
    theme: {
      toggleToLight: "Ativar tema claro",
      toggleToDark: "Ativar tema escuro",
    },
    lang: {
      toggle: "Mudar para inglês",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      viewProjects: "View projects",
      downloadResume: "Download resume",
      contact: "Contact",
    },
    stats: {
      title: "Highlights by the numbers",
    },
    about: {
      title: "About",
      education: "Education",
    },
    projects: {
      title: "Projects",
      featured: "Featured",
      statusLive: "Live",
      statusInDevelopment: "In development",
      statusConcept: "Concept",
      features: "Features",
      pricing: "Pricing",
      stack: "Stack",
      viewDetails: "View details",
      playfulTitle: "In my free time",
      backToProjects: "Back to projects",
      architecture: "Architecture",
    },
    experience: {
      title: "Experience",
    },
    skills: {
      title: "Skills",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's talk? Here are the best ways to reach me.",
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      rights: "All rights reserved.",
    },
    theme: {
      toggleToLight: "Switch to light theme",
      toggleToDark: "Switch to dark theme",
    },
    lang: {
      toggle: "Switch to Portuguese",
    },
  },
};

export type Dictionary = (typeof dictionary)[Locale];
