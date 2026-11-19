import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Scholars Web — Discover Researchers & Academics Worldwide",
  description:
    "A searchable directory of scholars, researchers, and academics across disciplines and institutions worldwide.",
};

export default function RootLayout({ children }) {
  // Support GitHub Pages basePath: Next.js <Link> prefixes automatically when basePath is set,
  // but for plain <a href> in navigation we don't need to add basePath if using Link.
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="inner">
            <Link href="/" style={{ textDecoration: "none" }}>
              <span className="logo">
                <span className="logo-mark">S</span>
                <span>Scholars Web</span>
              </span>
            </Link>
            <nav className="nav">
              <Link href="/">Directory</Link>
              <a href="https://github.com/hamzamoazzam541-oss/scholars-web" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Scholars Web · An open directory of academic researchers.</p>
        </footer>
      </body>
    </html>
  );
}
