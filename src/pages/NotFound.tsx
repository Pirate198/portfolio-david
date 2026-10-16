import React from "react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-28 md:px-10">
      <p className="font-mono text-[12px] text-accent">Erreur 404</p>
      <h1 className="mt-4 font-serif text-5xl md:text-6xl">Cette page n'existe pas.</h1>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-ink px-8 py-[0.9375rem] font-medium text-paper transition-colors duration-150 hover:bg-accent">
        Retour à l'accueil
      </Link>
    </section>);

}