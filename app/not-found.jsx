import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ textAlign: "center", padding: "80px 24px" }}>
      <h1 style={{ fontFamily: "Georgia, serif", fontSize: 64, marginBottom: 12 }}>404</h1>
      <p style={{ color: "#475569", fontSize: 18, marginBottom: 24 }}>
        The scholar or page you were looking for could not be found.
      </p>
      <Link href="/" className="contact-btn">
        Return to directory
      </Link>
    </main>
  );
}
