export type Locale = "vi" | "en";

export const translations: Record<Locale, Record<string, string>> = {
  vi: {
    // Navbar
    "nav.home": "Trang chủ",
    "nav.about": "Giới thiệu",
    "nav.skills": "Kỹ năng",
    "nav.projects": "Dự án",
    "nav.contact": "Liên hệ",

    // Hero
    "hero.greeting": "Xin chào, tôi là",
    "hero.role": "Tech Tinkerer & Automation Enthusiast",
    "hero.tagline": "automation • tinkering • building",
    "hero.cta": "Xem dự án",
    "hero.contact": "Liên hệ",
    "hero.roles": "Tự động hoá,Thích công nghệ,Sinh viên Điện tử,Xây dựng hệ thống",

    // About
    "about.label": "01 — Giới thiệu",
    "about.title": "Giới thiệu",
    "about.bio": "Bắt đầu từ việc vọc config Minecraft Server năm 2020, tôi dần khám phá ra đam mê thực sự với công nghệ và tự động hoá. Từ tuỳ biến plugin, nâng cấp server, đến xây dựng hệ thống monitoring và desktop app — tôi tin rằng nếu có thể tự động hoá được, thì nên tự động hoá nó.",
    "about.location": "Việt Nam 🇻🇳",
    "about.available": "Sẵn sàng nhận dự án",
    "about.journey": "Hành trình",
    "exp.0.role": "Builder & AI Tinkerer",
    "exp.0.desc": "Phát triển Minecraft plugin với AI, xây dựng desktop apps và hệ thống monitoring.",
    "exp.1.role": "Freelance Developer",
    "exp.1.desc": "Xây dựng tools tự động hoá (GitHub Actions, bots), Nova Video Studio, PM2 Monitor Dashboard, v.v.",
    "exp.2.role": "Sinh viên Điện tử Viễn thông",
    "exp.2.desc": "Học về mạch điện tử, vi xử lý, IoT, robotics. Tham gia cuộc thi RobotGladiator — Khoa Điện.",
    "exp.3.role": "Minecraft Server Config",
    "exp.3.desc": "Config server Minecraft, tuỳ biến plugin, quản lý server, tìm hiểu và lập trình.",

    // Skills
    "skills.label": "02 — Kỹ năng",
    "skills.title": "Kỹ năng",
    "skills.all": "Tất cả",
    "skills.universe": "Tech Universe",
    "skills.hover": "Hover hoặc tap vào từng skill để xem chi tiết",
    "cat.Automation": "Tự động hoá",
    "cat.Development": "Phát triển",
    "cat.Hardware": "Phần cứng",

    // Projects
    "projects.label": "03 — Dự án",
    "projects.title": "Dự án nổi bật",
    "projects.desc": "Hover vào thẻ dự án để xem chi tiết và link",
    "projects.featured": "Nổi bật",
    "projects.viewDemo": "Xem Demo",
    "projects.viewCode": "Source Code",
    "projects.viewAll": "Xem tất cả trên GitHub",
    "proj.1.title": "PM2 Monitor Dashboard",
    "proj.1.desc": "Dashboard giám sát Node.js ecosystem với glassmorphism UI, live metrics, role-based access control. Xây dựng bằng Next.js & tRPC.",
    "proj.2.title": "Nova Video Studio",
    "proj.2.desc": "Desktop app all-in-one: download, merge, convert video. Hỗ trợ 1000+ sites, parallel downloads, bandwidth limiting với Dark UI premium.",
    "proj.3.title": "Actions Daily",
    "proj.3.desc": "Hệ thống tự động tạo bản tin Markdown hằng ngày, cày contributions bằng GitHub Actions, lấy data từ API và ping Discord.",
    "proj.4.title": "RobotGladiator",
    "proj.4.desc": "Dự án cuộc thi học thuật RoboGladiator — Khoa Điện - Điện tử. Lập trình robot đấu trường bằng C++ và vi điều khiển.",

    // Contact
    "contact.label": "04 — Liên hệ",
    "contact.title": "Kết nối",
    "contact.description": "Có ý tưởng hay hoặc muốn hợp tác? Tôi luôn sẵn sàng lắng nghe những dự án thú vị. Hãy kết nối với tôi!",
    "contact.name": "Tên của bạn",
    "contact.email": "Email của bạn",
    "contact.message": "Tin nhắn",
    "contact.send": "Gửi tin nhắn",
    "contact.sending": "Đang gửi...",

    // Footer
    "footer.builtWith": "Built with",
    "footer.using": "using Next.js & TailwindCSS",

    // GitHub Heatmap
    "heatmap.title": "GitHub Contributions",
    "heatmap.contributions": "đóng góp - ",
    "heatmap.busiest": "Ngày bận nhất",
    "heatmap.longest": "Chuỗi dài nhất",
    "heatmap.current": "Chuỗi hiện tại",
    "heatmap.days": "ngày",
    "heatmap.less": "Ít",
    "heatmap.more": "Nhiều",

    // Stats
    "stats.repos": "Public Repos",
    "stats.contributions": "Contributions",
    "stats.experience": "Năm kinh nghiệm",
    "stats.visitors": "Lượt truy cập",

    // 404
    "404.title": "Trang không tồn tại",
    "404.description": "Trang bạn đang tìm kiếm đã bị di chuyển, bị xóa hoặc không bao giờ tồn tại.",
    "404.home": "Về trang chủ",
    "404.back": "Quay lại",
    "404.funfact": "Sự thật thú vị: Mã trạng thái HTTP 404 được đặt tên theo phòng 404 tại CERN, nơi đặt máy chủ web đầu tiên. 🧪",

    // Terminal
    "terminal.welcome": "Chào mừng bạn đến với thinhme.tech terminal v1.0",
    "terminal.help_msg": "Gõ \"help\" để xem danh sách lệnh.",
    "terminal.notfound": "Không tìm thấy lệnh: {cmd}. Gõ \"help\" để xem danh sách lệnh.",
    "terminal.matrix": "Đang khởi tạo Matrix Rain... 🟢",
    "terminal.hack": "Đang chạy kịch bản hacker... 💀",
    "terminal.help_content": "Lệnh khả dụng:\n  about      — Tôi là ai?\n  skills     — Kỹ năng công nghệ\n  projects   — Các dự án của tôi\n  contact    — Cách liên lạc\n  socials    — Mạng xã hội\n  education  — Học vấn\n  echo       — Lặp lại văn bản\n  clear      — Xoá màn hình\n  date       — Thời gian hiện tại\n  whoami     — Người dùng hiện tại\n  neofetch   — Thông tin hệ thống\n  matrix     — 🟢 Vào Ma Trận\n  hack       — 💀 Hack trang web này",
    "terminal.contact_msg": "📧 Email: hello@thinhme.tech\n🌐 Web:   thinhme.tech\n🐙 GitHub: github.com/thinhphan109\n\nĐừng ngần ngại liên hệ nhé! 🚀",
    "terminal.socials_msg": "🐙 GitHub   → github.com/thinhphan109\n🌐 Website  → thinhme.tech",
    "terminal.education_msg": "🎓 Sinh viên Điện tử Viễn thông\n   Đại học (2024 — Hiện tại)\n\n📚 Tập trung: Điện tử, Viễn thông,\n   IoT, Tự động hoá",
    "terminal.neofetch_os": "Hệ điều hành",
    "terminal.neofetch_shell": "Vỏ lệnh",
    "terminal.neofetch_packages": "Gói kỹ năng",
    "terminal.uptime_since": "từ năm 2020",
  },

  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.role": "Tech Tinkerer & Automation Enthusiast",
    "hero.tagline": "automation • tinkering • building",
    "hero.cta": "View Projects",
    "hero.contact": "Contact Me",
    "hero.roles": "Automation Enthusiast,Tech Tinkerer,Electronics Student,Builder",

    // About
    "about.label": "01 — About",
    "about.title": "About Me",
    "about.bio": "Starting from tinkering with Minecraft Server configs in 2020, I gradually discovered my true passion for technology and automation. From customizing plugins, upgrading servers, to building monitoring systems and desktop apps — I believe that if something can be automated, it should be.",
    "about.location": "Vietnam 🇻🇳",
    "about.available": "Available for work",
    "about.journey": "Journey",
    "exp.0.role": "Builder & AI Tinkerer",
    "exp.0.desc": "Developed AI-powered Minecraft plugins, built desktop apps and monitoring systems.",
    "exp.1.role": "Freelance Developer",
    "exp.1.desc": "Built automation tools (GitHub Actions, bots), Nova Video Studio, PM2 Monitor Dashboard, etc.",
    "exp.2.role": "Electronics Student",
    "exp.2.desc": "Studying electronic circuits, microprocessors, IoT, robotics. Participated in RoboGladiator competition.",
    "exp.3.role": "Minecraft Server Configurator",
    "exp.3.desc": "Configuring Minecraft servers, customizing plugins, managing servers, and programming explorations.",

    // Skills
    "skills.label": "02 — Skills",
    "skills.title": "Tech Stack",
    "skills.all": "All",
    "skills.universe": "Tech Universe",
    "skills.hover": "Hover or tap on each skill for details",
    "cat.Automation": "Automation",
    "cat.Development": "Development",
    "cat.Hardware": "Hardware",

    // Projects
    "projects.label": "03 — Projects",
    "projects.title": "Featured Projects",
    "projects.desc": "Hover on project cards for details and links",
    "projects.featured": "Featured",
    "projects.viewDemo": "Live Demo",
    "projects.viewCode": "Source Code",
    "projects.viewAll": "View All on GitHub",
    "proj.1.title": "PM2 Monitor Dashboard",
    "proj.1.desc": "Node.js ecosystem monitoring dashboard with glassmorphism UI, live metrics, and role-based access control. Built with Next.js & tRPC.",
    "proj.2.title": "Nova Video Studio",
    "proj.2.desc": "All-in-one desktop app: download, merge, convert video. Supports 1000+ sites, parallel downloads, with premium Dark UI.",
    "proj.3.title": "Actions Daily",
    "proj.3.desc": "Automated system for creating daily Markdown newsletters and farming contributions via GitHub Actions.",
    "proj.4.title": "RobotGladiator",
    "proj.4.desc": "Academic robot competition project — Department of Electronics. Programmed arena robots using C++ and microcontrollers.",

    // Contact
    "contact.label": "04 — Contact",
    "contact.title": "Let's Connect",
    "contact.description": "Got an interesting idea or want to collaborate? I'm always open to hearing about exciting projects. Let's connect!",
    "contact.name": "Your name",
    "contact.email": "Your email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",

    // Footer
    "footer.builtWith": "Built with",
    "footer.using": "using Next.js & TailwindCSS",

    // GitHub Heatmap
    "heatmap.title": "GitHub Contributions",
    "heatmap.contributions": "contributions in the",
    "heatmap.busiest": "Busiest Day",
    "heatmap.longest": "Longest Streak",
    "heatmap.current": "Current Streak",
    "heatmap.days": "days",
    "heatmap.less": "Less",
    "heatmap.more": "More",

    // Stats
    "stats.repos": "Public Repos",
    "stats.contributions": "Contributions",
    "stats.experience": "Years Experience",
    "stats.visitors": "Visitors",

    // 404
    "404.title": "Page Not Found",
    "404.description": "The page you're looking for has been moved, deleted, or never existed.",
    "404.home": "Go Home",
    "404.back": "Go Back",
    "404.funfact": "Fun fact: The HTTP 404 status code was named after room 404 at CERN, where the original web servers were located. 🧪",

    // Terminal
    "terminal.welcome": "Welcome to thinhme.tech terminal v1.0",
    "terminal.help_msg": "Type \"help\" to see available commands.",
    "terminal.notfound": "Command not found: {cmd}. Type \"help\" for available commands.",
    "terminal.matrix": "Initiating Matrix Rain... 🟢",
    "terminal.hack": "Launching hack sequence... 💀",
    "terminal.help_content": "Available commands:\n  about      — Who am I?\n  skills     — My tech stack\n  projects   — My projects\n  contact    — How to reach me\n  socials    — Social links\n  education  — My education\n  echo       — Echo your text\n  clear      — Clear terminal\n  date       — Current date/time\n  whoami     — Current user\n  neofetch   — System info\n  matrix     — 🟢 Enter the Matrix\n  hack       — 💀 Hack this site",
    "terminal.contact_msg": "📧 Email: hello@thinhme.tech\n🌐 Web:   thinhme.tech\n🐙 GitHub: github.com/thinhphan109\n\nFeel free to reach out! 🚀",
    "terminal.socials_msg": "🐙 GitHub   → github.com/thinhphan109\n🌐 Website  → thinhme.tech",
    "terminal.education_msg": "🎓 Electronics Student\n   University (2024 — Now)\n\n📚 Focus: Electronics, Telecommunications,\n   IoT, Automation",
    "terminal.neofetch_os": "OS",
    "terminal.neofetch_shell": "Shell",
    "terminal.neofetch_packages": "Skill packages",
    "terminal.uptime_since": "since 2020",
  },
};
