const items = [
  "Instagram Influencers", "Software Developers", "Educators", "Online Trainers",
  "Digital Marketers", "UI/UX Designers", "Full Stack Developers", "Coaches",
];

export default function Marquee() {
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
