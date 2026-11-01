import type { ExperienceEntry } from "@/types/content";

export const experience: ExperienceEntry[] = [
  {
    company: "Petlove",
    role: {
      pt: "Desenvolvedor Back End Jr.",
      en: "Jr. Back End Developer",
    },
    period: {
      pt: "ago/2021 — atual",
      en: "Aug 2021 — present",
    },
    bullets: [
      {
        pt: "Sustentação e evolução de sistemas legados em Java 8 (JSF, PrimeFaces, Jasper) e de serviços modernos em Java 21 e 23 com Spring Boot, Redis e PostgreSQL, além de serviços em NestJS/TypeScript.",
        en: "Maintenance and evolution of legacy Java 8 systems (JSF, PrimeFaces, Jasper) and modern services in Java 21/23 with Spring Boot, Redis and PostgreSQL, plus services in NestJS/TypeScript.",
      },
      {
        pt: "Automação com Talend (ETL) do tratamento de arquivos recebidos de clientes (.sql, .dump, .bak, .fdb, .gdb, .csv, .xlsx), reduzindo o SLA de migração de até 7 dias para 1 a 2 dias.",
        en: "Built a Talend (ETL) automation to process client-submitted files (.sql, .dump, .bak, .fdb, .gdb, .csv, .xlsx), cutting migration SLA from up to 7 days to 1-2 days.",
      },
      {
        pt: "Desenvolvimento, com o time de SRE, de um listener de filas AWS SQS/SNS que automatiza a extração de dumps de schemas PostgreSQL.",
        en: "Built an AWS SQS/SNS queue listener with the SRE team to automate PostgreSQL schema dump extraction.",
      },
      {
        pt: "Automação em Java para extrair arquivos do Amazon S3, com configuração externa (.properties/.env) e processamento em lotes de 500 IDs, gerando arquivos ZIP.",
        en: "Java automation to extract files from Amazon S3, with external configuration (.properties/.env) and batch processing of 500 IDs, generating ZIP files.",
      },
      {
        pt: "Trabalho com bancos relacionais (PostgreSQL, MySQL, SQL Server, Firebird) e NoSQL (MongoDB, Redis); integrações por APIs REST e Web Services; testes unitários com JUnit.",
        en: "Work with relational databases (PostgreSQL, MySQL, SQL Server, Firebird) and NoSQL (MongoDB, Redis); integrations via REST APIs and Web Services; unit tests with JUnit.",
      },
      {
        pt: "Monitoramento de aplicações com Datadog e pipelines de CI/CD no GCP.",
        en: "Application monitoring with Datadog and CI/CD pipelines on GCP.",
      },
      {
        pt: "Análise e resolução de incidentes em produção, code review e pair programming; documentação no Confluence; rotina em Scrum e Kanban, com Jira.",
        en: "Production incident analysis and resolution, code review and pair programming; documentation in Confluence; Scrum and Kanban routine, using Jira.",
      },
    ],
  },
];
