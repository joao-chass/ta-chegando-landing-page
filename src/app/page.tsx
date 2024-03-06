
import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/Contact/ContactSection";
import HomeSection from "./components/Home/HomeSection";
import MissionSection from "./components/MissionSection/MissionSection";
import Navbar from "./components/Nabar/Navbar";
import  style  from "./global.module.css";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <HomeSection />
      <AboutSection />
      <MissionSection />
      <ContactSection />
    </main>
  );
}
