import React from "react";
import { CircleDashedIcon } from "lucide-react";

type PendingNoteProps = {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function PendingNote({ children, tone = "light", className = "" }: PendingNoteProps) {
  const styles =
  tone === "dark" ? "border-white/25 text-paper/75" : "border-rule text-muted";
  return (
    <p className={`flex items-start gap-2.5 border border-dashed px-4 py-3 text-[14px] leading-snug ${styles} ${className}`}>
      <CircleDashedIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <span>
        <span className="font-mono text-[11px] uppercase tracking-wider">À compléter — </span>
        {children}
      </span>
    </p>);

}