import Image from "next/image";
import Section1 from "../components/Home/Section1";
import Navbar from "../components/ui/Navbar";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import Section5 from "@/components/Home/Section5";
import Footer from "@/components/ui/Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  useEffect(() => {
    Aos.init({duration:900})
  }, [])

  return ( 
    <Fragment>
      <header>
        <title>Eskul Coding | SMA Perguruan Buddhi</title>
      </header>
      <main className="bg-[#F7F7F7] min-h-screen w-full overflow-hidden">
        <LoadingScreen/>
        <Navbar/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Footer/>
      </main>
    </Fragment>
  )
}