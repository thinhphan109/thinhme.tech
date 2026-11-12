type ProjectCopy = {
  summary: string;
  implementation: string;
  imageAlt: string;
};

export type Project = {
  id: string;
  title: string;
  tech: string[];
  image: string;
  copy: { vi: ProjectCopy; en: ProjectCopy };
  featured?: boolean;
  sampleImage?: boolean;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "metech-assistant",
    title: "METECH Assistant",
    tech: ["Node.js", "React", "SQLite", "Zalo"],
    image: "/projects/metech-assistant.webp",
    featured: true,
    sampleImage: true,
    copy: {
      vi: {
        summary: "Trợ lý vận hành xưởng in 3D. Theo dõi mẻ in, tiến độ máy và kho nhựa trên dashboard, nhận cập nhật qua Zalo.",
        implementation: "Mỗi mẻ lưu kết quả theo từng mẫu để theo dõi các lượt in lại và đối soát lượng nhựa đã dùng. GitHub Actions kiểm tra dashboard trước khi triển khai.",
        imageAlt: "Dashboard quản lý mẻ in METECH Assistant với dữ liệu mẫu",
      },
      en: {
        summary: "An operations assistant for a 3D printing workshop. Track print batches, printer progress and filament inventory from a dashboard, with updates via Zalo.",
        implementation: "Each batch records the outcome for every part so operators can track reprints and reconcile filament use. GitHub Actions verifies the dashboard before deployment.",
        imageAlt: "METECH Assistant print batch dashboard with sample data",
      },
    },
  },
  {
    id: "pi-control",
    title: "Pi Control",
    tech: ["Raspberry Pi", "Python", "Flask", "systemd"],
    image: "/projects/pi-control.webp",
    sampleImage: true,
    copy: {
      vi: {
        summary: "Dashboard quản trị Raspberry Pi, có điểm phát Wi-Fi dự phòng để truy cập lại khi mất kết nối mạng.",
        implementation: "Dịch vụ chạy nền theo dõi kết nối Wi-Fi và chuyển sang điểm phát dự phòng khi cần. Dashboard gom trạng thái mạng, tài nguyên và dịch vụ để kiểm tra từ một chỗ.",
        imageAlt: "Dashboard Pi Control với trạng thái mạng và thông số Raspberry Pi minh hoạ",
      },
      en: {
        summary: "A Raspberry Pi dashboard with a fallback Wi-Fi access point that keeps the device reachable when its network connection drops.",
        implementation: "A background service monitors Wi-Fi and switches to the fallback access point when needed. The dashboard brings network status, resource usage and services into one view.",
        imageAlt: "Pi Control dashboard with sample Raspberry Pi metrics and network status",
      },
    },
  },
  {
    id: "drive-vault",
    title: "Drive Vault",
    tech: ["Python", "FastAPI", "SQLite", "Google Drive"],
    image: "/projects/drive-vault.webp",
    sampleImage: true,
    copy: {
      vi: {
        summary: "Tủ tài liệu riêng dùng Google Drive, có phân quyền theo bộ tài liệu và trình xem PDF, video ngay trên web.",
        implementation: "Chủ kho cấp quyền theo từng bộ tài liệu. Video hỗ trợ HTTP Range để người xem có thể tua mà server chỉ đọc phần cần phát.",
        imageAlt: "Trình đọc PDF của Drive Vault hiển thị tài liệu mẫu có watermark",
      },
      en: {
        summary: "A private library backed by Google Drive, with permissions per collection and in-browser PDF and video viewing.",
        implementation: "The library owner grants access per collection. Video playback uses HTTP Range requests so viewers can seek while the server reads only the requested portions.",
        imageAlt: "Drive Vault PDF reader displaying a watermarked sample document",
      },
    },
  },
  {
    id: "saigon-pulse",
    title: "Saigon Pulse",
    tech: ["Python", "GitHub Actions", "GitHub Pages"],
    image: "/projects/saigon-pulse.webp",
    demoUrl: "https://thinhphan109.github.io/actions-daily/",
    copy: {
      vi: {
        summary: "Bản tin dữ liệu tự động về thời tiết, chất lượng không khí và thị trường, có biểu đồ lịch sử và trạng thái từng nguồn.",
        implementation: "Python thu thập và chuẩn hoá dữ liệu công khai. GitHub Actions chạy bản tin sáng và trưa rồi xuất bản dashboard tĩnh lên GitHub Pages.",
        imageAlt: "Dashboard công khai của Saigon Pulse với bản tin và chỉ số trong ngày",
      },
      en: {
        summary: "An automated digest of weather, air quality and market data, with historical charts and per-source status.",
        implementation: "Python collects and normalizes public data. GitHub Actions runs the morning and midday digests, then publishes the static dashboard to GitHub Pages.",
        imageAlt: "Public Saigon Pulse dashboard showing the daily digest and metrics",
      },
    },
  },
];
