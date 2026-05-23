import Header from "./components/Header";
import Hero from "./components/Hero";
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
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyReframe />
        <About />
        <Booking />
        <Location />
        <Referrals />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
