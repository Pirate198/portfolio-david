import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/navigation";
import { photos, profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="font-serif text-3xl">
            {profile.firstNames} {profile.lastName}
          </p>
          <p className="mt-2 text-paper/70">
            {profile.role} — {profile.location}
          </p>
        </div>
        <nav aria-label="Pied de page" className="md:col-span-7">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {navLinks.map((l) =>
            <li key={l.to}>
                <Link to={l.to} className="text-paper/80 transition-colors duration-150 hover:text-accent-soft">
                  {l.label}
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 font-mono text-[11px] text-paper/60 sm:flex-row sm:justify-between md:px-10">
          <span>© {new Date().getFullYear()} {profile.firstNames} {profile.lastName}</span>
          <span>Portraits © {photos.credit}</span>
        </div>
      </div>
    </footer>);

}