import { mostPopularTech } from "@/data/most-popular-tech";
import Link from "next/link";
import Card from "../mostpopulartech-card/card-items";

function Section3() {
    return (
        <div className="px-72 flex justify-between items-center w-full min-h-screen relative">
            <div className="w-[45%] flex flex-col space-y-5">
                <h1 className="text-[72px] font-bold leading-none">Bahasa <br/>Python</h1>
                <p className="">
                    Python pertama kali dirilis pada tahun 1991 oleh  Guido van Rossum. Kelebihan Python adalah sintaks yang mudah dibaca dan ditulis, serta dukungan untuk berbagai paradigma pemrograman seperti pemrograman berorientasi objek, pemrograman fungsional, dan pemrograman prosedural.
                </p>
                <p className="">
                    Ini adalah bahasa utama yang akan kita pelajari di Ekstrakurikuler Coding SMA Buddhi karna beberapa kelebihannya tadi. 
                </p>
                <Link href={"/"} className="underline">
                    Selengkapnya tentang Python
                </Link>
                
            </div>
            <div className="w-[40%] flex flex-col space-y-2 absolute right-0">
                <span>Most popular technologies - survey by stackoverflow</span>
                { mostPopularTech.map((e) => <Card object={e}/>) }
            </div>
        </div>
    )
}

export default Section3;