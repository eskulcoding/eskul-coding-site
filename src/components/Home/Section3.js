import { mostPopularTech } from "@/data/most-popular-tech";
import Link from "next/link";
import Card from "../mostpopulartech-card/card-items";
import { useEffect, useRef, useState } from "react";

function Section3() {
    const sectionRef = useRef();

    return (
        <div className="px-8 sm:px-12 md:px-24 lg:px-36 2xl:px-72 flex flex-col lg:flex-row justify-between items-center w-full relative py-20 md:py-40 space-y-16" ref={sectionRef}>
            <div className="w-full lg:w-[45%] flex flex-col space-y-5" data-aos="fade-up">
                <h1 className="text-4xl xl:text-5xl lg:text-6xl 2xl:text-[72px] font-bold leading-none">Bahasa <br/>Python</h1>
                <p className="">
                    Python pertama kali dirilis pada tahun 1991 oleh  Guido van Rossum. Kelebihan Python adalah sintaks yang mudah dibaca dan ditulis, serta dukungan untuk berbagai paradigma pemrograman seperti pemrograman berorientasi objek, pemrograman fungsional, dan pemrograman prosedural.
                </p>
                <p className="">
                    Ini adalah bahasa utama yang akan kita pelajari di Ekstrakurikuler Coding SMA Buddhi karna beberapa kelebihannya tadi. 
                </p>
                <Link href={"https://en.wikipedia.org/wiki/Python_(programming_language)"} className="underline hover:text-neutral-400 duration-200" target="_blank">
                    Selengkapnya tentang Python
                </Link>
            </div>
            <div className="w-full lg:w-[40%] flex flex-col space-y-2 lg:absolute right-0">
                <span>Most popular technologies - survey by stackoverflow</span>
                { mostPopularTech.map((e,i) => <Card key={i} object={e} parentRef={sectionRef}/>) }
            </div>
        </div>
    )
}

export default Section3;