import Logo from "./Logo";

const cols = [
  ["Product", [["#sell", "Courses & webinars"], ["#sell", "Digital products"], ["#sell", "1:1 sessions"], ["#sell", "Paid communities"], ["#pricing", "Pricing"]]],
  ["Creators", [["#creators", "Influencers"], ["#creators", "Developers"], ["#creators", "Educators"], ["#creators", "Designers"], ["#creators", "Marketers"]]],
  ["Company", [["#", "About us"], ["#", "Blog"], ["#", "Careers"], ["#", "Contact"], ["#", "Help centre"]]],
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Logo />
            <p>
              The all-in-one creator platform. Sell courses, digital products, sessions and
              communities — and get paid for what you create.
            </p>
            <div className="socials">
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="YouTube">▶</a>
              <a href="#" aria-label="X">𝕏</a>
              <a href="#" aria-label="LinkedIn">in</a>
            </div>
          </div>
          {cols.map(([h, links]) => (
            <div key={h}>
              <h5>{h}</h5>
              <ul>
                {links.map(([href, label]) => (
                  <li key={label}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>© 2026 CreativeBee. All rights reserved. Made with 🍯 in India.</span>
          <span><a href="#">Terms</a> &nbsp;·&nbsp; <a href="#">Privacy</a> &nbsp;·&nbsp; <a href="#">Refund policy</a></span>
        </div>
      </div>
    </footer>
  );
}
