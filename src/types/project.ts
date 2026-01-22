export type ProjectType =
  | "web"
  | "cli"
  | "mobile"
  | "library"
  | "api"
  | "devops";

export type ProjectStatus = "active" | "archived" | "in-progress";

export interface ProjectLink {
  type: "github" | "demo" | "docs" | "npm" | "website";
  url: string;
  label?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  type: ProjectType;
  featured: boolean;
  links: ProjectLink[];
  year?: number;
  status?: ProjectStatus;
}

export interface ProjectFilters {
  technology?: string;
  type?: ProjectType;
  featured?: boolean;
}
