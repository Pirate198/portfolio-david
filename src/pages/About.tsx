import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { Portrait } from "../components/Portrait";
import { Reveal } from "../components/Reveal";
import { domains, education, languages, milestones, photos, skillGroups } from "../data/profile";

export function About() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 md:px-10 md:pt-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-[12px] text-accent">À propos</p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
              Raconter l'information, du terrain à l'antenne.
            </h1>
            <div className="mt-10 max-w-2xl space-y-5 text-[18px] leading-relaxed">
              <p>
                Yélian David BOURAIMA est journaliste reporter d'image, titulaire d'une licence
                professionnelle JRI obtenue à l'ENSTIC de Cotonou en 2025.
              </p>
              <p className="text-muted">
                Depuis 2021, il s'est formé au contact de rédactions radio, télévision et presse écrite au
                Bénin. Son travail couvre la chaîne de l'information : proposition de sujets, collecte
                auprès de personnes-ressources, reportage de terrain, présentation de journaux, conduite
                d'émissions et montage vidéo.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none">
            <Portrait src={photos.about} alt="Yélian David BOURAIMA, souriant, en tenue blanche" priority />
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <Reveal>
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">Étapes du parcours</h2>
        </Reveal>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {milestones.map((m) =>
          <li key={m.year} className="border-t-2 border-ink pt-4 lg:pr-6">
              <p className="font-serif text-4xl">{m.year}</p>
              <p className="mt-3 text-[15px] leading-snug text-muted">{m.text}</p>
            </li>
          )}
        </ol>
      </section>

      {/* Domaines + compétences */}
      <section className="border-y border-rule bg-paper-2">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl tracking-tight">Domaines d'intervention</h2>
            <dl className="mt-8">
              {domains.map((d) =>
              <div key={d.label} className="grid grid-cols-[120px_1fr] gap-4 border-t border-rule py-4">
                  <dt className="font-serif text-xl">{d.label}</dt>
                  <dd className="text-[15px] leading-snug text-muted">{d.detail}</dd>
                </div>
              )}
            </dl>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="font-serif text-4xl tracking-tight">Compétences</h2>
            <div className="mt-8 space-y-7">
              {skillGroups.map((g) =>
              <div key={g.label}>
                  <h3 className="font-mono text-[12px] uppercase tracking-wider text-muted">{g.label}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((s) =>
                  <li key={s} className="border border-ink/25 bg-paper px-3 py-1.5 text-[14px]">
                        {s}
                      </li>
                  )}
                  </ul>
                </div>
              )}
              <div>
                <h3 className="font-mono text-[12px] uppercase tracking-wider text-muted">Langues</h3>
                <p className="mt-3 font-serif text-2xl">{languages.join(" · ")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">Formation</h2>
          <ul className="mt-8">
            {education.map((e) =>
            <li key={e.degree} className="grid gap-2 border-t border-ink py-6 sm:grid-cols-[90px_1fr]">
                <span className="font-mono text-[13px] text-accent">{e.year}</span>
                <div>
                  <p className="font-serif text-2xl leading-tight">{e.degree}</p>
                  <p className="mt-1 text-muted">{e.school}</p>
                </div>
              </li>
            )}
          </ul>
          <Link
            to="/experiences"
            className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium underline decoration-accent underline-offset-4">
            
            Détail des expériences <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mx-auto w-full max-w-[360px] lg:col-span-4 lg:col-start-9">
          <Portrait src={photos.secondary} alt="Yélian David BOURAIMA en ensemble bleu" />
        </div>
      </section>
    </>);

}