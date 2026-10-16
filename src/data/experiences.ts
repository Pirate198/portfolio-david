import type { Experience } from "../types/experience";

// Ordre chronologique inversé, conforme au CV.
export const experiences: Experience[] = [
{
  id: "kiff-2026",
  organization: "KIFF FM / SRTB",
  period: "Juin — Septembre 2026",
  year: "2026",
  type: "Stage professionnel",
  kind: "experience",
  medium: "Radio",
  missions: [
  "Préparation et présentation de bulletins d'information",
  "Collecte d'informations auprès de personnes-ressources",
  "Reportages et magazines radiophoniques",
  "Participation aux conférences de rédaction",
  "Conduite d'émissions, dont Quiz Vacances et Kiff Réveil"],

  skills: ["Présentation", "Collecte d'informations", "Reportage radio", "Magazine", "Animation d'antenne"]
},
{
  id: "tvc-2025",
  organization: "Télévision Carrefour (TVC) Bénin",
  period: "Août — Novembre 2025",
  year: "2025",
  type: "Stage professionnel",
  kind: "experience",
  medium: "Télévision",
  missions: [
  "Proposition de sujets",
  "Collecte d'informations",
  "Reportages de terrain et micros-trottoirs",
  "Montage vidéo d'informations destinées au journal"],

  skills: ["Proposition de sujets", "Reportage de terrain", "Micro-trottoir", "Montage vidéo"]
},
{
  id: "planete-2025",
  organization: "Planète FM",
  period: "Février — Mai 2025",
  year: "2025",
  type: "Stage académique",
  kind: "experience",
  medium: "Radio",
  missions: [
  "Rédaction de brèves",
  "Reportages radiophoniques",
  "Réalisation d'un magazine sur la production du cacaoyer dans la région de Sakété",
  "Présentation d'une rubrique du journal de 13 heures"],

  skills: ["Écriture radio", "Reportage radio", "Magazine", "Présentation"]
},
{
  id: "kiff-2024",
  organization: "KIFF FM / SRTB",
  period: "Juin — Août 2024",
  year: "2024",
  type: "Stage académique",
  kind: "experience",
  medium: "Radio",
  missions: [
  "Reportages et magazines radiophoniques",
  "Présentation de journaux",
  "Conduite d'émissions",
  "Productions sur des événements culturels et sportifs"],

  skills: ["Reportage radio", "Présentation", "Animation d'antenne", "Culture & sport"]
},
{
  id: "lanation-2023",
  organization: "La Nation / ONIP",
  period: "Juillet — Septembre 2023",
  year: "2023",
  type: "Stage académique",
  kind: "experience",
  medium: "Presse écrite",
  missions: [
  "Collecte d'informations",
  "Reportages écrits",
  "Participation aux activités de rédaction"],

  skills: ["Collecte d'informations", "Écriture journalistique", "Travail de rédaction"]
},
{
  id: "adotv-2021",
  organization: "Formation au reportage sportif — Ado TV",
  period: "Juillet 2021",
  year: "2021",
  type: "Formation",
  kind: "formation",
  medium: "Sport",
  missions: [
  "Recherches documentaires sur le sport",
  "Documentation sur le championnat scolaire béninois",
  "Commentaires de matchs",
  "Rédaction de comptes rendus sportifs"],

  skills: ["Documentation", "Commentaire sportif", "Compte rendu"]
}];