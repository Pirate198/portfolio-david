import React from "react";
import { PageIntro } from "../components/PageIntro";
import { AudioTrack } from "../components/AudioTrack";
import { Reveal } from "../components/Reveal";
import { audioProductions, radioReferences } from "../data/audio";

export function Audio() {
  return (
    <>
      <PageIntro rubric="Audio" title="Productions audio">
        Magazines, reportages et émissions radiophoniques. Chaque enregistrement est accompagné de son
        contexte de diffusion lorsqu'il est confirmé.
      </PageIntro>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20" aria-labelledby="ecoute">
        <h2 id="ecoute" className="font-serif text-3xl tracking-tight md:text-4xl">
          À l'écoute
        </h2>
        <div className="mt-8 border-b border-ink">
          {audioProductions.map((t) =>
          <AudioTrack key={t.id} track={t} />
          )}
        </div>
      </section>

      <section className="border-t border-rule bg-paper-2">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">À l'antenne</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              Émissions et productions citées dans le CV. Les enregistrements correspondants pourront être
              ajoutés ci-dessus.
            </p>
          </Reveal>
          <ul className="lg:col-span-7 lg:col-start-6">
            {radioReferences.map((r) =>
            <li key={r.label} className="border-t border-rule py-5 last:border-b">
                <p className="font-serif text-2xl leading-tight">{r.label}</p>
                <p className="mt-1 text-[14px] text-muted">{r.detail}</p>
              </li>
            )}
          </ul>
        </div>
      </section>
    </>);

}