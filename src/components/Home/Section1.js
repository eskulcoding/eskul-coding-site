import Image from "next/image";

function Section1() {
    return (
        <div className="px-8 sm:px-12 md:px-24 lg:px-36 2xl:px-72 flex flex-col-reverse md:flex-row justify-between items-center w-full py-20 md:py-40 lg:py-52 xl:py-56" data-aos="fade-up">
            <div className="w-full md:w-[45%] flex flex-col space-y-6">
                <div className="text-5xl md:text-5xl 2xl:text-[72px] font-bold md:-space-y-2">
                    <h1>Semua bisa</h1>
                    <h1>#ngoding</h1>
                </div>
                <p>
                    Ini adalah tempat dimana impian digitalmu terwujud !<br/>Ayo bersama jelajahi serta pelajari dunia #ngoding dengan semangat dan bangun keterampilan untuk masa depan
                </p>
            </div>
            <div className="w-full md:w-[40%] relative flex justify-center items-center">
                <Image src={"/assets/img/material-2.png"} width={500} height={500} layout="responsive"/>
            </div>
        </div>
    )
}

export default Section1;