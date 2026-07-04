"use client";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const slides = [
  [
    { q: "I moved my entire Instagram audience to CreativeBee and launched a styling masterclass. Crossed my first ₹10 lakh in 4 months — from one link in my bio.",
      av: "AK", bg: "#FFD466", name: "Ananya Kapoor", role: "Instagram Influencer · 480K followers", earn: "₹10L+", sub: "in 4 months" },
    { q: "As a full stack dev, I sell my bootcamp, code templates and 1:1 mentorship in one place. The instant payouts and clean dashboard keep me focused on teaching, not admin.",
      av: "AR", bg: "#FFB400", name: "Aarav Rathi", role: "Full Stack Developer & Educator", earn: "₹26L+", sub: "total earnings" },
  ],
  [
    { q: "My free 2-week stock market workshop fills up through CreativeBee's webinar pages, and paid follow-on courses convert automatically. The funnel practically runs itself.",
      av: "MJ", bg: "#F08A00", name: "Meera Jain", role: "Finance Educator & Trainer", earn: "3,200+", sub: "students enrolled" },
    { q: "I package landing page audits, ad management retainers and a marketing community — all billed on autopilot. Recurring revenue finally feels effortless.",
      av: "DS", bg: "#FFE2A6", name: "Dev Sharma", role: "Digital Marketing Consultant", earn: "₹1.2L", sub: "per month recurring" },
  ],
  [
    { q: "My UI kits and Figma templates sell while I sleep. Instant delivery, discount codes for launches, and buyers love the checkout — it feels premium.",
      av: "IP", bg: "#FFC94D", name: "Ishita Patel", role: "UI/UX Designer", earn: "2,800+", sub: "kits sold" },
    { q: "Moved my coding community from spreadsheets and manual invites to CreativeBee. Members get added to Telegram automatically the second they pay. Game changer.",
      av: "SN", bg: "#FFF0CC", name: "Sahil Nair", role: "Software Developer & Mentor", earn: "1,100+", sub: "paying members" },
  ],
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const n = slides.length;
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % n), 5500);
    return () => clearInterval(t);
  }, [n]);
  const go = (v) => setI(((v % n) + n) % n);

  return (
    <section className="testi dark" id="stories">
      <div className="wrap">
        <Reveal className="head">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Creator stories</span>
          <h2 className="sec-title">Creators are buzzing<br />about CreativeBee</h2>
        </Reveal>
        <Reveal className="t-viewport" delay={0.1}>
          <div className="t-track" style={{ transform: `translateX(-${i * 100}%)` }}>
            {slides.map((pair, si) => (
              <div className="t-slide" key={si}>
                {pair.map((t) => (
                  <div className="t-card" key={t.name}>
                    <div className="quote-mark">&quot;</div>
                    <blockquote>{t.q}</blockquote>
                    <div className="t-who">
                      <span className="tav" style={{ background: t.bg }}>{t.av}</span>
                      <span><h5>{t.name}</h5><p>{t.role}</p></span>
                      <span className="earn"><b>{t.earn}</b><span>{t.sub}</span></span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="t-nav" delay={0.2}>
          <button className="t-btn" aria-label="Previous" onClick={() => go(i - 1)}>←</button>
          <div className="t-dots">
            {slides.map((_, di) => (
              <span key={di} className={`t-dot${di === i ? " on" : ""}`} onClick={() => go(di)} style={{ cursor: "pointer" }} />
            ))}
          </div>
          <button className="t-btn" aria-label="Next" onClick={() => go(i + 1)}>→</button>
        </Reveal>
      </div>
    </section>
  );
}
