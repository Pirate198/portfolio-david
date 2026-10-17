import React from "react";
import { PlayIcon } from "lucide-react";
import type { VideoReport } from "../types/media";

type VideoCoverProps = {
  video: VideoReport;
  size?: "large" | "medium";
};

// Couverture typographique : n'imite pas une vignette originale.
export function VideoCover({ video, size = "large" }: VideoCoverProps) {
  return (
    <div className="relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden bg-ink p-6 text-paper md:p-9">
      <div className="flex items-center justify-between font-mono text-[11px] text-paper/70">
        <span>
          {video.platform} · {video.publisher}
        </span>
        {video.part && <span className="border border-paper/30 px-2 py-0.5">{video.part}</span>}
      </div>
      <p
        className={`break-words font-serif leading-[1.08] tracking-tight ${
        size === "large" ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`
        }>
        
        {video.title}
      </p>
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-white transition-transform duration-200 ease-out group-hover:scale-105">
          <PlayIcon className="ml-0.5 h-5 w-5" fill="currentColor" aria-hidden="true" />
        </span>
        <span className="font-mono text-[12px] text-paper/70">{video.format}</span>
      </div>
    </div>);

}