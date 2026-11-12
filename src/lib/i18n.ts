export type Locale = "vi" | "en";

export const translations: Record<Locale, Record<string, string>> = {
  vi: {
    // Navbar
    "nav.home": "Trang chủ",
    "nav.about": "Giới thiệu",
    "nav.skills": "Kỹ năng",
    "nav.projects": "Dự án",
    "nav.contact": "Liên hệ",
    "appearance.title": "Giao diện",
    "appearance.mode": "Chế độ hiển thị",
    "appearance.light": "Sáng",
    "appearance.dark": "Tối",
    "appearance.system": "Hệ thống",

    // Hero
    "hero.greeting": "Xin chào, tôi là",
    "hero.role": "Tech Tinkerer & Automation Enthusiast",
    "hero.tagline": "automation • tinkering • building",
    "hero.cta": "Xem dự án",
    "hero.contact": "Liên hệ",
    "hero.roles": "Xây dựng hệ thống,Tự động hoá,Vận hành trên Raspberry Pi,Điện tử & IoT",

    // About
    "about.label": "01 — Giới thiệu",
    "about.title": "Giới thiệu",
    "about.bio": "Tôi xây dựng công cụ tự động hoá cho những việc lặp lại hằng ngày. Gần đây, tôi phát triển METECH Assistant để theo dõi mẻ in và kho nhựa qua Zalo, Pi Control để quản trị Raspberry Pi, và Saigon Pulse để tổng hợp dữ liệu thành bản tin.",
    "about.location": "Việt Nam 🇻🇳",
    "about.available": "Sẵn sàng nhận dự án",
    "about.present": "Nay",
    "about.journey": "Hành trình",
    "exp.0.role": "Xây dựng hệ thống vận hành",
    "exp.0.context": "Dự án cá nhân",
    "exp.0.desc": "Phát triển METECH Assistant để theo dõi mẻ in và kho nhựa, đồng thời xây dựng Drive Vault để chia sẻ tài liệu theo quyền truy cập.",
    "exp.1.role": "Freelance Developer",
    "exp.1.context": "Tự động hoá",
    "exp.1.desc": "Xây dựng công cụ tự động hoá, từ bản tin dữ liệu đến vận hành hệ thống trên Raspberry Pi.",
    "exp.2.role": "Sinh viên Điện tử Viễn thông",
    "exp.2.context": "Đại học",
    "exp.2.desc": "Học về mạch điện tử, vi xử lý, IoT, robotics. Tham gia cuộc thi RobotGladiator — Khoa Điện.",
    "exp.3.role": "Thử nghiệm và quản trị máy chủ",
    "exp.3.context": "Dự án cộng đồng",
    "exp.3.desc": "Thiết lập và bảo trì máy chủ cho cộng đồng. Giai đoạn này giúp tôi tích luỹ kinh nghiệm xử lý sự cố và tự động hoá các việc lặp lại.",

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
    "projects.title": "Dự án nổi bật",
    "projects.implementation": "Cách triển khai",
    "projects.sampleImage": "Dữ liệu mẫu",
    "projects.technologies": "Công nghệ",
    "projects.viewDemo": "Mở demo",
    "projects.viewAll": "Xem GitHub",

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
    "appearance.title": "Appearance",
    "appearance.mode": "Color mode",
    "appearance.light": "Light",
    "appearance.dark": "Dark",
    "appearance.system": "System",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.role": "Tech Tinkerer & Automation Enthusiast",
    "hero.tagline": "automation • tinkering • building",
    "hero.cta": "View Projects",
    "hero.contact": "Contact Me",
    "hero.roles": "Building Systems,Automation,Raspberry Pi Operations,Electronics & IoT",

    // About
    "about.label": "01 — About",
    "about.title": "About Me",
    "about.bio": "I build tools that automate repetitive work. Recent projects include METECH Assistant for tracking print batches and filament over Zalo, Pi Control for managing a Raspberry Pi, and Saigon Pulse for publishing data digests.",
    "about.location": "Vietnam 🇻🇳",
    "about.available": "Available for work",
    "about.present": "Present",
    "about.journey": "Journey",
    "exp.0.role": "Building Operations Tools",
    "exp.0.context": "Personal Projects",
    "exp.0.desc": "Built METECH Assistant to track print batches and filament inventory, and Drive Vault to share documents with access controls.",
    "exp.1.role": "Freelance Developer",
    "exp.1.context": "Automation",
    "exp.1.desc": "Built automation tools for tasks ranging from daily data digests to Raspberry Pi operations.",
    "exp.2.role": "Electronics Student",
    "exp.2.context": "University",
    "exp.2.desc": "Studying electronic circuits, microprocessors, IoT, robotics. Participated in RoboGladiator competition.",
    "exp.3.role": "Server Administration and Experimentation",
    "exp.3.context": "Community Projects",
    "exp.3.desc": "Set up and maintained community servers. That work taught me to troubleshoot problems and automate repetitive tasks.",

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
    "projects.title": "Featured Projects",
    "projects.implementation": "How it works",
    "projects.sampleImage": "Sample data",
    "projects.technologies": "Technologies",
    "projects.viewDemo": "Open demo",
    "projects.viewAll": "View GitHub",

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
