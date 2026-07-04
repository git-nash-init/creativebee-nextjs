"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const faqs = [
  ["Do I need a website or coding skills to use CreativeBee?",
   "Not at all. CreativeBee gives you a ready-made storefront the moment you sign up. Pick a theme, add your products and share your link — your page is live in under five minutes, no code or designer needed."],
  ["How and when do I receive my money?",
   "Customer payments are collected via UPI, cards, netbanking and wallets. Your earnings are settled directly to your bank account within 24 hours of each transaction, with automatic invoices and GST-ready reports in your dashboard."],
  ["What can I sell on CreativeBee?",
   "Courses, live webinars, digital downloads (e-books, templates, UI kits, code), 1:1 sessions and consultations, paid Telegram/Discord communities, and service packages. You can sell one offer or all of them from a single page."],
  ["Is there really a free plan?",
   "Yes — the Starter plan is free forever with unlimited products. We only take a small percentage when you actually make a sale, so you never pay anything out of pocket to get started."],
  ["Can I use my own domain and branding?",
   "On the Pro plan, you can connect your own custom domain, remove CreativeBee branding, and fully customise colours, fonts and layout to match your personal brand."],
  ["How do paid communities work?",
   "Connect your Telegram or Discord group, set a monthly or yearly price, and CreativeBee handles the rest — members are added automatically after payment and removed if their subscription lapses. No manual tracking ever."],
];

export default function Faq() {
  const [open, setOpen] = useState(-1);
  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <Reveal style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Questions, answered</span>
          <h2 className="sec-title">Frequently asked questions</h2>
        </Reveal>
        <div className="faq-wrap">
          {faqs.map(([q, a], i) => (
            <Reveal className={`faq-item${open === i ? " open" : ""}`} key={q} delay={i * 0.05}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                {q}<span className="pm">+</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    className="faq-a" style={{ maxHeight: "none", overflow: "hidden" }}
                    initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                    transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                  >
                    <p>{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
