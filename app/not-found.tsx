import Header from "@/public/components/Header";
import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | suryaelectrician",
  robots: "noindex",
};

export default function NotFound() {
  return (
    <>
    <Header/>
       <section className="error-page">
      <div className="container text-center">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>

        <Link href="/" className="thm-btn">
          Back to Home
        </Link>
      </div>
    </section>
    </>
 
  );
}
