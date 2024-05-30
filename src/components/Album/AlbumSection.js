import { DataAlbum } from "@/data/album";
import Image from "next/image";

const AlbumSection = () => {


    return (
        <section className="section-container">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                { DataAlbum.map((e,i) => (
                    <div className="flex flex-col space-y-1">
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-black  opacity-0 hover:opacity-100 bg-opacity-30 hidden lg:flex flex-col items-center justify-center space-y-3 duration-200">
                                <p className="text-white">{e.date}</p>
                                {/* <button className="text-white bg-[#FA264D] px-3 py-2 hover:px-5 duration-150">
                                    View detail
                                </button> */}
                            </div>
                            <Image src={`/assets/img/album/${e.path}`} className="hover:cursor-pointer" width={200} height={200} layout="responsive"/>
                        </div>
                        <span className="lg:hidden">{e.date}</span>
                    </div>
                ))}
            </section>
        </section>
    )
}

export default AlbumSection;