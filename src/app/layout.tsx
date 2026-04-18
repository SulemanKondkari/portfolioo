import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suleman Kondkari | Official Website & Portfolio",
  description: "Official portfolio of Suleman Kondkari. A high-performance developer specializing in cinematic web experiences, Next.js, and UX Engineering. Based in Mumbai, coding for the world.",
  keywords: ["Suleman Kondkari", "Suleman Kondkari developer", "Suleman Kondkari portfolio", "Web Developer", "Full Stack Engineer", "React Developer", "Next.js", "Portfolio", "Mumbai", "Frontend Developer", "UX Engineer"],
  authors: [{ name: "Suleman Kondkari", url: "https://kondkarizz.me" }],
  creator: "Suleman Kondkari",
  metadataBase: new URL("https://kondkarizz.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kondkarizz.me",
    title: "Suleman Kondkari | Official Website & Portfolio",
    description: "Cinematic, high-performance web experiences built by Suleman Kondkari, a Computer Engineering student and developer.",
    siteName: "Suleman Kondkari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suleman Kondkari | Official Website & Portfolio",
    description: "Building modern, high-performance websites and interactive digital experiences.",
    creator: "@suleman",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Suleman Kondkari",
              "url": "https://kondkarizz.me",
              "jobTitle": "Full Stack Developer & UX Engineer",
              "alumniOf": {
                "@type": "Organization",
                "name": "Computer Engineering"
              },
              "sameAs": [
                "https://github.com/SulemanKondkari",
                "https://linkedin.com/in/sulemankondkari",
                "https://twitter.com/suleman"
              ],
              "knowsAbout": ["Web Development", "React", "Next.js", "UX Design", "Cinematic Web Design"],
              "description": "Suleman Kondkari is a professional developer specializing in cinematic, high-performance web experiences and UX engineering."
            })
          }}
        />
      </head>
      <body className="min-h-full font-body">
        {children}
      </body>
    </html>
  );
}
