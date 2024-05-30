import { showDataAlbum } from "@/data/album";
import Image from "next/image";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation, Pagination} from "swiper/modules";
import Link from "next/link";
import { useEffect, useState } from "react";

function Album() {
    const [slidesToShow, setSlidesToShow] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            const newSlideToShow = (window.innerWidth < 640)? 1 : (window.innerWidth < 1024)? 2 : (window.innerWidth < 1536)? 3 : 4;
            setSlidesToShow(newSlideToShow);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    return (
        <div className="flex flex-col items-center justify-center text-center px-8 sm:px-12 md:px-24 lg:px-36 2xl:px-72 space-y-6 py-36 md:py-40 lg:py-44">
            <p className="text-[32px] font-semibold">Album</p>
            <Swiper
                slidesPerView={slidesToShow}
                spaceBetween={10}
                navigation={true}
                modules={[Pagination, Navigation]}
                pagination={{ 
                    clickable : true
                }}
                loop={true}
                style={{ padding: '50px',
                "--swiper-pagination-bullet-inactive-color": "#B5B4B4",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-color" : "black",
                "--swiper-navigation-color" : "black"
                }}
                className="mySwiper w-full p-20"
            >
                { showDataAlbum.map((e,i) => 
                    <SwiperSlide>
                        <div key={i} className="relative">
                            <Image src={`/assets/img/album/${e}`} width={400} height={300} layout="reponsive" alt="eskul coding sma perguruan buddhi"></Image>
                        </div>
                    </SwiperSlide>
                ) }
            </Swiper>
            <Link href={"/album"}>
                <button className="bg-[#FA264D] w-56 py-4 text-sm text-white group">
                    <span>
                        Lihat Selengkapnya
                    </span>
                    <span className="ml-2 group-hover:ml-4 duration-200">
                        {'>'}
                    </span>
                </button>
            </Link>
        </div>
    )
}

export default Album;