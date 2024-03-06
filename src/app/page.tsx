"use client";
import { useEffect } from "react";
import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/Contact/ContactSection";
import HomeSection from "./components/Home/HomeSection";
import MissionSection from "./components/MissionSection/MissionSection";
import Navbar from "./components/Nabar/Navbar";
import  style  from "./global.module.css";

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy , scroller} from 'react-scroll';

import { useRouter } from "next/router";

let scrollToElement = "1";


export default function Home() {
  useEffect(() => {
    scrollToElement = "Home";
    scroller.scrollTo(scrollToElement, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, [scrollToElement]);

  
  return (
    <main>
      <Navbar/>
      <Element name="Home" name="Home">
      <HomeSection />
      </Element>
      <Element name="Sobre" name="Sobre">
      <AboutSection />
      </Element>
      <Element name="APP" name="APP">
      <MissionSection />
      </Element>
    
    </main>
  );
}
