import AboutUs from "@/components/AboutUs";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Long from "@/components/Long";
import Practices from "@/components/Practices";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Practices />
      <Long />
    </div>
  );
}
