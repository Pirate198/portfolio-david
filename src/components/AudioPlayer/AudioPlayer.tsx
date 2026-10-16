import React from "react";
import { AlertCircleIcon, Loader2Icon, PauseIcon, PlayIcon } from "lucide-react";
import { useAudioPlayer } from "./useAudioPlayer";
import { formatTime } from "../../utils/time";

type AudioPlayerProps = {
  src: string;
  label: string;
};

export function AudioPlayer({ src, label }: AudioPlayerProps) {
  const { audioRef, status, playing, current, duration, toggle, seek } = useAudioPlayer(src);

  return (
    <div className="flex items-center gap-4">
      <audio ref={audioRef} src={src} preload="metadata" />
      <button
        type="button"
        onClick={toggle}
        disabled={status === "error"}
        aria-label={playing ? `Mettre en pause : ${label}` : `Écouter : ${label}`}
        className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ink text-paper transition-colors duration-150 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40">
        
        {status === "loading" && playing ?
        <Loader2Icon className="h-5 w-5 animate-spin" aria-hidden="true" /> :
        playing ?
        <PauseIcon className="h-5 w-5" fill="currentColor" aria-hidden="true" /> :

        <PlayIcon className="ml-0.5 h-5 w-5" fill="currentColor" aria-hidden="true" />
        }
      </button>

      <div className="min-w-0 flex-1">
        {status === "error" ?
        <p className="flex items-center gap-2 text-[14px] text-accent" role="alert">
            <AlertCircleIcon className="h-4 w-4" aria-hidden="true" />
            Le fichier audio n'a pas pu être chargé.{" "}
            <a href={src} className="underline underline-offset-4">
              Ouvrir le fichier
            </a>
          </p> :

        <>
            <input
            type="range"
            className="audio-range h-1.5 w-full cursor-pointer"
            min={0}
            max={duration ?? 0}
            step={0.1}
            value={current}
            disabled={!duration}
            onChange={(e) => seek(Number(e.target.value))}
            aria-label={`Progression de la lecture : ${label}`}
            aria-valuetext={`${formatTime(current)} sur ${formatTime(duration)}`} />
          
            <div className="mt-1.5 flex justify-between font-mono text-[11px] text-muted">
              <span>{formatTime(current)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </>
        }
      </div>
    </div>);

}