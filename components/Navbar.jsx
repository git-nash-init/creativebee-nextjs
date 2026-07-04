"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  ["#creators", "Creators"],
  ["#sell", "What you can sell"],
  ["#features", "Features"],
  ["#pricing", "Pricing"],
  ["#faq", "FAQ"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="wrap nav-in">
          <Logo />
          <div className="nav-links">
            {links.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </div>
          <div className="nav-cta">
            <a href="#" className="login">Log in</a>
            <a href="#pricing" className="btn btn-honey">Start free <span className="arr">→</span></a>
            <button className="burger" aria-label="Open menu" onClick={() => setOpen(!open)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-menu${open ? " show" : ""}`} onClick={() => setOpen(false)}>
        {links.map(([href, label]) => (
          <a key={href} href={href}>{label}</a>
        ))}
        <a href="#pricing" className="btn btn-honey">Start free →</a>
      </div>
    </>
  );
}
