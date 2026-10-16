import type { AudioProduction } from "../types/media";

// Fichiers intégrés dans `public/audio/` (titres issus des noms de fichiers,
// à ajuster si besoin : contexte de diffusion et descriptions restent à confirmer).
export const audioProductions: AudioProduction[] = [
{
  id: "mag-sorties-nocturnes",
  fileName: "magazine-sorties-nocturnes-jeunes.mp3",
  src: "/audio/magazine-sorties-nocturnes-jeunes.mp3",
  title: "Magazine — Sorties nocturnes des jeunes",
  description: null,
  context: null
},
{
  id: "enrobe-badminton",
  fileName: "enrobe-badminton.mp3",
  src: "/audio/enrobe-badminton.mp3",
  title: "Enrobé — Badminton",
  description: null,
  context: null
},
{
  id: "mag-photo",
  fileName: "magazine-photo.mp3",
  src: "/audio/magazine-photo.mp3",
  title: "Magazine — Photo",
  description: null,
  context: null
}];


// Productions et émissions radio citées dans le CV (sans enregistrement disponible).
export const radioReferences = [
{ label: "Quiz Vacances", detail: "Émission conduite — KIFF FM / SRTB, 2026" },
{ label: "Kiff Réveil", detail: "Émission conduite — KIFF FM / SRTB, 2026" },
{
  label: "Magazine sur la production du cacaoyer, région de Sakété",
  detail: "Magazine radiophonique — Planète FM, 2025"
},
{ label: "Rubrique du journal de 13 heures", detail: "Présentation — Planète FM, 2025" }];