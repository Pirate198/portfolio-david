import React from "react";
import { ExternalLinkIcon } from "lucide-react";
import type { VideoReport } from "../types/media";

type VideoPlayerProps = {
  video: VideoReport;
};

export function VideoPlayer({ video }: VideoPlayerProps) {
  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden bg-ink">
        <video
          controls
          preload="metadata"
          playsInline
          className="absolute inset-0 h-full w-full"
          aria-label={`Vidéo — ${video.title}`}>
          
          <source src={video.src} type="video/mp4" />
          Votre navigateur ne prend pas en charge la lecture vidéo.
        </video>
      </div>
      {video.url &&
      <p className="mt-3 text-[13px] text-muted">
          La vidéo ne se lance pas ?{" "}
          <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-ink underline decoration-accent underline-offset-4">
          
            Ouvrir la publication
            <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </p>
      }
    </div>);

}
