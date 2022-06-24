export type Skill = {
  name: string;
  level: number;
};

export type Project = {
  name: string;
  sector: string;
  role: string;
  technologies: string[];
};

export type WorkExperience = {
  companyName: string;
  startDate: string;
  endDate?: string;
  projects: Project[];
};

export type EducationItem = {
  title: string;
  institute: string;
  startYear: string;
  endYear?: string;
};

export type Course = {
  year: string;
  title: string;
  institute: string;
  certificationLink?: string;
};

export type Language = {
  name: string;
  readLevel: number;
  spokenLevel: number;
  writtenLevel: number;
};

export type Hobby = {
  name: string;
  description: string;
};

export type Cv = {
  skills: Skill[];
  workExperiences: WorkExperience[];
  education: EducationItem[];
  courses: Course[];
  languages: Language[];
  hobbies: Hobby[];
};
