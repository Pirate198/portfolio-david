import React from "react";
import { FileAudioIcon } from "lucide-react";
import { AudioPlayer } from "./AudioPlayer/AudioPlayer";
import { PendingNote } from "./PendingNote";
import type { AudioProduction } from "../types/media";

type AudioTrackProps = {
  track: AudioProduction;
};

export function AudioTrack({ track }: AudioTrackProps) {
  const title = track.title ?? "Production audio — titre à confirmer";

  return (
    <article className="grid gap-6 border-t border-ink py-8 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-5">
        <h3 className={`font-serif text-2xl leading-tight md:text-3xl ${track.title ? "" : "text-muted"}`}>
          {title}
        </h3>
        <p className="mt-3 flex items-center gap-2 break-all font-mono text-[12px] text-muted">
          <FileAudioIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
          {track.fileName}
        </p>
        {track.context && <p className="mt-3 text-[15px] text-muted">{track.context}</p>}
      </div>

      <div className="space-y-4 md:col-span-7">
        {track.description && <p className="text-[16px] leading-relaxed">{track.description}</p>}
        {track.src ?
        <AudioPlayer src={track.src} label={title} /> :

        <PendingNote>
            ce fichier n'est pas encore importé dans le projet. Son format, son contenu, son titre et sa
            durée doivent être vérifiés avant l'activation du lecteur.
          </PendingNote>
        }
      </div>
    </article>);

}