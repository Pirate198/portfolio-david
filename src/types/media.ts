export type VideoReport = {
  slug: string;
  title: string;
  part: string | null;
  format: string;
  platform: string;
  publisher: string;
  publisherHandle: string;
  description: string;
  date: string | null;
  role: string | null;
  url: string;
  embedId: string;
};

export type AudioProduction = {
  id: string;
  fileName: string;
  src: string | null;
  title: string | null;
  description: string | null;
  context: string | null;
};