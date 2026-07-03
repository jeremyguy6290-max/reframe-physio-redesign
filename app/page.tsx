import Header from "./components/Header";
import MotionProvider from "./components/MotionProvider";
import Hero from "./components/Hero";
import Announcement from "./components/Announcement";
import Services from "./components/Services";
import WhyReframe from "./components/WhyReframe";
import About from "./components/About";
import Booking from "./components/Booking";
import Location from "./components/Location";
import Referrals from "./components/Referrals";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <MotionProvider>
      <Header />
      <Announcement />
      <main>
        <Hero />
        <Services />
        <div aria-hidden="true" className="seam seam-forest-parchment" />
        <WhyReframe />
        <div aria-hidden="true" className="seam seam-parchment-cream" />
        <About />
        <div aria-hidden="true" className="seam seam-cream-ink" />
        <div className="bg-flow-booking-location">
          <Booking />
          <Location />
        </div>
        <Referrals />
        <FAQ />
      </main>
      <Footer />
    </MotionProvider>
  );
}
