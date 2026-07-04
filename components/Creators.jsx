"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const cells = [
  [
    ["📸", "Instagram Influencers", "Monetise your followers"],
    ["💻", "Software Developers", "Sell code & consults"],
    ["📚", "Educators", "Launch your courses"],
    ["🎥", "Online Trainers", "Host live workshops"],
  ],
  [
    ["📣", "Digital Marketers", "Package your services"],
    null, // gold cell
    ["🎨", "UI/UX Designers", "Sell kits & reviews"],
    ["🧩", "Full Stack Developers", "Bootcamps & mentoring"],
  ],
  [
    ["🎙️", "Coaches & Consultants", "Book paid sessions"],
    ["✍️", "Writers & Bloggers", "Paid newsletters"],
    ["📈", "Finance Experts", "Premium communities"],
  ],
];

export default function Creators() {
  let d = 0;
  return (
    <section className="creators dark" id="creators">
      <div className="wrap">
        <Reveal className="head">
          <span className="eyebrow">Built for every creator</span>
          <h2 className="sec-title">One hive.<br />Every kind of creator.</h2>
          <p className="sec-sub" style={{ margin: "0 auto" }}>
            Whatever you create, teach or build — CreativeBee gives you the tools to turn your
            skills into income.
          </p>
        </Reveal>
        <div className="hive">
          {cells.map((row, r) => (
            <div className={`hive-row${r ? " offset" : ""}`} key={r}>
              {row.map((c, i) => {
                d += 0.06;
                return c === null ? (
                  <motion.div
                    className="hex gold" key={i}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: d, type: "spring", stiffness: 200, damping: 18 }}
                  >
                    <span className="big">25K+</span>
                    <h4>Creators buzzing on CreativeBee</h4>
                  </motion.div>
                ) : (
                  <motion.div
                    className="hex" key={i}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: d, type: "spring", stiffness: 200, damping: 18 }}
                  >
                    <span className="ic">{c[0]}</span>
                    <h4>{c[1]}</h4>
                    <p>{c[2]}</p>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
