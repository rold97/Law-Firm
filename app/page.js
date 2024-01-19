import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import Practices from "@/components/Practices";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Practices />
      <WhyUs />
      <Footer />
    </div>
  );
}
