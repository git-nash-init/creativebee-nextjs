"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const steps = [
  ["01", "Create your page", "Sign up free, pick a theme and set up your CreativeBee storefront — no code, no designer, no hassle."],
  ["02", "Add your offers", "Upload courses, digital products, session slots or community plans. Set your price in seconds."],
  ["03", "Share & get paid", "Drop your link in your bio and stories. Payments land via UPI, cards and netbanking — payouts in 24 hours."],
];

export default function Steps() {
  return (
    <section className="steps">
      <div className="wrap">
        <Reveal style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Launch in minutes</span>
          <h2 className="sec-title">From idea to income<br />in three steps</h2>
        </Reveal>
        <div className="steps-grid">
          {steps.map(([n, t, p], i) => (
            <motion.div
              className="step in" key={n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="num">{n}</div>
              <h3>{t}</h3>
              <p>{p}</p>
            </motion.div>
          ))}
        </div>
        <Reveal className="cta-row">
          <a href="#pricing" className="btn btn-honey">Launch my page now <span className="arr">→</span></a>
        </Reveal>
      </div>
    </section>
  );
}
