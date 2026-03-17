export const personalInfo = {
  name: "THINH",
  lastName: "PHAN",
  role: "Tech Tinkerer & Automation Enthusiast",
  tagline: "automation • tinkering • building",
  bio: `Bắt đầu từ việc vọc config Minecraft Server năm 2020, tôi dần khám phá ra đam mê thực sự với công nghệ và tự động hoá. Từ tuỳ biến plugin, nâng cấp server, đến xây dựng hệ thống monitoring và desktop app — tôi tin rằng nếu có thể tự động hoá được, thì nên tự động hoá nó.`,
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

export const projects = [
  {
    id: 1,
    title: "PM2 Monitor Dashboard",
    description:
      "Dashboard giám sát Node.js ecosystem với glassmorphism UI, live metrics, role-based access control. Xây dựng bằng Next.js & tRPC.",
    tech: ["Next.js", "tRPC", "TypeScript", "PM2"],
    url: "https://pm2.thinhphan.io.vn/",
    github: "https://github.com/thinhphan109/pm2-monitor.web",
    image: "https://raw.githubusercontent.com/thinhphan109/pm2-monitor.web/main/assets/index.jpeg",
    language: "TypeScript",
    featured: true,
  },
  {
    id: 2,
    title: "Nova Video Studio",
    description:
      "Desktop app all-in-one: download, merge, convert video. Hỗ trợ 1000+ sites, parallel downloads, bandwidth limiting với Dark UI premium.",
    tech: ["Electron", "React", "yt-dlp", "TypeScript"],
    url: "https://thinhphan.io.vn/",
    github: "https://github.com/thinhphan109/NovaVideoStudio",
    image: "/projects/nova-video.png",
    language: "TypeScript",
    featured: true,
  },
  {
    id: 3,
    title: "Actions Daily",
    description:
      "Hệ thống tự động tạo bản tin Markdown hằng ngày, cày contributions bằng GitHub Actions, lấy data từ API và ping Discord.",
    tech: ["Python", "GitHub Actions", "API", "Discord"],
    url: "https://github.com/thinhphan109/actions-daily",
    github: "https://github.com/thinhphan109/actions-daily",
    image: "/projects/actions-daily.png",
    language: "Python",
    featured: false,
  },
  {
    id: 4,
    title: "RobotGladiator",
    description:
      "Dự án cuộc thi học thuật RoboGladiator — Khoa Điện - Điện tử. Lập trình robot đấu trường bằng C++ và vi điều khiển.",
    tech: ["C++", "Arduino", "Robotics", "IoT"],
    url: "https://github.com/thinhphan109/RobotGladiator",
    github: "https://github.com/thinhphan109/RobotGladiator",
    image: "/projects/robot-gladiator.jpg",
    language: "C++",
    featured: false,
  },
];

export const experiences = [
  {
    year: "2025 — Now",
    role: "Builder & AI Tinkerer",
    company: "Personal Projects",
    description: "Phát triển Minecraft plugin với AI, xây dựng desktop apps và hệ thống monitoring.",
  },
  {
    year: "2024 — Now",
    role: "Tech Tinkerer & Automation",
    company: "Freelance",
    description: "Xây dựng tools tự động hoá (GitHub Actions, bots), Nova Video Studio, PM2 Monitor Dashboard, v.v.",
  },
  {
    year: "2024 — Now",
    role: "Sinh viên Điện tử Viễn thông",
    company: "Đại học",
    description: "Học về mạch điện tử, vi xử lý, IoT, robotics. Tham gia cuộc thi RobotGladiator — Khoa Điện.",
  },
  {
    year: "2020 — Now",
    role: "Minecraft Server Config",
    company: "Community",
    description: "Config server Minecraft, tuỳ biến plugin, quản lý server, tìm hiểu và lập trình.",
  },
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
