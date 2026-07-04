"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const payments = [
  ["PS", "#F08A00", "Priya Sharma", "UPI · React Bootcamp", "+₹4,999"],
  ["VK", "#231152", "Vikram Khanna", "Card · Design Review 1:1", "+₹1,499"],
  ["NM", "#FFB400", "Neha Mehta", "UPI · Template Bundle", "+₹799"],
  ["RJ", "#8B6914", "Rohan Joshi", "Netbanking · Trading Community", "+₹999/mo"],
];
const barHeights = [38, 55, 44, 70, 58, 86, 100];

export default function Splits() {
  return (
    <section className="split" id="features">
      <div className="wrap">
        <div className="split-row">
          <Reveal className="split-media">
            <div className="pay-stack">
              {payments.map(([ini, bg, name, meta, amt], i) => (
                <motion.div
                  className="pay-card" key={name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                >
                  <span className="pi" style={{ background: bg }}>{ini}</span>
                  <span><h6>{name}</h6><p>{meta}</p></span>
                  <span className="amt">{amt}</span>
                </motion.div>
              ))}
            </div>
          </Reveal>
          <Reveal className="split-copy" delay={0.1}>
            <span className="eyebrow">Payments that just work</span>
            <h2 className="sec-title">Collect payments the way India pays</h2>
            <p className="sec-sub">
              UPI, credit &amp; debit cards, netbanking and wallets — all built in. Your customers
              check out in seconds, and your money reaches your bank fast.
            </p>
            <ul className="feat-list">
              {["Payouts to your bank within 24 hours", "Automatic invoices & GST-ready reports",
                "EMI & subscription billing supported", "Zero setup cost — pay only when you earn"].map((t) => (
                <li key={t}><span className="tick">✓</span>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="split-row flip">
          <Reveal className="split-media">
            <div className="dash-mock">
              <div className="dm-top"><h6>Revenue · Last 7 days</h6><span>▲ 32%</span></div>
              <div className="dm-big">₹1,84,250 <small>this week</small></div>
              <div className="bars in">
                {barHeights.map((h, i) => (
                  <motion.i
                    key={i} style={{ "--h": h }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  />
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal className="split-copy" delay={0.1}>
            <span className="eyebrow">Know your numbers</span>
            <h2 className="sec-title">Analytics that grow your business</h2>
            <p className="sec-sub">
              See exactly what&apos;s selling, where your buyers come from and which content
              converts — so you can double down on what works.
            </p>
            <ul className="feat-list">
              {["Real-time sales & traffic dashboard", "Audience insights & top referral sources",
                "Export customer data anytime — it's yours", "Track abandoned checkouts & recover them"].map((t) => (
                <li key={t}><span className="tick">✓</span>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
