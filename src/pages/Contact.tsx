import React from "react";
import { ArrowUpRightIcon, MailIcon, PhoneIcon } from "lucide-react";
import { CvButton } from "../components/CvButton";
import { Portrait } from "../components/Portrait";
import { contact, photos, profile } from "../data/profile";

export function Contact() {
  return (
    <section className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-14 md:px-10 md:pt-20 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <p className="font-mono text-[12px] text-accent">Contact</p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
          Échangeons sur votre rédaction.
        </h1>
        <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-muted">
          Chaînes de télévision, radios, médias numériques, maisons de production : pour une candidature ou
          une collaboration, contactez {profile.firstNames} {profile.lastName} directement.
        </p>

        <dl className="mt-12 border-b border-ink">
          <div className="grid gap-2 border-t border-ink py-6 sm:grid-cols-[160px_1fr] sm:items-center">
            <dt className="flex items-center gap-2 text-[14px] text-muted">
              <MailIcon className="h-4 w-4" aria-hidden="true" /> E-mail
            </dt>
            <dd>
              {contact.email ?
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-1.5 break-all font-serif text-2xl underline decoration-accent underline-offset-4 md:text-3xl">
                
                  {contact.email}
                  <ArrowUpRightIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
                </a> :

              <span className="font-mono text-[13px] text-muted">À compléter — adresse indiquée dans le CV</span>
              }
            </dd>
          </div>
          <div className="grid gap-2 border-t border-rule py-6 sm:grid-cols-[160px_1fr] sm:items-center">
            <dt className="flex items-center gap-2 text-[14px] text-muted">
              <PhoneIcon className="h-4 w-4" aria-hidden="true" /> Téléphone
            </dt>
            <dd>
              {contact.phone ?
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="font-serif text-2xl">
                  {contact.phone}
                </a> :

              <span className="font-mono text-[13px] text-muted">À compléter si l'affichage public est souhaité</span>
              }
            </dd>
          </div>
          <div className="grid gap-2 border-t border-rule py-6 sm:grid-cols-[160px_1fr] sm:items-center">
            <dt className="text-[14px] text-muted">Localisation</dt>
            <dd className="font-serif text-2xl">{profile.location}</dd>
          </div>
        </dl>

        <div className="mt-10">
          {contact.cvUrl ?
          <CvButton /> :

          <p className="font-mono text-[13px] text-muted">À compléter — CV au format PDF à intégrer pour le téléchargement.</p>
          }
        </div>
      </div>

      <div className="mx-auto w-full max-w-[380px] lg:col-span-4 lg:col-start-9">
        <Portrait src={photos.secondary} alt="Portrait de Yélian David BOURAIMA" />
      </div>
    </section>);

}