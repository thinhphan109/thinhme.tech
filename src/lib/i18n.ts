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
    "appearance.typewriter": "Hiệu ứng gõ chữ",

    // Hero
    "hero.greeting": "Xin chào, tôi là",
    "hero.role": "Sinh viên Điện tử Viễn thông",
    "hero.tagline": "automation • tinkering • building",
    "hero.cta": "Xem dự án",
    "hero.contact": "Liên hệ",
    "hero.roles": "Sinh viên Điện tử Viễn thông,Nghiên cứu thị giác máy tính,Tự động hoá,Vận hành trên Raspberry Pi",

    // About
    "about.label": "01 — Giới thiệu",
    "about.title": "Giới thiệu",
    "about.bio": "Tôi là sinh viên Điện tử Viễn thông, quan tâm đến hệ thống nhúng và thị giác máy tính. Tôi cũng xây dựng công cụ để tự động hoá những việc lặp lại, từ theo dõi mẻ in 3D đến quản lý thiết bị.",
    "about.location": "Việt Nam 🇻🇳",
    "about.available": "Điện tử, hệ thống nhúng và IoT",
    "about.present": "Nay",
    "about.journey": "Hành trình",

    "exp.education.role": "Sinh viên Điện tử Viễn thông",
    "exp.education.context": "Khoa Điện – Điện tử, HCMUTE",
    "exp.education.desc": "Trong đề tài RobotVision, tôi dùng YOLO để nhận diện các khối hình từ ảnh camera và mô phỏng đường đi của cánh tay robot trên trình duyệt.",
    "exp.automation.role": "Xây dựng hệ thống vận hành",
    "exp.automation.context": "Dự án cá nhân",
    "exp.automation.desc": "Tôi phát triển METECH Assistant để theo dõi mẻ in và kho nhựa, và Pi Control để quản lý Raspberry Pi. Với MetechCamA1, tôi dùng điện thoại Android cũ làm camera cố định để chụp timelapse.",
    "exp.minecraft.role": "Minecraft Server",
    "exp.minecraft.context": "Cấu hình plugin và vận hành",
    "exp.minecraft.desc": "Từng triển khai và bảo trì máy chủ, tuỳ biến plugin cho các chế độ chơi và tự động hoá công việc vận hành.",

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
    "appearance.typewriter": "Typing animation",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.role": "Electronics & Telecommunications Student",
    "hero.tagline": "automation • tinkering • building",
    "hero.cta": "View Projects",
    "hero.contact": "Contact Me",
    "hero.roles": "Electronics & Telecom Student,Computer Vision Research,Automation,Raspberry Pi Operations",

    // About
    "about.label": "01 — About",
    "about.title": "About Me",
    "about.bio": "I study electronics and telecommunications, with a focus on embedded systems and computer vision. I also build tools to automate recurring tasks, from tracking 3D print batches to managing devices.",
    "about.location": "Vietnam 🇻🇳",
    "about.available": "Electronics, Embedded Systems and IoT",
    "about.present": "Present",
    "about.journey": "Journey",

    "exp.education.role": "Electronics & Telecommunications Student",
    "exp.education.context": "Faculty of Electrical and Electronics Engineering, HCMUTE",
    "exp.education.desc": "In the RobotVision research project, I use YOLO to detect geometric shapes in camera images and simulate the robot arm’s path in the browser.",
    "exp.automation.role": "Building Operations Tools",
    "exp.automation.context": "Personal Projects",
    "exp.automation.desc": "I built METECH Assistant to track print batches and filament, and Pi Control to manage a Raspberry Pi. For MetechCamA1, I repurposed an old Android phone as a fixed timelapse camera.",
    "exp.minecraft.role": "Minecraft Server",
    "exp.minecraft.context": "Plugin Configuration and Operations",
    "exp.minecraft.desc": "Deployed and maintained servers, customized plugins for game modes, and automated routine operations.",

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
