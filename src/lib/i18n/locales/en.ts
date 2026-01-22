export const en = {
  nav: {
    home: "Home",
    techStack: "Tech Stack",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi there!",
    intro: "I'm",
    sequences: [
      "Crafting Digital Experiences",
      "Transforming Ideas into Reality",
      "Building Scalable Solutions",
      "Full Stack Developer",
      "Software Engineer",
    ],
  },
  techStack: {
    title: "My tech stack",
    subtitle: "Technologies I have been working on & studying recently",
    sections: {
      languages: "Main Programming Languages & Platforms",
      frontend: "Main Frontend Technologies",
      infrastructure: "Main Infrastructure Technologies",
      databases: "Data Persistence Technologies and DBMS",
      backend: "Backend Frameworks",
      git: "Remote Cloud Repository and Git Tools",
      agility: "Agility and Documentation",
      editors: "Favorite Text Editors",
    },
  },
  experience: {
    title: "Professional Experience",
    subtitle: "My journey through the tech industry",
    current: "Current",
  },
  projects: {
    title: "Projects",
    subtitle:
      "A collection of projects and studies showcasing different technologies, architectures, and problem-solving approaches",
    showing: "Showing",
    of: "of",
    projectsLabel: "projects",
  },
  contact: {
    title: "Get In Touch",
    subtitle:
      "Feel free to reach out for tech discussions, collaborations, or just to connect.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your.email@example.com",
      subject: "Subject",
      subjectPlaceholder: "What would you like to talk about?",
      message: "Message",
      messagePlaceholder: "Your message...",
      send: "Send Message",
      sending: "Sending...",
      sent: "Sent!",
    },
    validation: {
      nameRequired: "Name is required",
      nameMin: "Name must be at least 2 characters",
      emailRequired: "Email is required",
      emailInvalid: "Invalid email",
      subjectRequired: "Subject is required",
      messageRequired: "Message is required",
      messageMin: "Message must be at least 10 characters",
    },
    toast: {
      validationError: "Validation error",
      validationDescription: "Please fill in all fields correctly.",
      successTitle: "Message sent!",
      successDescription:
        "Thank you for reaching out. I'll get back to you soon!",
      errorTitle: "Error sending message",
      errorDescription:
        "An error occurred. Please try again or contact me directly via email.",
    },
    status: {
      success: "Message sent successfully!",
      error: "Error sending. Please try again.",
    },
    info: {
      title: "Information",
      email: "Email",
      location: "Location",
      locationValue: "Brazil",
    },
    social: {
      title: "Social Media",
    },
  },
};

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends readonly string[]
    ? string[]
    : T[K] extends object
    ? DeepStringify<T[K]>
    : string;
};

export type Translations = DeepStringify<typeof en>;
