import Icon from "@/components/ui/icon";

const PORTRAIT_URL =
  "https://cdn.poehali.dev/projects/c0b41aa4-7d3c-427b-b208-acecaa84948f/files/926dc6fb-34b6-48eb-9c40-e799e3257912.jpg";

const UnderlinedTerm = ({ children }: { children: React.ReactNode }) => (
  <span className="underline decoration-[#8B1A1A] decoration-2 font-semibold">
    {children}
  </span>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-[#d4c9a8] flex items-center justify-center p-6 font-serif">
      {/* A4 page */}
      <div
        className="bg-[#f5f0e4] relative"
        style={{
          width: "210mm",
          minHeight: "297mm",
          boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
          border: "1px solid #b5a882",
        }}
      >
        {/* Outer decorative border */}
        <div
          className="absolute inset-3 pointer-events-none"
          style={{ border: "2px solid #8B1A1A" }}
        />
        <div
          className="absolute inset-4 pointer-events-none"
          style={{ border: "1px solid #8B1A1A", opacity: 0.4 }}
        />

        {/* Corner ornaments */}
        {["top-2 left-2", "top-2 right-2", "bottom-2 left-2", "bottom-2 right-2"].map(
          (pos, i) => (
            <div
              key={i}
              className={`absolute ${pos} w-8 h-8 pointer-events-none`}
              style={{
                backgroundImage:
                  "radial-gradient(circle, #8B1A1A 1.5px, transparent 1.5px)",
                backgroundSize: "6px 6px",
                opacity: 0.6,
              }}
            />
          )
        )}

        {/* Content */}
        <div className="relative z-10 px-12 py-10">
          {/* Journal header bar */}
          <div
            className="flex items-center justify-between mb-1 pb-1 text-[10px] tracking-widest uppercase text-[#8B1A1A]"
            style={{ borderBottom: "1px solid #8B1A1A" }}
          >
            <span>Scientific Journal of Notable Discoverers</span>
            <span>Vol. XII · Issue 4 · 1888</span>
          </div>

          {/* Title */}
          <div className="text-center mt-5 mb-2">
            <div
              className="text-[9px] tracking-[0.35em] uppercase text-[#8B1A1A] mb-2"
            >
              ✦ &nbsp; Pioneer of Mathematics &nbsp; ✦
            </div>
            <h1
              className="text-[2.6rem] font-bold tracking-wide text-[#1a1208]"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "0.04em" }}
            >
              Sofia Kovalevskaya
            </h1>
            <div className="text-[11px] tracking-[0.2em] text-[#5a4a2a] mt-1 uppercase">
              1850 – 1891 &nbsp;·&nbsp; Mathematician &nbsp;·&nbsp; Author &nbsp;·&nbsp; Professor
            </div>
          </div>

          {/* Divider rule */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-[#8B1A1A]" />
            <svg width="18" height="18" viewBox="0 0 18 18" fill="#8B1A1A">
              <polygon points="9,1 11,7 17,7 12,11 14,17 9,13 4,17 6,11 1,7 7,7" />
            </svg>
            <div className="flex-1 h-px bg-[#8B1A1A]" />
          </div>

          {/* Main two-column layout */}
          <div className="flex gap-6">
            {/* Left column — portrait + data table */}
            <div className="flex-shrink-0" style={{ width: "155px" }}>
              {/* Portrait */}
              <div
                className="mb-3"
                style={{
                  border: "3px solid #8B1A1A",
                  padding: "4px",
                  background: "#ede8d8",
                }}
              >
                <img
                  src={PORTRAIT_URL}
                  alt="Sofia Kovalevskaya"
                  className="w-full"
                  style={{ display: "block", filter: "sepia(0.3) contrast(1.1)" }}
                />
                <div className="text-center text-[8px] mt-1 text-[#5a4a2a] italic tracking-wide">
                  Fig. 1 — Portrait, c. 1880
                </div>
              </div>

              {/* Data table */}
              <div
                style={{
                  border: "1px solid #8B1A1A",
                  fontSize: "9px",
                  background: "#ede8d8",
                }}
              >
                <div
                  className="text-center py-1 text-[9px] tracking-widest uppercase font-bold text-[#f5f0e4]"
                  style={{ background: "#8B1A1A" }}
                >
                  Biographical Data
                </div>
                {[
                  ["Born", "15 Jan 1850"],
                  ["Birthplace", "Moscow, Russia"],
                  ["Died", "10 Feb 1891"],
                  ["Nationality", "Russian"],
                  ["Field", "Mathematics"],
                  ["Degree", "PhD, 1874"],
                  ["Institution", "Univ. of Stockholm"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between px-2 py-[3px] text-[#1a1208]"
                    style={{ borderBottom: "1px solid #c9b882" }}
                  >
                    <span className="font-bold text-[#8B1A1A]">{k}</span>
                    <span className="text-right">{v}</span>
                  </div>
                ))}
              </div>

              {/* Formula box */}
              <div
                className="mt-3 p-2 text-center"
                style={{ border: "1px dashed #8B1A1A", background: "#ede8d8" }}
              >
                <div className="text-[8px] uppercase tracking-widest text-[#8B1A1A] mb-1">
                  Cauchy–Kovalevskaya Thm
                </div>
                <div
                  className="text-[11px] font-bold text-[#1a1208]"
                  style={{ fontFamily: "monospace" }}
                >
                  ∂ₜu = F(x, t, u, ∂ₓu)
                </div>
                <div className="text-[8px] text-[#5a4a2a] mt-1 italic">
                  existence & uniqueness of<br />analytic PDE solutions
                </div>
              </div>
            </div>

            {/* Right column — text */}
            <div className="flex-1 text-[11.5px] leading-relaxed text-[#1a1208]">
              {/* Biography section */}
              <div className="mb-4">
                <div
                  className="flex items-center gap-2 mb-2"
                  style={{ borderBottom: "1px solid #8B1A1A" }}
                >
                  <Icon name="BookOpen" size={12} className="text-[#8B1A1A]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8B1A1A]">
                    Biographical Notes
                  </span>
                </div>
                <p className="text-justify mb-2">
                  Sofia Vasilyevna Kovalevskaya was a pioneering Russian{" "}
                  <UnderlinedTerm>mathematician</UnderlinedTerm> and writer, celebrated as
                  the first woman to obtain a{" "}
                  <UnderlinedTerm>doctorate</UnderlinedTerm> in mathematics in Europe.
                  Born in Moscow in 1850, she showed an extraordinary{" "}
                  <UnderlinedTerm>genius</UnderlinedTerm> for numbers from childhood,
                  reportedly covering her nursery walls with pages of calculus lecture
                  notes.
                </p>
                <p className="text-justify mb-2">
                  Barred from universities in Russia due to her gender, she contracted
                  a marriage of convenience to travel abroad, eventually studying under
                  the great <UnderlinedTerm>scientist</UnderlinedTerm> Karl Weierstrass
                  in Berlin. Her intellectual perseverance led the University of
                  Göttingen to award her a PhD <em>summa cum laude</em> in 1874 —
                  without her ever attending a lecture in person.
                </p>
                <p className="text-justify">
                  In 1889 she became the first woman appointed full{" "}
                  <UnderlinedTerm>professor</UnderlinedTerm> at a European university,
                  holding the chair of mathematics at Stockholm University. She was
                  also a gifted author and advocate for women's rights in{" "}
                  <UnderlinedTerm>science</UnderlinedTerm>.
                </p>
              </div>

              {/* Discovery section */}
              <div className="mb-4">
                <div
                  className="flex items-center gap-2 mb-2"
                  style={{ borderBottom: "1px solid #8B1A1A" }}
                >
                  <Icon name="FlaskConical" size={12} className="text-[#8B1A1A]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8B1A1A]">
                    Principal Discovery
                  </span>
                </div>
                <p className="text-justify mb-2">
                  Kovalevskaya's greatest{" "}
                  <UnderlinedTerm>invention</UnderlinedTerm> was her rigorous proof of
                  the Cauchy–Kovalevskaya Theorem — a landmark result in the theory
                  of partial differential equations. The theorem guarantees the
                  existence and uniqueness of analytic solutions to a broad class of
                  PDEs, underpinning modern mathematical physics and{" "}
                  <UnderlinedTerm>discovery</UnderlinedTerm> across fluid dynamics,
                  electromagnetism and quantum mechanics.
                </p>
                <p className="text-justify">
                  She also solved the classical problem of the rotation of a rigid
                  body about a fixed point — the so-called "Kovalevskaya top" —
                  winning the prestigious Prix Bordin of the French Academy of
                  Sciences in 1888, with the jury doubling the prize in recognition
                  of the exceptional quality of her work.
                </p>
              </div>

              {/* Timeline strip */}
              <div
                className="mt-2 p-2"
                style={{ border: "1px solid #8B1A1A", background: "#ede8d8" }}
              >
                <div className="text-[8px] uppercase tracking-widest text-[#8B1A1A] font-bold mb-2 text-center">
                  Chronology of Key Achievements
                </div>
                <div className="flex justify-between items-start">
                  {[
                    { year: "1874", event: "PhD Göttingen\nsumma cum laude" },
                    { year: "1884", event: "Lecturer\nStockholm Univ." },
                    { year: "1888", event: "Prix Bordin\nFrench Academy" },
                    { year: "1889", event: "Full Professor\n(first woman)" },
                  ].map(({ year, event }, i, arr) => (
                    <div key={year} className="flex items-start flex-1">
                      <div className="flex flex-col items-center flex-1">
                        <div
                          className="text-[9px] font-bold text-[#f5f0e4] px-2 py-[2px]"
                          style={{ background: "#8B1A1A", whiteSpace: "nowrap" }}
                        >
                          {year}
                        </div>
                        <div className="w-px bg-[#8B1A1A] h-2 mx-auto" />
                        <div className="text-[8px] text-center text-[#1a1208] leading-tight whitespace-pre-line">
                          {event}
                        </div>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="flex-shrink-0 mt-[5px] mx-1">
                          <div className="text-[#8B1A1A] text-[10px]">→</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom divider */}
          <div className="flex items-center gap-3 mt-6">
            <div className="flex-1 h-px bg-[#8B1A1A]" />
            <span className="text-[9px] tracking-widest uppercase text-[#8B1A1A]">
              ✦ &nbsp; End of Record &nbsp; ✦
            </span>
            <div className="flex-1 h-px bg-[#8B1A1A]" />
          </div>

          {/* Footer */}
          <div className="flex justify-between mt-2 text-[8px] text-[#8B1A1A] tracking-wide uppercase">
            <span>Scientific Journal of Notable Discoverers</span>
            <span>Page 1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
