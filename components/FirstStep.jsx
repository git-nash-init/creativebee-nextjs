"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const tiles = [
  ["🆓", "Create a free channel", "#16A34A"],
  ["💎", "Create a paid channel", "#22C55E"],
  ["📣", "Send a broadcast message", "#EF4444"],
  ["🎓", "Launch a course", "#8B5CF6"],
  ["✈️", "Post a Telegram channel", "#06B6D4"],
  ["💬", "Start a WhatsApp community", "#374151"],
];

export default function FirstStep() {
  const ref = useRef(null);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const phoneY = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const phoneR = useTransform(scrollYProgress, [0, 1], [10, 2]);

  const submit = () => { if (email.trim()) setSent(true); };

  return (
    <section className="firststep" ref={ref} id="firststep">
      <div className="wrap">
        <motion.div
          className="fs-notify"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3>Get notified first about everything we do.</h3>
          {sent ? (
            <p className="fs-thanks">🎉 You&apos;re on the list — welcome to the hive!</p>
          ) : (
            <div className="fs-form">
              <input
                type="email" placeholder="Your Email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submit()}
              />
              <button aria-label="Subscribe" onClick={submit}>→</button>
            </div>
          )}
        </motion.div>

        <div className="fs-grid">
          <motion.div
            className="fs-copy"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mini">Download now and start your experience</p>
            <h2>Take your first step<br />towards independence</h2>
            <a href="#pricing" className="btn btn-honey">Get Started <span className="arr">→</span></a>
          </motion.div>

          <div className="fs-phone-zone">
            <motion.div className="fs-phone" style={{ y: phoneY, rotate: phoneR }}>
              <div className="fs-screen">
                <h6>What would you like to create today?</h6>
                <div className="fs-tiles">
                  {tiles.map(([ic, label, bg], i) => (
                    <motion.div
                      className="fs-tile" key={label} style={{ background: bg }}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.09, type: "spring", stiffness: 220, damping: 18 }}
                    >
                      <span className="ti">{ic}</span>
                      <p>{label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
