import About from "@/components/About";
import HomeStaySection from "@/components/Content";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero/>
      <HomeStaySection/>
      <Testimonial/>
      <About/>
      <Footer/>
    </div>
  );
}
