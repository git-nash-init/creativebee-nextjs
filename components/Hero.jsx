"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion, AnimatePresence, useScroll, useTransform, useSpring,
} from "framer-motion";

const WORDS = ["Courses", "Products", "Services", "Webinars", "Software", "API", "Mentorship", "Community"];

// longer words would otherwise wrap "Sell your {word}" onto its own line —
// scale them down just enough to keep the whole phrase on one line
function scaleFor(word) {
  if (word.length >= 10) return 0.76;
  if (word.length === 9) return 0.8;
  return 1;
}

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="rot-wrap" style={{ "--rot-scale": scaleFor(WORDS[i]) }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[i]}
          className="rot"
          initial={{ opacity: 0, y: 26, rotateX: -70, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -26, rotateX: 70, filter: "blur(4px)" }}
          transition={{ duration: 0.42 }}
          style={{ display: "inline-block" }}
        >
          {WORDS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const pinRef = useRef(null);
  const stageRef = useRef(null);
  const phoneWrapRef = useRef(null);
  const [dx, setDx] = useState(0);
  const [isStatic, setIsStatic] = useState(false);

  // Cosmofeed-style scroll progress → CSS vars (smoothed with springs)
  const { scrollYProgress } = useScroll({ target: pinRef, offset: ["start start", "end end"] });
  const spr = { stiffness: 120, damping: 26, mass: 0.4 };
  const pw = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, 1]), spr);
  const pc = useSpring(useTransform(scrollYProgress, [0.34, 0.74], [0, 1]), spr);
  const pf = useSpring(useTransform(scrollYProgress, [0.72, 0.98], [0, 1]), spr);

  useEffect(() => {
    const check = () =>
      setIsStatic(
        matchMedia("(max-width:820px)").matches ||
        matchMedia("(prefers-reduced-motion:reduce)").matches
      );
    const measure = () => {
      check();
      const stage = stageRef.current, wrap = phoneWrapRef.current;
      if (!stage || !wrap) return;
      let l = 0, n = wrap;
      while (n && n !== stage) { l += n.offsetLeft; n = n.offsetParent; }
      setDx(stage.clientWidth / 2 - (l + wrap.offsetWidth / 2));
    };
    measure();
    addEventListener("resize", measure);
    return () => removeEventListener("resize", measure);
  }, []);

  const stageStyle = isStatic
    ? undefined
    : { "--pw": pw, "--pc": pc, "--pf": pf, "--dx": `${dx}px` };

  return (
    <header className="hero" ref={pinRef}>
      <motion.div className="hero-stage" ref={stageRef} style={stageStyle}>
        <div className="aurora a1" /><div className="aurora a2" /><div className="aurora a3" />
        <div className="hue-wash" />
        <div className="giant-words" aria-hidden="true">
          <span className="gw gw-l">create</span>
          <span className="gw gw-r">earn</span>
        </div>
        <div className="bee">🐝</div>

        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>
              Sell your <RotatingWord />
              <br />&amp; get paid for what
              <br />you{" "}
              <span className="underline">
                create
                <svg viewBox="0 0 200 14" preserveAspectRatio="none">
                  <path d="M3 10 C 60 2, 140 2, 197 9" />
                </svg>
              </span>
            </h1>
            <p className="hero-sub">
              CreativeBee is the all-in-one platform where influencers, developers, educators,
              designers and marketers launch their store, sell to their audience and collect
              payments — all from one buzzing link.
            </p>
            <div className="hero-cta">
              <a href="#pricing" className="btn btn-honey">Create your page free <span className="arr">→</span></a>
              <a href="#sell" className="btn btn-ghost">See how it works</a>
            </div>
            <p className="hero-note">
              <span className="dot"></span> No coding needed · Launch in under 5 minutes · UPI, cards &amp; netbanking
            </p>
            <div className="hero-avatars">
              <div className="stack">
                <span className="av" style={{ background: "#FFD466" }}>AR</span>
                <span className="av" style={{ background: "#FFB400" }}>PS</span>
                <span className="av" style={{ background: "#F08A00" }}>VK</span>
                <span className="av" style={{ background: "#FFE2A6" }}>NM</span>
                <span className="av" style={{ background: "#FFC94D" }}>+</span>
              </div>
              <p><b>25,000+ creators</b> earn on CreativeBee every month</p>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-glow" />
            <div className="phone-wrap" ref={phoneWrapRef}>
              <div className="phone">
                <div className="phone-screen">
                  <div className="pp-canvas">
                  <div className="pp-head" />
                  <div className="pp-av">CB</div>
                  <h4 className="pp-name">CreativeBee</h4>
                  <p className="pp-tag">Full Stack Developer · Educator</p>
                  <div className="pp-stats">
                    <span><b>12.4K</b>Students</span>
                    <span><b>4.9★</b>Rating</span>
                    <span><b>38</b>Products</span>
                  </div>
                  <div className="pp-item">
                    <span className="pp-ic" style={{ background: "#FFF0CC" }}>🎓</span>
                    <span><h5>React Mastery Bootcamp</h5><p>6-week live cohort</p></span>
                    <span className="pr">₹4,999</span>
                  </div>
                  <div className="pp-item">
                    <span className="pp-ic" style={{ background: "#E8F6EC" }}>📞</span>
                    <span><h5>1:1 Career Mentorship</h5><p>45 min video call</p></span>
                    <span className="pr">₹1,499</span>
                  </div>
                  <div className="pp-item">
                    <span className="pp-ic" style={{ background: "#EFECFF" }}>📦</span>
                    <span><h5>UI Kit + Templates</h5><p>Instant download</p></span>
                    <span className="pr">₹799</span>
                  </div>
                  </div>
                </div>
                <img src="/iphone-frame.png" alt="" className="phone-frame" aria-hidden="true" />
              </div>
            </div>
            <div className="float-card fc1">
              <span className="fi" style={{ background: "#E8F6EC" }}>💰</span>
              <span><h6>Payment received</h6><p><b>₹4,999</b> · React Bootcamp</p></span>
            </div>
            <div className="float-card fc2">
              <span className="fi" style={{ background: "#FFF0CC" }}>🔥</span>
              <span><h6>New enrolment</h6><p>Priya joined your webinar</p></span>
            </div>
            <div className="float-card fc3">
              <span className="fi" style={{ background: "#EFECFF" }}>⭐</span>
              <span><h6>5-star review</h6><p>&quot;Best mentor ever!&quot;</p></span>
            </div>
          </div>
        </div>
        <div className="scroll-hint">Scroll<span></span></div>
      </motion.div>
    </header>
  );
}
