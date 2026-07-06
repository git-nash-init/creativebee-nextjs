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

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // close the menu, release the scroll lock, then glide to the section
  const goTo = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.body.style.overflow = "";
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", href);
  };

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
            <button
              className={`burger${open ? " open" : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-menu${open ? " show" : ""}`} onClick={() => setOpen(false)}>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={(e) => goTo(e, href)}>{label}</a>
        ))}
        <a href="#pricing" className="btn btn-honey" onClick={(e) => goTo(e, "#pricing")}>Start free →</a>
      </div>
    </>
  );
}
