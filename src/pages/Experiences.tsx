import React from "react";
import { PageIntro } from "../components/PageIntro";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { experiences } from "../data/experiences";
import { education } from "../data/profile";

export function Experiences() {
  return (
    <>
      <PageIntro rubric="Expériences" title="Parcours en rédaction">
        Stages professionnels et académiques en radio, télévision et presse écrite, du plus récent au plus
        ancien.
      </PageIntro>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16">
        <div className="mb-6 flex flex-wrap gap-6 text-[13px] text-muted" aria-label="Légende">
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" /> Stage
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full border-2 border-accent" aria-hidden="true" /> Formation
          </span>
        </div>
        <ExperienceTimeline items={experiences} />
      </section>

      <section className="border-t border-rule bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-10 lg:grid-cols-12">
          <h2 className="font-serif text-4xl tracking-tight lg:col-span-4">Diplômes</h2>
          <ul className="lg:col-span-8">
            {education.map((e) =>
            <li key={e.degree} className="grid gap-2 border-t border-white/20 py-6 sm:grid-cols-[90px_1fr]">
                <span className="font-mono text-[13px] text-accent-soft">{e.year}</span>
                <div>
                  <p className="font-serif text-2xl leading-tight">{e.degree}</p>
                  <p className="mt-1 text-paper/70">{e.school}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </section>
    </>);

}