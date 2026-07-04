"use client";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <Reveal className="head">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Simple pricing</span>
          <h2 className="sec-title">Start free.<br />Upgrade when you grow.</h2>
          <p className="sec-sub" style={{ margin: "0 auto" }}>
            No setup fees, no hidden charges. You only pay when you earn.
          </p>
        </Reveal>
        <div className="price-grid">
          <Reveal className="price-card">
            <div className="plan">Starter</div>
            <div className="amount">₹0 <small>/ forever</small></div>
            <p className="desc">Everything you need to launch and make your first sale.</p>
            <ul>
              <li>Unlimited products &amp; courses</li>
              <li>Link-in-bio storefront with themes</li>
              <li>UPI, cards &amp; netbanking checkout</li>
              <li>Basic sales analytics</li>
              <li>Email support</li>
              <li>5% platform fee per transaction</li>
            </ul>
            <a href="#" className="btn btn-dark">Create free account</a>
          </Reveal>
          <Reveal className="price-card pro" delay={0.1}>
            <span className="pop-badge">Most popular</span>
            <div className="plan">Pro</div>
            <div className="amount">₹999 <small>/ month</small></div>
            <p className="desc">For serious creators scaling to their next lakh.</p>
            <ul>
              <li>Everything in Starter, plus:</li>
              <li>Only 2% platform fee per transaction</li>
              <li>Custom domain &amp; full branding control</li>
              <li>Sales funnels, upsells &amp; discount codes</li>
              <li>Advanced analytics &amp; abandoned cart recovery</li>
              <li>Automated email &amp; WhatsApp notifications</li>
              <li>Priority support with dedicated manager</li>
            </ul>
            <a href="#" className="btn btn-honey">Go Pro <span className="arr">→</span></a>
          </Reveal>
        </div>
        <p className="note">Prices exclusive of GST · Cancel anytime · 7-day money-back guarantee on Pro</p>
      </div>
    </section>
  );
}
