import type { SkillGroup } from "@/types/content";

export const skills: SkillGroup[] = [
  {
    title: { pt: "Back end", en: "Back end" },
    items: ["Java (8–23)", "Spring Boot", "Spring Security", "JSF", "PrimeFaces", "NestJS"],
  },
  {
    title: { pt: "Front end", en: "Front end" },
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: { pt: "Bancos de dados", en: "Databases" },
    items: ["PostgreSQL", "MySQL", "SQL Server", "Firebird", "MongoDB", "Redis", "Flyway"],
  },
  {
    title: { pt: "Cloud e mensageria", en: "Cloud & messaging" },
    items: ["AWS S3", "AWS SQS", "AWS SNS", "GCP"],
  },
  {
    title: { pt: "Integração", en: "Integration" },
    items: ["APIs REST", "Web Services", "ETL (Talend)"],
  },
  {
    title: { pt: "Observabilidade", en: "Observability" },
    items: ["Grafana", "Sentry", "Datadog"],
  },
  {
    title: { pt: "Qualidade e práticas", en: "Quality & practices" },
    items: ["JUnit", "Code review", "Pair programming", "Git", "Scrum", "Kanban"],
  },
  {
    title: { pt: "IA no desenvolvimento", en: "AI in development" },
    items: ["Claude Code", "APIs de IA generativa"],
  },
];
