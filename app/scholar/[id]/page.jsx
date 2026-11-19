import Link from "next/link";
import { notFound } from "next/navigation";
import scholars from "../../../data/scholars";

export function generateStaticParams() {
  return scholars.map((s) => ({ id: s.id }));
}

export function generateMetadata({ params }) {
  const scholar = scholars.find((s) => s.id === params.id);
  if (!scholar) return { title: "Scholar not found" };
  return {
    title: `${scholar.name} — Scholars Web`,
    description: scholar.bio,
  };
}

export default function ScholarPage({ params }) {
  const s = scholars.find((sch) => sch.id === params.id);
  if (!s) notFound();

  return (
    <main>
      <Link href="/" className="back-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to directory
      </Link>

      <article className="detail">
        <div className="detail-head">
          <div className={`avatar ${s.avatarClass}`} style={{ width: 96, height: 96, fontSize: 36 }}>
            {s.initials}
          </div>
          <div style={{ flex: 1 }}>
            <h1>{s.name}</h1>
            <p className="affiliation">
              {s.institution} · {s.country}
            </p>
            <span className="card-field" style={{ display: "inline-block", marginBottom: 12 }}>
              {s.field}
            </span>
            <div>
              <a href={`mailto:${s.email}`} className="contact-btn">
                Contact
              </a>
              {s.website && (
                <a
                  href={s.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginLeft: 12,
                    color: "var(--accent)",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  Personal website →
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="stats">
          <div className="stat-box">
            <div className="stat-num">{s.publications}</div>
            <div className="stat-label">Publications</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">{s.citations.toLocaleString()}</div>
            <div className="stat-label">Citations</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">{s.hIndex}</div>
            <div className="stat-label">h-index</div>
          </div>
        </div>

        <div className="detail-section">
          <h2>About</h2>
          <p>{s.bioLong}</p>
        </div>

        <div className="detail-section">
          <h2>Research Interests</h2>
          <div className="tags">
            {s.interests.map((i) => (
              <span key={i} className="tag" style={{ fontSize: 14, padding: "6px 14px" }}>
                {i}
              </span>
            ))}
          </div>
        </div>

        <div className="detail-section">
          <h2>Selected Publications</h2>
          <ul>
            {s.publications_list.map((p, idx) => (
              <li key={idx}>
                <span className="pub-year">{p.year}.</span> {p.title}. <em>{p.venue}</em>.
              </li>
            ))}
          </ul>
        </div>
      </article>
    </main>
  );
}
