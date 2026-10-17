import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon, ArrowUpRightIcon, HeadphonesIcon } from "lucide-react";
import { Portrait } from "../components/Portrait";
import { CvButton } from "../components/CvButton";
import { VideoCover } from "../components/VideoCover";
import { Reveal } from "../components/Reveal";
import { photos, profile } from "../data/profile";
import { videos } from "../data/videos";
import { experiences } from "../data/experiences";
import { audioProductions } from "../data/audio";

const hostOrganizations = ["KIFF FM / SRTB", "Télévision Carrefour", "Planète FM", "La Nation / ONIP", "Ado TV"];
const parcoursColumns = ["Radio", "Télévision", "Presse écrite"] as const;

export function Home() {
  const reduce = useReducedMotion();
  const featured = videos[0];

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pt-12 md:px-10 lg:grid-cols-12 lg:pt-16">
          <motion.div
            className="flex flex-col justify-center pb-6 lg:col-span-7 lg:pb-20"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}>
            
            <p className="flex items-center gap-2 font-mono text-[12px] text-paper/70">
              <span className="h-2 w-2 rounded-full bg-accent-soft" aria-hidden="true" />
              {profile.location}
            </p>
            <h1 className="mt-6 text-balance font-serif text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.95] tracking-tight">
              {profile.firstNames}
              <span className="block font-medium">{profile.lastName}</span>
            </h1>
            <p className="mt-6 font-serif text-2xl italic text-accent-soft md:text-3xl">{profile.role}</p>
            <p className="mt-6 max-w-xl text-pretty text-[17px] leading-relaxed text-paper/75">{profile.intro}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/reportages"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-[0.9375rem] text-[15px] font-medium text-white transition-colors duration-150 hover:bg-paper hover:text-ink sm:w-auto sm:px-8">
                
                Découvrir mes reportages
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <CvButton tone="dark" />
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-paper/40 px-6 py-[0.9375rem] text-[15px] font-medium text-paper transition-colors duration-150 hover:border-paper sm:w-auto sm:px-8">
                
                Me contacter
              </Link>
            </div>
          </motion.div>

          <div className="mx-auto w-full max-w-[420px] self-end pb-10 lg:col-span-5 lg:max-w-none lg:pb-14">
            <Portrait
              src={photos.hero}
              alt="Portrait de Yélian David BOURAIMA, costume bleu marine, bras croisés"
              tone="dark"
              priority />
            
          </div>
        </div>
      </section>

      {/* Organismes */}
      <section aria-label="Stages et formations" className="border-b border-rule">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:gap-10 md:px-10">
          <p className="shrink-0 text-[13px] text-muted">Stages et formation auprès de</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {hostOrganizations.map((o) =>
            <li key={o} className="font-serif text-lg">
                {o}
              </li>
            )}
          </ul>
        </div>
      </section>

      {/* Réalisations */}
      {featured &&
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <Reveal className="flex items-end justify-between gap-6">
            <h2 className="text-balance font-serif text-4xl tracking-tight md:text-6xl">Réalisations</h2>
            <Link
            to="/reportages"
            className="hidden items-center gap-1.5 whitespace-nowrap text-[15px] font-medium underline decoration-accent underline-offset-4 sm:inline-flex">
            
              Tous les reportages <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal className="mt-10 grid gap-8 lg:grid-cols-12">
            <Link
            to={`/reportages/${featured.slug}`}
            className="group block lg:col-span-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            aria-label={`Voir le reportage : ${featured.title}`}>
            
              <VideoCover video={featured} />
            </Link>
            <div className="flex flex-col lg:col-span-5">
              <p className="font-mono text-[12px] text-accent">Reportage vidéo · {featured.part}</p>
              <h3 className="mt-3 font-serif text-3xl leading-tight">
                Sorties nocturnes des jeunes
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-muted">
                Rencontre avec des jeunes pour recueillir leurs opinions, leurs expériences et leur
                perception des sorties nocturnes. Publié sur le compte TikTok « {featured.publisher} ».
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-rule pt-5 text-[14px]">
                <div>
                  <dt className="text-muted">Format</dt>
                  <dd className="mt-1">{featured.format}</dd>
                </div>
                <div>
                  <dt className="text-muted">Diffusion</dt>
                  <dd className="mt-1">
                    {featured.platform} · {featured.publisherHandle}
                  </dd>
                </div>
              </dl>
              <div className="mt-auto flex flex-wrap gap-5 pt-8 text-[15px] font-medium">
                <Link to={`/reportages/${featured.slug}`} className="inline-flex items-center gap-1.5 underline decoration-accent underline-offset-4">
                  Voir le reportage <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a href={featured.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-ink">
                  TikTok <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      }

      {/* Parcours */}
      <section className="border-t border-rule bg-paper-2">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
          <Reveal className="grid gap-6 md:grid-cols-12">
            <h2 className="text-balance font-serif text-4xl tracking-tight md:col-span-5 md:text-5xl">
              Radio, télévision, presse écrite
            </h2>
            <p className="text-[17px] leading-relaxed text-muted md:col-span-6 md:col-start-7">
              Cinq stages et une formation au reportage sportif, de 2021 à 2026, au sein de rédactions
              béninoises.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-rule">
            {parcoursColumns.map((medium) =>
            <Reveal key={medium} className="md:px-8 md:first:pl-0 md:last:pr-0">
                <h3 className="border-b border-ink pb-3 font-mono text-[12px] uppercase tracking-wider">{medium}</h3>
                <ul>
                  {experiences.
                filter((e) => e.medium === medium).
                map((e) =>
                <li key={e.id} className="border-b border-rule py-4">
                        <p className="font-serif text-xl">{e.organization}</p>
                        <p className="mt-1 text-[14px] text-muted">
                          {e.type} · {e.period}
                        </p>
                      </li>
                )}
                </ul>
              </Reveal>
            )}
          </div>

          <Link
            to="/experiences"
            className="mt-10 inline-flex items-center gap-1.5 text-[15px] font-medium underline decoration-accent underline-offset-4">
            
            Voir le parcours complet <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Audio */}
      <section className="bg-ink-2 text-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-12 md:px-10">
          <Reveal className="min-w-0 md:col-span-6">
            <HeadphonesIcon className="h-7 w-7 text-accent-soft" aria-hidden="true" />
            <h2 className="mt-5 text-balance font-serif text-4xl tracking-tight md:text-5xl">Productions audio</h2>
            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-paper/75">
              Bulletins, reportages et magazines radiophoniques : la radio occupe une place centrale dans
              son parcours, de KIFF FM à Planète FM.
            </p>
          </Reveal>
          <Reveal className="flex min-w-0 flex-col justify-end md:col-span-5 md:col-start-8">
            <ul className="border-t border-white/20">
              {audioProductions.map((a) =>
              <li key={a.id} className="flex items-center justify-between gap-4 border-b border-white/20 py-4">
                  <span className="min-w-0 truncate font-mono text-[13px] text-paper/80">{a.title ?? a.fileName}</span>
                  <span className="shrink-0 text-[12px] text-paper/55">{a.src ? "Disponible" : "En préparation"}</span>
                </li>
              )}
            </ul>
            <Link
              to="/audio"
              className="mt-6 inline-flex items-center gap-1.5 self-start text-[15px] font-medium text-paper underline decoration-accent-soft underline-offset-4">
              
              Accéder à la rubrique Audio <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <Reveal className="grid items-end gap-10 md:grid-cols-12">
          <h2 className="text-balance font-serif text-5xl leading-[1.02] tracking-tight md:col-span-8 md:text-7xl">
            Votre rédaction recrute <em className="text-accent">un JRI</em>&nbsp;?
          </h2>
          <div className="flex flex-col gap-3 md:col-span-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 self-start rounded-full bg-ink px-8 py-[0.9375rem] text-[15px] font-medium text-paper transition-colors duration-150 hover:bg-accent">
              
              Prendre contact <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/reportages"
              className="inline-flex items-center gap-2 self-start rounded-full border border-ink px-8 py-[0.9375rem] text-[15px] font-medium transition-colors duration-150 hover:bg-ink hover:text-paper">
              
              Voir les réalisations <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>);

}