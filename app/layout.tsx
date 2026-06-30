import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Electrician in Surat | surya electrician – AC & Electrical Services",
  description:
    "Looking for a trusted electrician in Surat? surya electrician provides expert electrical repairs, AC installation, servicing, and maintenance across all areas of Surat.",
  metadataBase: new URL("https://www.suryaelectrician.com"),
  openGraph: {
    title: "Electrician in Surat | surya electrician",
    description:
      "Trusted electrician and AC services in Surat with fast response, transparent quotes, and experienced technicians.",
    siteName: "surya electrician",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/power.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/power.png" />
        <link rel="manifest" href="/assets/images/favicons/site.webmanifest" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />

        {/* Core CSS */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/custom-animate.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome-all.css" />
        <link rel="stylesheet" href="/assets/css/jarallax.css" />
        <link rel="stylesheet" href="/assets/css/jquery.magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/odometer.min.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/css/twentytwenty.css" />

        {/* Module CSS */}
        <link rel="stylesheet" href="/assets/css/module-css/slider.css" />
        <link rel="stylesheet" href="/assets/css/module-css/footer.css" />
        <link rel="stylesheet" href="/assets/css/module-css/service.css" />
        <link rel="stylesheet" href="/assets/css/module-css/about.css" />
        <link rel="stylesheet" href="/assets/css/module-css/testimonial.css" />
        <link rel="stylesheet" href="/assets/css/module-css/brand.css" />
        <link rel="stylesheet" href="/assets/css/module-css/video.css" />
        <link rel="stylesheet" href="/assets/css/module-css/counter.css" />
        <link rel="stylesheet" href="/assets/css/module-css/project.css" />
        <link rel="stylesheet" href="/assets/css/module-css/pricing.css" />
        <link rel="stylesheet" href="/assets/css/module-css/blog.css" />
        <link rel="stylesheet" href="/assets/css/module-css/cta.css" />
        <link rel="stylesheet" href="/assets/css/module-css/page-header.css" />
        <link rel="stylesheet" href="/assets/css/module-css/team.css" />
        <link rel="stylesheet" href="/assets/css/module-css/contact.css" />
        <link rel="stylesheet" href="/assets/css/module-css/shop.css" />
        <link rel="stylesheet" href="/assets/css/module-css/faq.css" />
        <link rel="stylesheet" href="/assets/css/module-css/coming-soon.css" />
        <link rel="stylesheet" href="/assets/css/module-css/error-page.css" />

        {/* Template Styles */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/mycustom.css" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
