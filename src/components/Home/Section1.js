import Image from "next/image";

function Section1() {
    return (
        <div className="px-72 flex justify-between items-center w-full min-h-screen">
            <div className="w-[45%] flex flex-col space-y-2">
                <div className="text-[72px] font-bold -space-y-8">
                    <h1>Semua Bisa</h1>
                    <h1>#ngoding</h1>
                </div>
                <p>
                    Ini adalah tempat dimana impian digitalmu terwujud !<br/>Ayo bersama jelajahi serta pelajari dunia #ngoding dengan semangat dan bangun keterampilan untuk masa depan
                </p>
            </div>
            <div className="w-[40%]">
                <Image src={"/assets/img/material-1.png"} width={500} height={500} layout="responsive"/>
            </div>
        </div>
    )
}

export default Section1;