export type Locale = "vi" | "en";

export const translations: Record<Locale, Record<string, string>> = {
  vi: {
    // Navbar
    "nav.home": "Trang chủ",
    "nav.about": "Giới thiệu",
    "nav.research": "Nghiên cứu",
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
    "hero.role": "Sinh viên Điện tử Viễn thông",
    "hero.tagline": "automation • tinkering • building",
    "hero.cta": "Xem dự án",
    "hero.contact": "Liên hệ",
    "hero.roles": "Sinh viên Điện tử Viễn thông,Nghiên cứu thị giác máy tính,Tự động hoá,Vận hành trên Raspberry Pi",

    // About
    "about.label": "01 — Giới thiệu",
    "about.title": "Giới thiệu",
    "about.bio": "Tôi là sinh viên Điện tử Viễn thông, quan tâm đến hệ thống nhúng và thị giác máy tính. Trong đề tài RobotVision, tôi kết hợp camera, nhận diện vật thể và mô phỏng cánh tay robot. Tôi cũng xây dựng công cụ tự động hoá cho các công việc hằng ngày.",
    "about.location": "Việt Nam 🇻🇳",
    "about.available": "Điện tử, hệ thống nhúng và IoT",
    "about.present": "Nay",
    "about.journey": "Hành trình",

    "exp.education.role": "Sinh viên Điện tử Viễn thông",
    "exp.education.context": "Khoa Điện – Điện tử, HCMUTE",
    "exp.education.desc": "Học về vi điều khiển, IoT và điều khiển robot. Tham gia cuộc thi RobotGladiator và thực hiện đề tài RobotVision về thị giác máy tính tại biên.",
    "exp.automation.role": "Xây dựng hệ thống vận hành",
    "exp.automation.context": "Dự án cá nhân",
    "exp.automation.desc": "Phát triển METECH Assistant để theo dõi mẻ in và kho nhựa, Pi Control để quản trị Raspberry Pi, và Saigon Pulse để tổng hợp bản tin dữ liệu.",
    "exp.minecraft.role": "Quản trị máy chủ Minecraft",
    "exp.minecraft.context": "Dự án cộng đồng",
    "exp.minecraft.desc": "Từng thiết lập và bảo trì máy chủ Minecraft, tuỳ biến plugin và tự động hoá công việc quản trị. Giai đoạn này kết thúc vào năm 2026.",

    // Research
    "research.title": "Nghiên cứu khoa học",
    "research.robotvision.context": "Đề tài nhóm · 2026",
    "research.robotvision.summary": "Nghiên cứu robot gắp–đặt để phân loại vật thể trên bàn. Nhóm dùng YOLO nhận diện ba dạng khối, hiệu chuẩn camera với ChArUco và thử mô phỏng quỹ đạo trước khi chạy tay robot.",
    "research.robotvision.image": "Cánh tay robot in 3D trên bàn thử với bốn mốc ArUco.",
    "research.robotvision.datasetLabel": "Tập dữ liệu v2",
    "research.robotvision.dataset": "331 ảnh",
    "research.robotvision.calibrationLabel": "RMS hiệu chuẩn · 35 ảnh",
    "research.robotvision.calibration": "0,214 px",
    "research.robotvision.scope": "Đã thử nhận diện trên ảnh camera và mô phỏng quỹ đạo. RMS là sai số chiếu lại của camera. Độ chính xác gắp–đặt trên robot thật còn chờ nghiệm thu.",
    "research.camera.summary": "Nguyên mẫu camera timelapse cho máy in 3D. ESP32-S3 và OV5640 ghi ảnh lên microSD. Ứng dụng Windows tải ảnh và ghép thành video MP4.",
    "research.camera.source": "Xem mã nguồn MetechCamA1",

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
    "nav.research": "Research",
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
    "hero.role": "Electronics & Telecommunications Student",
    "hero.tagline": "automation • tinkering • building",
    "hero.cta": "View Projects",
    "hero.contact": "Contact Me",
    "hero.roles": "Electronics & Telecom Student,Computer Vision Research,Automation,Raspberry Pi Operations",

    // About
    "about.label": "01 — About",
    "about.title": "About Me",
    "about.bio": "I study electronics and telecommunications, with a focus on embedded systems and computer vision. In RobotVision, I work on camera input, object detection, and robot arm simulation. I also build automation tools for everyday tasks.",
    "about.location": "Vietnam 🇻🇳",
    "about.available": "Electronics, Embedded Systems and IoT",
    "about.present": "Present",
    "about.journey": "Journey",

    "exp.education.role": "Electronics & Telecommunications Student",
    "exp.education.context": "Faculty of Electrical and Electronics Engineering, HCMUTE",
    "exp.education.desc": "Studying microcontrollers, IoT, and robot control. Participated in RobotGladiator and worked on RobotVision, a research project in edge computer vision.",
    "exp.automation.role": "Building Operations Tools",
    "exp.automation.context": "Personal Projects",
    "exp.automation.desc": "Built METECH Assistant to track print batches and filament, Pi Control to manage a Raspberry Pi, and Saigon Pulse to publish data digests.",
    "exp.minecraft.role": "Minecraft Server Administration",
    "exp.minecraft.context": "Community Projects",
    "exp.minecraft.desc": "Set up and maintained Minecraft servers, customized plugins, and automated administrative tasks. This work ended in 2026.",

    // Research
    "research.title": "Research",
    "research.robotvision.context": "Team research project · 2026",
    "research.robotvision.summary": "A tabletop robot for sorting objects through pick and place. The team uses YOLO to detect three shapes, calibrates the camera with ChArUco, and simulates trajectories before moving the arm.",
    "research.robotvision.image": "The 3D-printed arm on the test bench with four ArUco markers.",
    "research.robotvision.datasetLabel": "Dataset v2",
    "research.robotvision.dataset": "331 images",
    "research.robotvision.calibrationLabel": "Calibration RMS · 35 images",
    "research.robotvision.calibration": "0.214 px",
    "research.robotvision.scope": "We tested detection on camera images and simulated trajectories. RMS measures camera reprojection error. Pick-and-place accuracy on the physical robot is still under evaluation.",
    "research.camera.summary": "A timelapse camera prototype for 3D printing. An ESP32-S3 and OV5640 record frames to microSD, and a Windows app downloads and renders them to MP4.",
    "research.camera.source": "View MetechCamA1 source",

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
