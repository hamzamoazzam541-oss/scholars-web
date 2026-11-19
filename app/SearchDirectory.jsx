"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import scholars, { fields } from "../data/scholars";

function initialsToColorClass(avatarClass) {
  return avatarClass || "";
}

export default function SearchDirectory() {
  const [query, setQuery] = useState("");
  const [activeField, setActiveField] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return scholars.filter((s) => {
      if (activeField !== "All" && s.field !== activeField) return false;
      if (!q) return true;
      return (
        s.name.toLowerCase().includes(q) ||
        s.institution.toLowerCase().includes(q) ||
        s.country.toLowerCase().includes(q) ||
        s.field.toLowerCase().includes(q) ||
        s.bio.toLowerCase().includes(q) ||
        s.interests.some((i) => i.toLowerCase().includes(q))
      );
    });
  }, [query, activeField]);

  return (
    <section>
      <div className="hero">
        <h1>Discover scholars, connect ideas.</h1>
        <p>
          A free, open directory of researchers across disciplines — search by name, field, institution,
          or research interest.
        </p>
      </div>

      <div className="search-wrap">
        <div className="search-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search scholars by name, field, institution, or interest..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search scholars"
          />
          {query && (
            <button
              className="search-btn"
              onClick={() => setQuery("")}
              style={{ background: "#e2e8f0", color: "#475569" }}
              type="button"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="filters" role="tablist" aria-label="Filter by field">
        <button
          className={`filter-chip ${activeField === "All" ? "active" : ""}`}
          onClick={() => setActiveField("All")}
        >
          All fields
        </button>
        {fields.map((f) => (
          <button
            key={f}
            className={`filter-chip ${activeField === f ? "active" : ""}`}
            onClick={() => setActiveField(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="count-banner">
        Showing <strong>{filtered.length}</strong> of <strong>{scholars.length}</strong> scholars
        {activeField !== "All" && <> in <strong>{activeField}</strong></>}
        {query && <> matching “<strong>{query}</strong>”</>}
      </p>

      {filtered.length === 0 ? (
        <div className="empty">
          <div className="empty-icon">🔍</div>
          <p>No scholars match your search. Try different keywords or clear filters.</p>
        </div>
      ) : (
        <div className="grid">
          {filtered.map((s) => (
            <Link key={s.id} href={`/scholar/${s.id}/`} className="card-link">
              <article className="card">
                <div className="card-head">
                  <div className={`avatar ${initialsToColorClass(s.avatarClass)}`}>{s.initials}</div>
                  <div>
                    <div className="card-title">{s.name}</div>
                    <div className="card-sub">
                      {s.institution} · {s.country}
                    </div>
                  </div>
                </div>
                <span className="card-field">{s.field}</span>
                <p className="card-bio">{s.bio}</p>
                <div className="tags">
                  {s.interests.slice(0, 4).map((i) => (
                    <span key={i} className="tag">
                      {i}
                    </span>
                  ))}
                </div>
                <div className="card-meta">
                  <span>
                    <strong>{s.publications}</strong> publications
                  </span>
                  <span>
                    <strong>{s.citations.toLocaleString()}</strong> citations
                  </span>
                  <span>
                    h-index <strong>{s.hIndex}</strong>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
