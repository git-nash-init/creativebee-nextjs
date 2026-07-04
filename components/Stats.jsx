"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Reveal from "./Reveal";

function Counter({ to, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const t0 = performance.now(), dur = 1800;
    let raf;
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(to % 1 ? (to * ease).toFixed(1) : Math.round(to * ease));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <div className="n" ref={ref}>
      {prefix && <span>{prefix}</span>}
      <b>{val}{suffix}</b>
    </div>
  );
}

const stats = [
  { to: 120, prefix: "₹", suffix: " Cr+", label: "Paid out to creators" },
  { to: 25, suffix: "K+", label: "Active creators" },
  { to: 18, suffix: " L+", label: "Happy customers served" },
  { to: 99, suffix: ".9%", label: "Payment success rate" },
];

export default function Stats() {
  return (
    <section className="stats dark">
      <div className="wrap stats-grid">
        {stats.map((s, i) => (
          <Reveal className="stat" key={s.label} delay={i * 0.1}>
            <Counter {...s} />
            <p>{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
