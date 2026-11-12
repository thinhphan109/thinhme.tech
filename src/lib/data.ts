export const personalInfo = {
  name: "THINH",
  lastName: "PHAN",
  role: "Tech Tinkerer & Automation Enthusiast",
  tagline: "automation • tinkering • building",
  avatar: "/images/avatar.jpg",
  email: "hello@thinhme.tech",
  location: "Vietnam 🇻🇳",
  available: true,
  github: "thinhphan109",
  website: "https://thinhme.tech",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/thinhphan109", icon: "github" },
  { name: "Website", url: "https://thinhme.tech", icon: "globe" },
  { name: "Email", url: "mailto:hello@thinhme.tech", icon: "mail" },
];

export const skills = [
  // Automation & Scripting
  { name: "Python", level: 88, category: "Automation" },
  { name: "GitHub Actions", level: 85, category: "Automation" },
  { name: "Shell / Bash", level: 80, category: "Automation" },
  { name: "Docker", level: 78, category: "Automation" },
  // Development
  { name: "TypeScript", level: 85, category: "Development" },
  { name: "React / Next.js", level: 82, category: "Development" },
  { name: "Node.js", level: 80, category: "Development" },
  { name: "Electron", level: 75, category: "Development" },
  // Hardware & Telecom
  { name: "C / C++", level: 82, category: "Hardware" },
  { name: "Arduino / ESP32", level: 85, category: "Hardware" },
  { name: "Java", level: 75, category: "Hardware" },
  { name: "Linux / VPS", level: 88, category: "Hardware" },
];

export { projects } from "./projects";

export const experiences: { from: number; to?: number }[] = [
  { from: 2025 },
  { from: 2024 },
  { from: 2024 },
  { from: 2020, to: 2026 },
];

export const marqueeWords = [
  "AUTOMATION",
  "TINKERER",
  "BUILDER",
  "ELECTRONICS",
  "DEVELOPER",
  "CREATOR",
  "IOT",
  "OPEN SOURCE",
];
