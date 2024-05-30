import Image from "next/image";

function HeroComponent() {
    return (
        <div className="section-container flex flex-col-reverse md:flex-row justify-between items-center w-full" data-aos="fade-up">
            <div className="w-full md:w-[45%] flex flex-col space-y-6">
                <div className="text-5xl md:text-5xl 2xl:text-[96px] font-black md:-space-y-2">
                    <h1>Semua bisa</h1>
                    <h1>#ngoding</h1>
                </div>
                <p className="text-sm text-neutral-600 text-justify">
                Ini adalah tempat dimana impian digitalmu terwujud! Ayo bersama jelajahi serta pelajari dunia #ngoding dengan semangat dan bangun keterampilan untuk masa depan
                </p>
                <button className="flex justify-center text-xs text-white w-56 py-4 bg-[#FA264D] group duration-200">
                    <span>
                        SMA Perguruan Buddhi
                    </span>
                    <span className="ml-2 group-hover:ml-4 duration-200">
                        {'>'}
                    </span>
                </button>
            </div>
            <div className="w-full md:w-[40%] relative flex justify-center items-center">
                <Image src={"/assets/img/material-2.png"} width={500} height={500} layout="responsive"/>
            </div>
        </div>
    )
}

export default HeroComponent;