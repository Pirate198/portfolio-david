import React, { useState } from "react";
import { ExternalLinkIcon, Loader2Icon, PlayIcon } from "lucide-react";
import type { VideoReport } from "../types/media";

type TikTokEmbedProps = {
  video: VideoReport;
};

// Chargement à la demande : aucun contenu externe n'est chargé avant le clic.
export function TikTokEmbed({ video }: TikTokEmbedProps) {
  const [requested, setRequested] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <div className="relative mx-auto aspect-[9/16] w-full max-w-[340px] overflow-hidden bg-ink">
        {!requested ?
        <button
          type="button"
          onClick={() => setRequested(true)}
          className="group flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
          
            <span className="grid h-16 w-16 place-items-center rounded-full bg-accent text-white transition-transform duration-200 ease-out group-hover:scale-105">
              <PlayIcon className="ml-1 h-6 w-6" fill="currentColor" aria-hidden="true" />
            </span>
            <span className="font-serif text-xl">Lire la vidéo</span>
            <span className="max-w-[220px] text-[13px] leading-snug text-paper/65">
              Le lecteur TikTok sera chargé depuis tiktok.com.
            </span>
          </button> :

        <>
            {!loaded &&
          <div className="absolute inset-0 grid place-items-center text-paper/70" role="status">
                <Loader2Icon className="h-6 w-6 animate-spin" aria-hidden="true" />
                <span className="sr-only">Chargement de la vidéo</span>
              </div>
          }
            <iframe
            src={`https://www.tiktok.com/embed/v2/${video.embedId}`}
            title={`Vidéo TikTok — ${video.title}`}
            allow="encrypted-media; fullscreen"
            allowFullScreen
            onLoad={() => setLoaded(true)}
            className="absolute inset-0 h-full w-full border-0" />
          
          </>
        }
      </div>
      <p className="mx-auto mt-3 max-w-[340px] text-[13px] text-muted">
        La vidéo ne s'affiche pas ?{" "}
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-ink underline decoration-accent underline-offset-4">
          
          Ouvrir sur TikTok
          <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </p>
    </div>);

}