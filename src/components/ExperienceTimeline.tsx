import React from "react";
import { Reveal } from "./Reveal";
import type { Experience } from "../types/experience";

type ExperienceTimelineProps = {
  items: Experience[];
};

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <ol className="relative">
      {items.map((exp, i) => {
        const isFormation = exp.kind === "formation";
        return (
          <li key={exp.id}>
            <Reveal delay={Math.min(i * 0.04, 0.2)}>
              <article className="grid gap-5 border-t border-rule py-10 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-3">
                  <p className="font-serif text-5xl leading-none text-ink/90">{exp.year}</p>
                  <p className="mt-3 font-mono text-[12px] text-muted">{exp.period}</p>
                  <p className="mt-3 flex items-center gap-2 text-[13px] font-medium">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                      isFormation ? "border-2 border-accent" : "bg-accent"}`
                      }
                      aria-hidden="true" />
                    
                    {exp.type}
                  </p>
                </div>

                <div className="md:col-span-6">
                  <p className="font-mono text-[12px] text-accent">{exp.medium}</p>
                  <h3 className="mt-1 font-serif text-3xl leading-tight md:text-[2.1rem]">{exp.organization}</h3>
                  <ul className="mt-5 space-y-2.5">
                    {exp.missions.map((m) =>
                    <li key={m} className="flex gap-3 text-[16px] leading-snug">
                        <span className="mt-[0.6em] h-px w-3 shrink-0 bg-ink" aria-hidden="true" />
                        {m}
                      </li>
                    )}
                  </ul>
                </div>

                <div className="md:col-span-3">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted">Compétences mobilisées</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {exp.skills.map((s) =>
                    <li key={s} className="border border-rule px-2.5 py-1 text-[13px]">
                        {s}
                      </li>
                    )}
                  </ul>
                </div>
              </article>
            </Reveal>
          </li>);

      })}
    </ol>);

}