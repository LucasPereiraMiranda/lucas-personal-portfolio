import { Project, ProjectType } from "../types/project";

export const projects: Project[] = [
  {
    id: "check-in-card-generator",
    name: "Check-in Card Generator",
    description:
      "Exploring FaaS, AWS, Serverless, Lambda & DynamoDB to create course check-in cards with automatic image generation",
    image:
      "https://raw.githubusercontent.com/LucasPereiraMiranda/check-in-card-generator/master/.github/images/generated.png",
    technologies: ["AWS Lambda", "DynamoDB", "Serverless", "TypeScript", "Node.js"],
    type: "api",
    featured: true,
    year: 2023,
    status: "active",
    links: [
      {
        type: "github",
        url: "https://github.com/LucasPereiraMiranda/check-in-card-generator",
      },
    ],
  },
  {
    id: "web-calculator",
    name: "Web Calculator",
    description:
      "A project made with HTML, CSS, and pure JavaScript with the intention of practicing the basics of web development",
    image:
      "https://raw.githubusercontent.com/LucasPereiraMiranda/web-calculator/master/.github/web-calculator.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "web",
    featured: false,
    year: 2021,
    status: "active",
    links: [
      {
        type: "github",
        url: "https://github.com/LucasPereiraMiranda/web-calculator",
      },
    ],
  },
  {
    id: "http-health-monitor-cli",
    name: "HTTP Health Monitor CLI",
    description:
      "The CLI written in GoLang to check the health of HTTP-based systems with concurrent monitoring capabilities",
    image:
      "https://raw.githubusercontent.com/LucasPereiraMiranda/http-health-monitor-cli/main/.github/images/help.png",
    technologies: ["Go"],
    type: "cli",
    featured: true,
    year: 2023,
    status: "active",
    links: [
      {
        type: "github",
        url: "https://github.com/LucasPereiraMiranda/http-health-monitor-cli",
      },
    ],
  },
  {
    id: "currency-converter",
    name: "Currency Converter",
    description:
      "Development of a basic web-based currency converter system as a practical activity for Web I course at UFOP",
    image:
      "https://raw.githubusercontent.com/LucasPereiraMiranda/currency-converter/master/.github/init.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "web",
    featured: false,
    year: 2020,
    status: "archived",
    links: [
      {
        type: "github",
        url: "https://github.com/LucasPereiraMiranda/currency-converter",
      },
    ],
  },
  {
    id: "linux-todolist-manager",
    name: "Linux Todolist Manager",
    description:
      "An academic program designed to create and manage task lists, specifically developed for Linux distributions. The interface is in PT-BR",
    image:
      "https://raw.githubusercontent.com/LucasPereiraMiranda/todolist/master/.github/img/execution.png",
    technologies: ["C", "Linux", "Shell"],
    type: "cli",
    featured: false,
    year: 2019,
    status: "archived",
    links: [
      {
        type: "github",
        url: "https://github.com/LucasPereiraMiranda/todolist",
      },
    ],
  },
  {
    id: "pix-control",
    name: "Pix Control",
    description:
      "Development of a basic web-based Pix payment control system as a practical activity for Web I course at UFOP",
    image:
      "https://github.com/LucasPereiraMiranda/pix-control/blob/master/.github/welcome.png?raw=true",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "web",
    featured: false,
    year: 2021,
    status: "archived",
    links: [
      {
        type: "github",
        url: "https://github.com/LucasPereiraMiranda/pix-control",
      },
    ],
  },
];

// Utility functions
export const getAllTechnologies = (): string[] => {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
};

export const getProjectTypes = (): ProjectType[] => {
  const typeSet = new Set<ProjectType>();
  projects.forEach((project) => typeSet.add(project.type));
  return Array.from(typeSet).sort() as ProjectType[];
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const filterProjects = (
  allProjects: Project[],
  technology?: string,
  type?: string
): Project[] => {
  return allProjects.filter((project) => {
    const matchesTech = !technology || project.technologies.includes(technology);
    const matchesType = !type || project.type === type;
    return matchesTech && matchesType;
  });
};
