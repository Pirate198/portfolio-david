import React from "react";
import { DownloadIcon } from "lucide-react";
import { contact } from "../data/profile";

type CvButtonProps = {
  tone?: "light" | "dark";
};

// Ne s'affiche que si le PDF du CV est réellement intégré.
export function CvButton({ tone = "light" }: CvButtonProps) {
  if (!contact.cvUrl) return null;
  const styles =
  tone === "dark" ?
  "border-paper/40 text-paper hover:border-paper hover:bg-paper hover:text-ink" :
  "border-ink text-ink hover:bg-ink hover:text-paper";
  return (
    <a
      href={contact.cvUrl}
      download
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-8 py-[0.9375rem] text-[15px] font-medium transition-colors duration-150 ${styles}`}>
      
      <DownloadIcon className="h-4 w-4" aria-hidden="true" />
      Télécharger mon CV
    </a>);

}