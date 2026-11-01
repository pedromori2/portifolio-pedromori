"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n-context";
import { stats } from "@/content/profile";

export function Stats() {
  const { t, locale } = useLang();

  return (
    <section
      aria-label={t.stats.title}
      className="border-y border-border bg-background-elevated/40"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.value}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col items-center gap-2 px-6 py-10 text-center"
          >
            <span className="font-mono text-4xl font-semibold text-accent sm:text-5xl">
              {stat.value}
            </span>
            <span className="max-w-[16rem] text-sm text-foreground-muted">
              {stat.label[locale]}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
