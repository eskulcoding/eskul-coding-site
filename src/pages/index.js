import Image from "next/image";
import Section1 from "../components/Home/Section1";
import Navbar from "../components/ui/Navbar";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import Section5 from "@/components/Home/Section5";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return ( 
    <main className="bg-[#F7F7F7] min-h-screen w-full overflow-hidden">
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </main>
  )
}