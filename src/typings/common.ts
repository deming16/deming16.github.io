export type ExperienceDetail = {
  title: string;
  company: string;
  location: string;
  description: string;
  date: string;
  pointers: string[];
  techStack: string[];
  bottomImages?: {
    src: string;
    alt: string;
  }[];
  link?: string;
  linkText?: string;
};

export type ProjectDetail = {
  title: string;
  date: string;
  thumbnail: string;
  description?: string;
  techStack: string[];
  pointers: string[];
  link?: string;
};
