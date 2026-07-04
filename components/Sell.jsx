"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const cards = [
  ["🎓", "Courses & Webinars", "Record once or go live — host drip-fed courses, cohorts and Zoom webinars with automated access.",
    ["Video hosting & certificates", "Live webinar registrations", "Quizzes & assignments"], "For educators & trainers"],
  ["📦", "Digital Products", "E-books, templates, UI kits, code snippets, presets, notion packs — delivered instantly after payment.",
    ["Instant secure downloads", "Discount codes & bundles", "Unlimited products"], "For designers & developers"],
  ["📞", "1:1 Sessions & Services", "Sell consultations, portfolio reviews, mentorship calls and retainer services with built-in scheduling.",
    ["Calendar & reminders", "Video call links auto-sent", "Package & subscription pricing"], "For consultants & coaches"],
  ["👥", "Paid Communities", "Run premium Telegram or Discord groups with automatic member management and recurring billing.",
    ["Auto invite & removal", "Monthly / yearly plans", "Member analytics"], "For influencers & experts"],
  ["🔗", "Link-in-Bio Storefront", "One beautiful page for everything you offer — perfect for your Instagram, YouTube and LinkedIn bio.",
    ["Custom themes & branding", "Your own domain", "Click & conversion tracking"], "For every creator"],
  ["🧲", "Lead Magnets & Funnels", "Capture emails with freebies, nurture your list and upsell paid offers with automated flows.",
    ["Email capture forms", "Automated follow-ups", "Upsell & cross-sell flows"], "For marketers"],
];

export default function Sell() {
  return (
    <section className="sell" id="sell">
      <div className="wrap">
        <div className="head">
          <Reveal>
            <span className="eyebrow">Your audience is ready to pay you</span>
            <h2 className="sec-title">Everything you can<br />sell on CreativeBee</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="#pricing" className="btn btn-dark">Start selling <span className="arr">→</span></a>
          </Reveal>
        </div>
        <div className="sell-grid">
          {cards.map(([ic, title, desc, list, tag], i) => (
            <motion.div
              className="sell-card" key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
            >
              <div className="sell-ic">{ic}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <ul>{list.map((l) => <li key={l}>{l}</li>)}</ul>
              <span className="tagline">{tag}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
