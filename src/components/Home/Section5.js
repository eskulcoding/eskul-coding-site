import { dataAlbum } from "@/data/album";
import Image from "next/image";

function Section5() {
    return (
        <div className="flex flex-col justify-center text-center px-8 sm:px-12 md:px-24 lg:px-36 2xl:px-72 space-y-5 py-36 md:py-40 lg:py-44">
            <p className="text-[32px] font-semibold">Album</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                { dataAlbum.map((e,i) => 
                    <div key={i} className="relative" data-aos="fade-up">
                        <Image src={`/assets/img/album/${e}`} width={300} height={300} layout="responsive" alt="eskul coding sma perguruan buddhi" className="absolute top-0 left-0 z-10"/>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default Section5;