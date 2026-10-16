// Informations issues du CV (CV_2026-09-16_Yélian David_BOURAIMA.pdf).
// Les champs à `null` doivent être renseignés : ils s'affichent comme « à compléter ».

export const profile = {
  firstNames: "Yélian David",
  lastName: "BOURAIMA",
  role: "Journaliste reporter d'image",
  location: "Cotonou, Bénin",
  intro:
  "Diplômé de l'ENSTIC de Cotonou, Yélian David BOURAIMA a fait ses armes en radio, en télévision et en presse écrite : collecte d'informations, reportage de terrain, présentation et montage."
};

export const contact: {
  email: string | null;
  phone: string | null;
  cvUrl: string | null;
} = {
  email: null, // adresse e-mail professionnelle indiquée dans le CV
  phone: null, // à renseigner uniquement si l'affichage public est souhaité
  cvUrl: null // URL du PDF du CV une fois intégré au projet
};

export const photos = {
  hero: "/WhatsApp_Image_2026-03-18_at_15.17.27.jpg",
  about: "/WhatsApp_Image_2026-03-18_at_15.17.28.jpg",
  secondary: "/WhatsApp_Image_2026-03-18_at_15.17.28_(1).jpg",
  credit: "Philippe Armel"
};

export const education = [
{
  degree: "Licence professionnelle — Journaliste Reporter d'Image (JRI)",
  school: "ENSTIC, Cotonou",
  year: "2025"
},
{
  degree: "Baccalauréat",
  school: "CEG Houéyiho, Cotonou",
  year: "2021"
}];


export const skillGroups = [
{
  label: "Journalisme",
  items: ["Conduite d'émissions", "Réalisation de magazines", "Reportage radiophonique"]
},
{
  label: "Image & son",
  items: ["Prise de vue et maniement d'appareil photo", "Montage — Adobe Premiere Pro", "Wavelab"]
},
{
  label: "Bureautique",
  items: ["Word", "PowerPoint", "Excel"]
}];


export const languages = ["Français", "Anglais", "Allemand"];

export const domains = [
{ label: "Radio", detail: "Bulletins, reportages, magazines, conduite d'émissions" },
{ label: "Télévision", detail: "Reportages de terrain, micros-trottoirs, montage pour le journal" },
{ label: "Presse écrite", detail: "Collecte d'informations et reportages écrits" },
{ label: "Sport", detail: "Documentation, commentaires de matchs, comptes rendus" }];


export const milestones = [
{ year: "2021", text: "Baccalauréat et formation au reportage sportif associée à Ado TV" },
{ year: "2023", text: "Premier stage en presse écrite à La Nation / ONIP" },
{ year: "2024", text: "Stage académique en radio à KIFF FM / SRTB" },
{ year: "2025", text: "Planète FM, Licence JRI à l'ENSTIC, puis Télévision Carrefour" },
{ year: "2026", text: "Stage professionnel à KIFF FM / SRTB" }];