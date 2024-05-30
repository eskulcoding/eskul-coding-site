import Image from "next/image";
import Navbar from "../components/ui/Navbar";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import Footer from "@/components/ui/Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import HeroComponent from "../components/Home/HeroComponent";
import TentangKami from "@/components/Home/TentangKami";
import VisiMisi from "@/components/Home/VisiMisi";
import Teknologi from "@/components/Home/Teknologi";
import Album from "@/components/Home/Album";

export default function Home() {
  useEffect(() => {
    Aos.init({duration:900})
  }, [])

  return ( 
    <Fragment>
      <header>
        <title>Eskul Coding | SMA Perguruan Buddhi</title>
      </header>
      <main className="min-h-screen w-full overflow-hidden">
        <LoadingScreen/>
        <Navbar/>
        <HeroComponent/>
        <TentangKami/>
        <Album/>
        <VisiMisi/>
        <Teknologi/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Footer/>
      </main>
    </Fragment>
  )
}