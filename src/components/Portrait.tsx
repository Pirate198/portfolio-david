import React, { useState } from "react";
import { ImageOffIcon } from "lucide-react";
import { photos } from "../data/profile";

type PortraitProps = {
  src: string;
  alt: string;
  tone?: "light" | "dark";
  priority?: boolean;
  className?: string;
};

// Portrait épuré : image nette, sans cadre ni ornement, crédit discret.
export function Portrait({ src, alt, tone = "light", priority = false, className = "" }: PortraitProps) {
  const [failed, setFailed] = useState(false);
  const caption = tone === "dark" ? "text-paper/55" : "text-muted";

  return (
    <figure className={className}>
      <div className="aspect-[4/5] overflow-hidden rounded-[1.125rem] bg-ink-2">
        {failed ?
        <div className="grid h-full place-items-center text-paper/60">
            <ImageOffIcon className="h-8 w-8" aria-hidden="true" />
            <span className="sr-only">Image indisponible</span>
          </div> :

        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-top" />

        }
      </div>
      <figcaption className={`mt-3 text-right text-[11px] tracking-wide ${caption}`}>
        Photo © {photos.credit}
      </figcaption>
    </figure>);

}