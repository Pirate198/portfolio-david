export type Experience = {
  id: string;
  organization: string;
  period: string;
  year: string;
  type: "Stage professionnel" | "Stage académique" | "Formation";
  kind: "experience" | "formation";
  medium: "Radio" | "Télévision" | "Presse écrite" | "Sport";
  missions: string[];
  skills: string[];
};