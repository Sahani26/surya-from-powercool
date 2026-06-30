import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Electrical Tips & Guides | suryaelectrician",
  description:
    "Read expert electrician blogs, electrical safety tips, wiring guides, and home electrical solutions by professional electricians.",
  keywords: [
    "electrician blog",
    "electrical tips",
    "home wiring guide",
    "electrical safety",
    "electrician in Surat",
  ],
  alternates: {
    canonical: "https://www.suryaelectrician.com/blog",
  },
  robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
  },
},

  openGraph: {
    title: "Electrical Tips & Guides Blog",
    description:
      "Professional electrician blogs with expert advice on electrical safety and home wiring.",
    url: "https://www.suryaelectrician.com/blog",
    siteName: "suryaelectrician",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
