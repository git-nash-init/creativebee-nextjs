import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Creators from "@/components/Creators";
import Sell from "@/components/Sell";
import Steps from "@/components/Steps";
import Stats from "@/components/Stats";
import Splits from "@/components/Splits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import FirstStep from "@/components/FirstStep";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Creators />
      <Sell />
      <Steps />
      <Stats />
      <Splits />
      <Testimonials />
      <Pricing />
      <Faq />
      <FirstStep />
      <Footer />
    </>
  );
}
