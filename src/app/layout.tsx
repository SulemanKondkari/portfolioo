import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suleman Kondkari | Full Stack Developer & UX Engineer",
  description: "Computer engineering student and web developer building high-performance, cinematic web experiences. View my projects, services, and technical articles.",
  keywords: ["Suleman Kondkari", "Web Developer", "Full Stack Engineer", "React Developer", "Next.js", "Portfolio", "Mumbai", "Frontend Developer", "UX Engineer"],
  authors: [{ name: "Suleman Kondkari", url: "https://github.com/SulemanKondkari" }],
  creator: "Suleman Kondkari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kondkari.com", // Replace with your actual domain
    title: "Suleman Kondkari | Web Developer Portfolio",
    description: "Cinematic, high-performance web experiences built by Suleman Kondkari, a Computer Engineering student and developer.",
    siteName: "Suleman Kondkari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suleman Kondkari | Developer",
    description: "Building modern, high-performance websites and interactive digital experiences.",
    creator: "@suleman", // Add your twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full font-body">
        {children}
      </body>
    </html>
  );
}
