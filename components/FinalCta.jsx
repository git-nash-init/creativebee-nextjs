import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section className="final dark">
      <span className="hex-deco" style={{ top: "16%", left: "8%" }}>⬡</span>
      <span className="hex-deco" style={{ top: "24%", right: "10%", animationDelay: "1.4s" }}>⬡</span>
      <span className="hex-deco" style={{ bottom: "18%", left: "16%", animationDelay: "2.6s" }}>⬡</span>
      <span className="hex-deco" style={{ bottom: "22%", right: "18%", animationDelay: ".8s" }}>⬡</span>
      <Reveal className="wrap">
        <h2>Your audience is waiting.<br /><em>Start earning today.</em></h2>
        <p>Join 25,000+ creators who turned their skills into a business with CreativeBee. Free to start, five minutes to launch.</p>
        <div className="hero-cta">
          <a href="#pricing" className="btn btn-honey">Create your free page <span className="arr">→</span></a>
          <a href="#creators" className="btn btn-ghost">Explore the platform</a>
        </div>
      </Reveal>
    </section>
  );
}
