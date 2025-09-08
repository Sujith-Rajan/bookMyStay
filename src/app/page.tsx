"use client"
import HomeStaySection from "@/components/Content";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import Video from "@/components/Video";
import Links from "@/components/Links";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import { Element } from "react-scroll"

export default function Home() {
  return (
    <div>
      <Element id="hero" name="hero">
        <Hero />
      </Element>
      <HomeStaySection />
      <Element id="about" name="about">
        <About />
      </Element>
      <Element id="facilities" name="facilities">
        <Facilities />
      </Element>
      <Video />
      <Testimonial />
      <Links />
      <Footer />


    </div>
  );
}
