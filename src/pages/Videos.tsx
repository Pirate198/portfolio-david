import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import { PageIntro } from "../components/PageIntro";
import { VideoCover } from "../components/VideoCover";
import { Reveal } from "../components/Reveal";
import { videos } from "../data/videos";

export function Videos() {
  return (
    <>
      <PageIntro rubric="Reportages vidéo" title="Reportages vidéo">
        Productions vidéo publiées, présentées avec les informations disponibles à leur source.
      </PageIntro>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {videos.length === 0 ?
        <p className="text-muted">Aucun reportage vidéo n'est encore publié ici.</p> :

        <ul className="space-y-16">
            {videos.map((v) =>
          <li key={v.slug}>
                <Reveal>
                  <article className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                    <Link
                  to={`/reportages/${v.slug}`}
                  className="group block lg:col-span-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  aria-label={`Voir le reportage : ${v.title}`}>
                  
                      <VideoCover video={v} />
                    </Link>
                    <div className="flex flex-col lg:col-span-5">
                      <p className="font-mono text-[12px] text-accent">
                        {v.platform} · {v.publisher} · {v.part}
                      </p>
                      <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">{v.title}</h2>
                      <p className="mt-5 text-[16px] leading-relaxed text-muted">
                        Des jeunes partagent leurs opinions, leurs expériences et leur perception des sorties
                        nocturnes. Une seconde partie annoncée doit présenter l'analyse d'un sociologue.
                      </p>
                      <dl className="mt-6 space-y-2 border-t border-rule pt-5 text-[14px]">
                        <div className="flex gap-3">
                          <dt className="w-28 shrink-0 text-muted">Format</dt>
                          <dd>{v.format}</dd>
                        </div>
                        <div className="flex gap-3">
                          <dt className="w-28 shrink-0 text-muted">Date</dt>
                          <dd>{v.date ?? "À confirmer"}</dd>
                        </div>
                      </dl>
                      <div className="mt-auto flex flex-wrap gap-5 pt-8 text-[15px] font-medium">
                        <Link
                      to={`/reportages/${v.slug}`}
                      className="inline-flex items-center gap-1.5 underline decoration-accent underline-offset-4">
                      
                          Regarder et lire la fiche <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                        </Link>
                        <a
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted hover:text-ink">
                      
                          Ouvrir sur TikTok <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
          )}
          </ul>
        }

      </section>
    </>);

}