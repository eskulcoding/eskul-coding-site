import { dataAlbum } from "@/data/album";
import Image from "next/image";

function Section5() {
    return (
        <div className="flex flex-col justify-center min-h-screen text-center px-72 space-y-5">
            <p className="text-[32px] font-semibold">Album</p>
            <div className="grid grid-cols-3 gap-10">
                { dataAlbum.map((e) => 
                    <div>
                        <Image src={`/assets/img/album/${e}`} width={300} height={300} layout="responsive"/>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default Section5;