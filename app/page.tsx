// @ts-nocheck
"use client";

import { Marcellus_SC, Quattrocento, Great_Vibes } from "next/font/google";
import content from "../data/content.json";

// /ui-ux-pro-max → French boudoir / Parisian apothecary mood.
const display = Marcellus_SC({ subsets: ["latin"], weight: ["400"] });
const body = Quattrocento({ subsets: ["latin"], weight: ["400", "700"] });
const script = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

// French boudoir palette — dusty rose + burgundy + cream + antique gold (no prior use).
const ROSE = "#C9909C";       // dusty rose primary
const BURGUNDY = "#7C2D12";   // deep burgundy
const CREAM = "#FBF7F4";      // warm cream background
const GOLD = "#B8860B";       // antique gold accent
const INK = "#1C1917";        // warm black
const PAPER = "#F5EFE8";      // softer paper panel
const MIST = "#A8A29E";       // muted stone

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl =
    "https://maps.google.com/maps?output=embed&q=" +
    encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main
      className={body.className}
      style={{ backgroundColor: CREAM, color: INK, minHeight: "100vh" }}
    >
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .fade-up { animation: fadeUp 1s cubic-bezier(.2,.7,.2,1) forwards; }
        .fade-up-d1 { animation: fadeUp 1s cubic-bezier(.2,.7,.2,1) 0.16s forwards; opacity: 0; }
        .fade-up-d2 { animation: fadeUp 1s cubic-bezier(.2,.7,.2,1) 0.32s forwards; opacity: 0; }
        .fade-up-d3 { animation: fadeUp 1s cubic-bezier(.2,.7,.2,1) 0.48s forwards; opacity: 0; }
        .gold-hairline {
          height: 1px;
          background: linear-gradient(90deg, transparent, ${GOLD} 20%, ${GOLD} 80%, transparent);
        }
        .ornate-frame {
          padding: 14px;
          border: 1px solid ${GOLD};
          outline: 1px solid ${GOLD};
          outline-offset: 6px;
        }
      `}</style>

      {/* TOP RIBBON — burgundy on cream */}
      <div style={{ backgroundColor: BURGUNDY, color: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex flex-wrap items-center justify-between gap-2" style={{ fontSize: 11, letterSpacing: "0.22em" }}>
          <span className={display.className}>EST · LAKE FOREST · CA</span>
          <span className={display.className} style={{ color: GOLD }}>★ 4.6 · 58 REVIEWS</span>
          <span className={display.className}>HAIR · NAILS · SPA</span>
        </div>
      </div>

      {/* NAV — centered ornate */}
      <nav style={{ backgroundColor: CREAM, borderBottom: `1px solid ${GOLD}` }}>
        <div className="max-w-7xl mx-auto px-6 py-7 text-center relative">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-7" style={{ fontSize: 12, letterSpacing: "0.2em" }}>
            <a href="#salon" className={display.className} style={{ color: BURGUNDY }}>LE SALON</a>
            <a href="#carte" className={display.className} style={{ color: BURGUNDY }}>LA CARTE</a>
          </div>
          <div>
            <p
              className={script.className}
              style={{ fontSize: 28, color: GOLD, lineHeight: 1, marginBottom: 4 }}
            >
              maison
            </p>
            <p
              className={display.className}
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: INK,
                letterSpacing: "0.12em",
                lineHeight: 1,
              }}
            >
              ANGEL <span style={{ color: BURGUNDY }}>·</span> HAIR &amp; NAILS
            </p>
          </div>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-7" style={{ fontSize: 12, letterSpacing: "0.2em" }}>
            <a href="#visit" className={display.className} style={{ color: BURGUNDY }}>VISITEZ</a>
            <a
              href={phoneTel}
              className={display.className}
              style={{
                backgroundColor: BURGUNDY,
                color: CREAM,
                padding: "10px 18px",
                letterSpacing: "0.2em",
              }}
            >
              RÉSERVER
            </a>
          </div>
        </div>
      </nav>

      {/* HERO — centered editorial, ornate-framed photo above headline */}
      <section className="max-w-5xl mx-auto px-6 pt-20 md:pt-28 pb-24 md:pb-32 text-center">
        <p
          className={`${script.className} fade-up`}
          style={{
            fontSize: 36,
            color: GOLD,
            lineHeight: 1,
            marginBottom: 18,
          }}
        >
          welcome —
        </p>
        <h1
          className={`${display.className} fade-up`}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: BURGUNDY,
            lineHeight: 1.05,
            letterSpacing: "0.02em",
            marginBottom: 28,
          }}
        >
          A LITTLE SALON.<br />
          A LOT OF CARE.
        </h1>
        <div className="gold-hairline mx-auto fade-up-d1" style={{ width: 220, marginTop: 16, marginBottom: 20 }} />
        <p
          className="fade-up-d1 mx-auto"
          style={{
            color: INK,
            fontSize: "1.1rem",
            lineHeight: 1.75,
            maxWidth: "52ch",
            fontStyle: "italic",
          }}
        >
          {content.hero.subheading}
        </p>

        <div className="fade-up-d2 mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href={content.hero.ctaLink}
            className={display.className}
            style={{
              backgroundColor: BURGUNDY,
              color: CREAM,
              padding: "18px 36px",
              fontSize: 13,
              letterSpacing: "0.28em",
            }}
          >
            {content.hero.ctaText.toUpperCase()}
          </a>
          <a
            href="#carte"
            className={display.className}
            style={{
              color: BURGUNDY,
              fontSize: 12,
              letterSpacing: "0.28em",
              borderBottom: `1px solid ${GOLD}`,
              paddingBottom: 4,
            }}
          >
            ↓ VOIR LA CARTE
          </a>
        </div>

        <div className="ornate-frame mx-auto fade-up-d2 mt-16" style={{ maxWidth: 620 }}>
          <div
            style={{
              aspectRatio: "5/4",
              backgroundImage: `url("${content.hero.image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "saturate(0.85) sepia(0.08)",
            }}
          />
        </div>
        <p
          className={`${script.className} fade-up-d3 mt-6`}
          style={{ fontSize: 28, color: GOLD, lineHeight: 1 }}
        >
          — chez nous, à Lake Forest
        </p>
      </section>

      {/* SALON — about, soft three-column with center serif copy */}
      <section
        id="salon"
        style={{ backgroundColor: PAPER, borderTop: `1px solid ${GOLD}`, borderBottom: `1px solid ${GOLD}` }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <p
              className={script.className}
              style={{ fontSize: 32, color: GOLD, lineHeight: 1 }}
            >
              le salon
            </p>
            <h2
              className={display.className}
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: BURGUNDY,
                lineHeight: 1.05,
                letterSpacing: "0.04em",
                marginTop: 8,
              }}
            >
              {content.about.heading.toUpperCase()}
            </h2>
            <div className="gold-hairline mx-auto mt-6" style={{ width: 160 }} />
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-center" style={{ fontSize: "1.075rem", lineHeight: 1.85, color: INK }}>
            {content.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-10 text-center">
            {content.principles.map((p, i) => (
              <div key={i}>
                <p
                  className={display.className}
                  style={{
                    fontSize: 16,
                    color: GOLD,
                    letterSpacing: "0.32em",
                    marginBottom: 12,
                  }}
                >
                  · {String(i + 1).padStart(2, "0")} ·
                </p>
                <h3
                  className={display.className}
                  style={{
                    fontSize: 22,
                    color: BURGUNDY,
                    letterSpacing: "0.06em",
                    lineHeight: 1.15,
                  }}
                >
                  {p.title.toUpperCase()}
                </h3>
                <p style={{ marginTop: 12, color: INK, fontSize: "0.95rem", lineHeight: 1.65, fontStyle: "italic" }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARTE — services as French menu */}
      <section id="carte" className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-12">
          <p
            className={script.className}
            style={{ fontSize: 36, color: GOLD, lineHeight: 1 }}
          >
            la carte
          </p>
          <h2
            className={display.className}
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: BURGUNDY,
              lineHeight: 1.05,
              letterSpacing: "0.04em",
              marginTop: 8,
            }}
          >
            SERVICES &amp; SOINS
          </h2>
          <div className="gold-hairline mx-auto mt-6" style={{ width: 160 }} />
        </div>

        <ul>
          {content.services.map((s, i) => (
            <li
              key={i}
              className="grid grid-cols-12 gap-3 py-7"
              style={{
                borderBottom: `1px solid rgba(184,134,11,0.35)`,
              }}
            >
              <div className="col-span-12 md:col-span-9">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span
                    className={display.className}
                    style={{
                      fontSize: 13,
                      color: GOLD,
                      letterSpacing: "0.28em",
                    }}
                  >
                    · {String(i + 1).padStart(2, "0")} ·
                  </span>
                  <h3
                    className={display.className}
                    style={{
                      fontSize: "1.45rem",
                      color: BURGUNDY,
                      letterSpacing: "0.04em",
                      lineHeight: 1.15,
                    }}
                  >
                    {s.title.toUpperCase()}
                  </h3>
                </div>
                <p className="mt-3" style={{ color: INK, fontSize: "0.95rem", lineHeight: 1.65, maxWidth: "52ch", fontStyle: "italic" }}>
                  {s.description}
                </p>
              </div>
              <div className="col-span-12 md:col-span-3 md:text-right flex md:justify-end md:items-baseline">
                <span
                  className={display.className}
                  style={{
                    fontSize: "1.35rem",
                    color: BURGUNDY,
                    letterSpacing: "0.04em",
                  }}
                >
                  {s.price}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p
          className={`${script.className} text-center mt-10`}
          style={{ fontSize: 26, color: GOLD, lineHeight: 1 }}
        >
          — appointments preferred, walk-ins welcomed
        </p>
      </section>

      {/* VOICES — three-column elegant testimonials on rose */}
      <section style={{ backgroundColor: ROSE, color: INK }}>
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-14">
            <p
              className={script.className}
              style={{ fontSize: 32, color: CREAM, lineHeight: 1 }}
            >
              témoignages
            </p>
            <h2
              className={display.className}
              style={{
                fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)",
                color: CREAM,
                lineHeight: 1.05,
                letterSpacing: "0.04em",
                marginTop: 8,
              }}
            >
              ELLES NOUS REVIENNENT.
            </h2>
            <div className="mx-auto mt-6" style={{ width: 160, height: 1, background: CREAM, opacity: 0.5 }} />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {content.reviews.map((r, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: CREAM,
                  padding: "32px 28px",
                  border: `1px solid ${GOLD}`,
                  position: "relative",
                }}
              >
                <span
                  aria-hidden
                  className={display.className}
                  style={{
                    position: "absolute",
                    top: -20,
                    left: 24,
                    backgroundColor: BURGUNDY,
                    color: CREAM,
                    padding: "4px 12px",
                    fontSize: 11,
                    letterSpacing: "0.28em",
                  }}
                >
                  N° {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mb-4" style={{ color: GOLD, letterSpacing: "0.12em" }}>
                  {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
                </div>
                <p style={{ fontSize: "1.0rem", lineHeight: 1.7, color: INK, fontStyle: "italic" }}>
                  "{r.text}"
                </p>
                <div className="mt-6" style={{ borderTop: `1px solid ${GOLD}`, paddingTop: 14 }}>
                  <p
                    className={display.className}
                    style={{
                      fontSize: 14,
                      color: BURGUNDY,
                      letterSpacing: "0.2em",
                    }}
                  >
                    — {r.name.toUpperCase()}
                  </p>
                  <p
                    className={script.className}
                    style={{ fontSize: 20, color: GOLD, lineHeight: 1, marginTop: 4 }}
                  >
                    {r.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT — cream block with map and ornate hours */}
      <section id="visit" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-14">
          <p
            className={script.className}
            style={{ fontSize: 32, color: GOLD, lineHeight: 1 }}
          >
            visitez
          </p>
          <h2
            className={display.className}
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: BURGUNDY,
              lineHeight: 1.05,
              letterSpacing: "0.04em",
              marginTop: 8,
            }}
          >
            VENEZ NOUS VOIR.
          </h2>
          <div className="gold-hairline mx-auto mt-6" style={{ width: 160 }} />
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <p
              className={display.className}
              style={{
                fontSize: 13,
                color: GOLD,
                letterSpacing: "0.32em",
                marginBottom: 8,
              }}
            >
              · ADRESSE ·
            </p>
            <p
              className={display.className}
              style={{ fontSize: "1.35rem", color: BURGUNDY, letterSpacing: "0.04em", lineHeight: 1.4 }}
            >
              {content.contact.address.split(",")[0].toUpperCase()}
            </p>
            <p style={{ fontSize: 14, color: MIST, marginTop: 4, fontStyle: "italic" }}>
              {content.contact.address.split(",").slice(1).join(",").trim()}
            </p>

            <p
              className={display.className}
              style={{
                fontSize: 13,
                color: GOLD,
                letterSpacing: "0.32em",
                marginTop: 36,
                marginBottom: 16,
              }}
            >
              · HORAIRES ·
            </p>
            <table style={{ width: "100%", fontSize: 14 }}>
              <tbody>
                {Object.entries(content.contact.hours).map(([day, time]) => {
                  const closed = String(time).toLowerCase().includes("closed");
                  return (
                    <tr key={day} style={{ borderBottom: `1px solid rgba(184,134,11,0.30)` }}>
                      <td
                        className={display.className}
                        style={{ padding: "12px 0", color: BURGUNDY, letterSpacing: "0.16em" }}
                      >
                        {day.slice(0, 3).toUpperCase()}
                      </td>
                      <td className="text-right" style={{ padding: "12px 0", color: closed ? MIST : INK, fontStyle: closed ? "italic" : "normal", fontSize: 13 }}>
                        {String(time)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <a
              href={phoneTel}
              className={`${display.className} block mt-10`}
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: BURGUNDY,
                letterSpacing: "0.06em",
              }}
            >
              {content.contact.phone}
            </a>
            <p
              className={script.className}
              style={{ fontSize: 22, color: GOLD, lineHeight: 1, marginTop: 6 }}
            >
              — pour réserver, appelez-nous
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="ornate-frame">
              <div style={{ minHeight: 440, backgroundColor: PAPER }}>
                <iframe
                  title="Location"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  style={{ border: 0, minHeight: 440, display: "block", filter: "sepia(0.15) saturate(0.85)" }}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapUrl}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING — burgundy full-bleed with script + small-caps */}
      <section style={{ backgroundColor: BURGUNDY, color: CREAM }}>
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
          <p
            className={script.className}
            style={{ fontSize: 38, color: GOLD, lineHeight: 1 }}
          >
            à bientôt —
          </p>
          <h3
            className={display.className}
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              color: CREAM,
              lineHeight: 1.05,
              letterSpacing: "0.04em",
              marginTop: 14,
            }}
          >
            BOOK YOUR CHAIR.
          </h3>
          <div className="mx-auto mt-7" style={{ width: 160, height: 1, background: GOLD }} />
          <a
            href={phoneTel}
            className={display.className}
            style={{
              display: "inline-block",
              marginTop: 32,
              backgroundColor: GOLD,
              color: BURGUNDY,
              padding: "20px 36px",
              fontSize: 13,
              letterSpacing: "0.32em",
            }}
          >
            CALL {content.contact.phone}
          </a>
        </div>
      </section>

      {/* FOOTER — cream with rose accents */}
      <footer style={{ backgroundColor: CREAM, color: INK }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6 items-start mb-8">
            <div>
              <p
                className={script.className}
                style={{ fontSize: 26, color: GOLD, lineHeight: 1 }}
              >
                maison
              </p>
              <p
                className={display.className}
                style={{
                  fontSize: 18,
                  color: INK,
                  letterSpacing: "0.12em",
                  lineHeight: 1.1,
                  marginTop: 4,
                }}
              >
                ANGEL <span style={{ color: BURGUNDY }}>·</span> HAIR &amp; NAILS
              </p>
              <p
                className={script.className}
                style={{ fontSize: 20, color: GOLD, marginTop: 4 }}
              >
                Lake Forest · California
              </p>
            </div>
            <div style={{ fontSize: 13, color: INK }}>
              <p>{content.contact.address}</p>
              <p className="mt-2">{content.contact.phone}</p>
            </div>
            <div className={display.className} style={{ fontSize: 12, letterSpacing: "0.28em", color: BURGUNDY }}>
              <p style={{ marginBottom: 8 }}>· OUVERT ·</p>
              <p>TUE — SAT</p>
              <p>9 AM — 7 PM</p>
            </div>
          </div>
          <div className="gold-hairline" style={{ marginTop: 24 }} />
          <p
            className={display.className}
            style={{
              fontSize: 11,
              letterSpacing: "0.32em",
              color: MIST,
              marginTop: 18,
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} ANGEL HAIR &amp; NAILS · LAKE FOREST · CALIFORNIA · TOUS DROITS RÉSERVÉS
          </p>
        </div>
      </footer>
    </main>
  );
}
