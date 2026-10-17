import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftIcon, ArrowUpRightIcon } from "lucide-react";
import { TikTokEmbed } from "../components/TikTokEmbed";
import { PendingNote } from "../components/PendingNote";
import { videos } from "../data/videos";

export function VideoDetail() {
  const { slug } = useParams();
  const video = videos.find((v) => v.slug === slug);

  if (!video) {
    return (
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <h1 className="font-serif text-4xl">Reportage introuvable</h1>
        <Link to="/reportages" className="mt-6 inline-flex items-center gap-1.5 underline decoration-accent underline-offset-4">
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /> Retour aux reportages
        </Link>
      </section>);

  }

  return (
    <article className="mx-auto max-w-7xl px-5 pb-24 pt-10 md:px-10">
      <Link
        to="/reportages"
        className="inline-flex items-center gap-1.5 text-[14px] text-muted transition-colors duration-150 hover:text-ink">
        
        <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /> Reportages vidéo
      </Link>

      <div className="mt-10 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="font-mono text-[12px] text-accent">
            {video.platform} · {video.publisher} · {video.part}
          </p>
          <h1 className="mt-4 text-balance break-words font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">{video.title}</h1>

          <dl className="mt-10 grid gap-x-8 gap-y-5 border-y border-rule py-6 text-[15px] sm:grid-cols-2">
            <div>
              <dt className="text-muted">Format</dt>
              <dd className="mt-1">{video.format}</dd>
            </div>
            <div>
              <dt className="text-muted">Diffusion</dt>
              <dd className="mt-1">
                {video.platform} — {video.publisher} ({video.publisherHandle})
              </dd>
            </div>
            <div>
              <dt className="text-muted">Date de publication</dt>
              <dd className="mt-1">{video.date ?? "À confirmer"}</dd>
            </div>
            <div>
              <dt className="text-muted">Rôle de Yélian</dt>
              <dd className="mt-1">{video.role ?? "À préciser"}</dd>
            </div>
          </dl>

          <section className="mt-10" aria-labelledby="desc-title">
            <h2 id="desc-title" className="font-mono text-[12px] uppercase tracking-wider text-muted">
              Description publiée avec la vidéo
            </h2>
            <blockquote className="mt-4 border-l-2 border-accent pl-5 font-serif text-xl leading-relaxed">
              {video.description}
            </blockquote>
          </section>

          {!video.role &&
          <PendingNote className="mt-10 max-w-xl">
              préciser la contribution de Yélian (tournage, interviews, montage…) et la date de diffusion.
            </PendingNote>
          }

          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-ink px-8 py-[0.9375rem] text-[15px] font-medium text-paper transition-colors duration-150 hover:bg-accent">
            
            Voir la publication originale <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <TikTokEmbed video={video} />
          </div>
        </div>
      </div>
    </article>);

}