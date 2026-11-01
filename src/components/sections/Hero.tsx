"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n-context";
import { profile } from "@/content/profile";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Hero() {
  const { t, locale } = useLang();

  return (
    <section
      id="topo"
      className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-6 py-20 md:flex-row md:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 text-center md:text-left"
      >
        <p className="font-mono text-sm text-accent">{profile.location}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-xl text-foreground-muted">{profile.targetRole[locale]}</p>
        <p className="mx-auto mt-6 max-w-xl text-balance text-foreground-muted md:mx-0">
          {profile.positioning[locale]}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <Button href="/#projetos">{t.hero.viewProjects}</Button>
          <Button href={profile.resumePdf} variant="secondary">
            {t.hero.downloadResume}
          </Button>
          <Button href="/#contato" variant="secondary">
            {t.hero.contact}
          </Button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-foreground-muted transition-colors hover:text-accent"
          >
            <GithubIcon size={20} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border border-border sm:h-48 sm:w-48"
      >
        <Image
          src={profile.photo}
          alt={profile.name}
          fill
          sizes="192px"
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
