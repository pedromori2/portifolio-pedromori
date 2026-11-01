"use client";

import { Mail, MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n-context";
import { profile } from "@/content/profile";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Contact() {
  const { t } = useLang();

  const channels = [
    { label: t.contact.email, value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    {
      label: t.contact.whatsapp,
      value: profile.phoneDisplay,
      href: profile.whatsappHref,
      icon: MessageCircle,
    },
    {
      label: t.contact.linkedin,
      value: "linkedin.com/in/pedromor1",
      href: profile.linkedin,
      icon: LinkedinIcon,
    },
    {
      label: t.contact.github,
      value: "github.com/pedromori2",
      href: profile.github,
      icon: GithubIcon,
    },
  ];

  return (
    <section id="contato" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-10 flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold text-foreground">{t.contact.title}</h2>
        <SectionNumber current={6} total={6} />
      </div>

      <p className="mb-8 max-w-lg text-foreground-muted">{t.contact.subtitle}</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {channels.map(({ label, value, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4 rounded-sm border border-border p-4 transition-colors hover:border-accent"
          >
            <Icon size={18} className="shrink-0 text-accent" />
            <span>
              <span className="block font-mono text-xs text-foreground-muted">{label}</span>
              <span className="block text-sm text-foreground">{value}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
