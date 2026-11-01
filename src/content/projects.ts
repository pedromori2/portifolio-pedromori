import type { ProjectEntry } from "@/types/content";

export const projects: ProjectEntry[] = [
  {
    slug: "celebra",
    name: "Celebra",
    status: "live",
    featured: true,
    period: { pt: "2024 — atual", en: "2024 — present" },
    tagline: {
      pt: "SaaS de organização de eventos que desenvolvi do zero, em produção na fase beta.",
      en: "Event-planning SaaS I built from scratch, live in beta.",
    },
    description: [
      {
        pt: "O Celebra é um SaaS de organização de eventos que desenvolvo como projeto pessoal desde 2024. Está em produção, em fase beta com profissionais de eventos.",
        en: "Celebra is an event-planning SaaS I've been building as a personal project since 2024. It's in production, in beta with event professionals.",
      },
      {
        pt: "Sou responsável por todo o ciclo do produto: arquitetura, desenvolvimento, deploy, monitoramento e divulgação.",
        en: "I'm responsible for the full product cycle: architecture, development, deployment, monitoring and outreach.",
      },
    ],
    highlights: [
      { pt: "Confirmação de presença (RSVP) de convidados", en: "Guest RSVP confirmation" },
      { pt: "Lista de presentes", en: "Gift registry" },
      { pt: "Redirecionamento para WhatsApp", en: "WhatsApp redirect" },
      { pt: "Calculadoras de mesas e de comida", en: "Table and food calculators" },
      { pt: "Relatórios", en: "Reports" },
    ],
    pricing: [
      { name: "Free", price: { pt: "Grátis", en: "Free" } },
      { name: "Essencial", price: { pt: "R$ 39 / 60 dias", en: "R$ 39 / 60 days" } },
      { name: "Plus", price: { pt: "R$ 89 / 120 dias", en: "R$ 89 / 120 days" } },
    ],
    stack: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Flyway",
      "MapStruct",
      "Next.js",
      "TypeScript",
      "Asaas",
      "Resend",
      "Grafana",
      "Sentry",
      "Logtail",
    ],
    links: [{ label: { pt: "Acessar site", en: "Visit site" }, href: "https://celebrahub.com" }],
    hasArchitectureDiagram: true,
  },
  {
    slug: "hosthabbo",
    name: "HostHabbo",
    status: "in-development",
    period: { pt: "em andamento", en: "in progress" },
    tagline: {
      pt: "Plataforma de reservas de hotel, criada como projeto estruturado de estudo.",
      en: "Hotel booking platform, built as a structured study project.",
    },
    description: [
      {
        pt: "Projeto em desenvolvimento, organizado em 8 épicos temáticos, com Definition of Done formal e revisão de PRs no estilo tech lead.",
        en: "Project in progress, organized into 8 themed epics, with a formal Definition of Done and tech-lead-style PR reviews.",
      },
    ],
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "Flyway", "Maven"],
    links: [],
  },
  {
    slug: "ricardo-team",
    name: "Ricardo Team",
    status: "live",
    tagline: {
      pt: "Plataforma do Ricardo Team, com back end de API de pagamentos.",
      en: "Platform for Ricardo Team, with a payments API back end.",
    },
    description: [
      {
        pt: "Atuei no desenvolvimento do back end: uma API de pagamentos em Spring Boot. O front end do projeto é em HTML e TypeScript.",
        en: "I worked on the back end: a payments API built with Spring Boot. The project's front end is built with HTML and TypeScript.",
      },
    ],
    stack: ["Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "JPA", "HTML", "TypeScript"],
    links: [
      { label: { pt: "Acessar site", en: "Visit site" }, href: "https://ricardoteam.com" },
      {
        label: { pt: "Código (front)", en: "Code (front)" },
        href: "https://github.com/pedromori2/ric-team-front",
      },
      {
        label: { pt: "Código (back)", en: "Code (back)" },
        href: "https://github.com/pedromori2/ric-team-back",
      },
    ],
  },
  {
    slug: "queue-quest-bushido",
    name: "Queue Quest Bushido",
    status: "concept",
    playful: true,
    tagline: {
      pt: "Idle RPG em HTML/Canvas com estética do Japão feudal.",
      en: "Idle RPG in HTML/Canvas with a feudal-Japan aesthetic.",
    },
    description: [
      {
        pt: "Combate por ondas, 6 slots de equipamento, sistema de forja/aprimoramento, loja e painel de heróis. Publicação na Steam planejada via Electron ou Tauri.",
        en: "Wave-based combat, 6 equipment slots, a forge/upgrade system, a shop and a hero panel. Steam release planned via Electron or Tauri.",
      },
    ],
    stack: ["HTML", "Canvas", "JavaScript"],
    links: [],
  },
  {
    slug: "arena-dos-fragmentos",
    name: "Arena dos Fragmentos",
    status: "concept",
    playful: true,
    tagline: {
      pt: "Conceito de Tower Defense/Roguelike em Godot 4.",
      en: "Tower Defense/Roguelike concept built in Godot 4.",
    },
    description: [
      {
        pt: "Inspirado em Brotato e Balatro.",
        en: "Inspired by Brotato and Balatro.",
      },
    ],
    stack: ["Godot 4", "GDScript"],
    links: [],
  },
];

export const mainProjects = projects.filter((p) => !p.playful);
export const playfulProjects = projects.filter((p) => p.playful);
