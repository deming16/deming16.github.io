export type ExperienceDetail = {
  title: string;
  company: string;
  location: string;
  description: string;
  date: string;
  pointers: string[];
};

export type ProjectDetail = {
  title: string;
  date: string;
  thumbnail: string;
  description?: string;
  techStack: string[];
  pointers: string[];
};
