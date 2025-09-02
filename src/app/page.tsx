import About from "@/components/About";
import HomeStaySection from "@/components/Content";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import Video from "@/components/Video";

export default function Home() {
  return (
    <div>
      <Hero/>
      <HomeStaySection/>
      <Video/>
      <Testimonial/>
      <About/>
      <Footer/>
    </div>
  );
}
