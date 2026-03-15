import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Thinh Phan — Developer & Creator",
  description:
    "Personal portfolio of Thinh Phan — Electronics & Telecommunications student, automation enthusiast, and builder of digital experiences. Explore projects, skills, and more.",
  keywords: [
    "Thinh Phan", "thinhme.tech", "portfolio", "developer",
    "automation", "IoT", "electronics", "Next.js", "TypeScript",
  ],
  authors: [{ name: "Thinh Phan", url: "https://thinhme.tech" }],
  creator: "Thinh Phan",
  metadataBase: new URL("https://thinhme.tech"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thinhme.tech",
    siteName: "Thinh Phan — Portfolio",
    title: "Thinh Phan — Developer & Creator",
    description: "Electronics student, automation enthusiast, and builder. Explore my projects and skills.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Thinh Phan — Developer & Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thinh Phan — Developer & Creator",
    description: "Electronics student, automation enthusiast, and builder.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
