export type VideoReport = {
  slug: string;
  title: string;
  part: string | null;
  format: string;
  platform: string;
  publisher: string;
  publisherHandle: string | null;
  description: string | null;
  date: string | null;
  role: string | null;
  url: string | null;
  src: string;
};

export type AudioProduction = {
  id: string;
  fileName: string;
  src: string | null;
  title: string | null;
  description: string | null;
  context: string | null;
};