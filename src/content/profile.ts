import type { LocalizedText, StatEntry } from "@/types/content";

export const profile = {
  name: "Pedro Hiroshigue Mori",
  initials: "PM",
  currentRole: {
    pt: "Desenvolvedor Back End na Petlove",
    en: "Back End Developer at Petlove",
  } satisfies LocalizedText,
  targetRole: {
    pt: "Desenvolvedor Backend Java",
    en: "Java Backend Developer",
  } satisfies LocalizedText,
  location: "Araras - SP, Brasil",
  email: "pedrohiroshigue@gmail.com",
  phoneDisplay: "(19) 99231-4385",
  whatsappHref: "https://wa.me/5519992314385",
  linkedin: "https://linkedin.com/in/pedromor1",
  github: "https://github.com/pedromori2",
  photo: "/avatar-pm.jpg",
  resumePdf: "/curriculo-pedro-mori.pdf",
  positioning: {
    pt: "Sou um desenvolvedor backend Java que entrega de ponta a ponta. Sustento sistemas em produção, automatizo processos que economizam dias de trabalho e já lancei sozinho um SaaS em produção.",
    en: "I'm a Java backend developer who delivers end to end. I maintain production systems, automate processes that save days of work, and have shipped a SaaS product on my own.",
  } satisfies LocalizedText,
  about: [
    {
      pt: "Sou desenvolvedor back end há 5 anos na Petlove, onde sustento e evoluo sistemas em Java — dos legados em Java 8 com JSF e PrimeFaces aos serviços modernos em Java 21 e 23 com Spring Boot, Redis e PostgreSQL, além de serviços em NestJS/TypeScript.",
      en: "I've been a back end developer at Petlove for 5 years, maintaining and evolving Java systems — from legacy Java 8 services with JSF and PrimeFaces to modern Java 21/23 services with Spring Boot, Redis and PostgreSQL, plus services in NestJS/TypeScript.",
    },
    {
      pt: "Automatizei, com Talend, o tratamento de arquivos recebidos de clientes nos processos de migração, reduzindo o SLA dessas tarefas de até 7 dias para 1 a 2 dias. Também participei do desenvolvimento de um listener de filas AWS SQS/SNS com o time de SRE e de automações em Java para extração de arquivos do Amazon S3.",
      en: "Using Talend, I automated the handling of client files in our migration processes, cutting that task's SLA from up to 7 days down to 1-2 days. I also helped build an AWS SQS/SNS queue listener with the SRE team and wrote Java automations to extract files from Amazon S3.",
    },
    {
      pt: "Fora do trabalho, desenvolvo o Celebra, um SaaS de organização de eventos que criei do zero e mantenho em produção, do back end em Spring Boot ao front end em Next.js. Hoje busco uma posição de Desenvolvedor Backend Java Pleno.",
      en: "Outside of work, I build Celebra, an event-planning SaaS I created from scratch and run in production, from the Spring Boot back end to the Next.js front end. I'm currently looking for a mid-level Java Backend Developer role.",
    },
  ] satisfies LocalizedText[],
  education: {
    pt: "Tecnologia em Análise e Desenvolvimento de Sistemas — FIAP (concluído em dez/2024)",
    en: "Associate Degree in Systems Analysis and Development — FIAP (completed Dec/2024)",
  } satisfies LocalizedText,
};

export const stats: StatEntry[] = [
  {
    value: "5",
    label: {
      pt: "anos com Java em produção",
      en: "years shipping Java in production",
    },
  },
  {
    value: "7 → 1–2",
    label: {
      pt: "dias de SLA de migração de dados, após a automação",
      en: "days of data-migration SLA, after automation",
    },
  },
  {
    value: "1",
    label: {
      pt: "SaaS em produção, construído sozinho",
      en: "SaaS in production, built solo",
    },
  },
];
