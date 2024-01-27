import Image from "next/image"

function Section2() {
    return (
        <div className="flex justify-between items-center min-h-screen px-72">
            <div className="w-[50%] rounded-3xl overflow-hidden">
                <Image src={"/assets/img/carbon.png"} width={300} height={300} layout="responsive"/>
            </div>
            <div className="flex flex-col w-[38%] space-y-7">
                <h1 className="text-[72px] leading-none font-bold">
                    Apa itu Coding ?
                </h1>
                <p className="text-justify">
                    Coding atau pemrograman adalah proses menciptakan sebuah program komputer dengan menggunakan bahasa pemrograman. Coding melibatkan penulisan serangkaian instruksi atau pernyataan yang dapat dijalankan oleh komputer untuk menyelesaikan tugas atau masalah tertentu.
                </p>
                <p className="text-justify">
                    Coding memiliki berbagai jenis bahasa seperti Python, Java, C++, dan JavaScript. Setiap bahasa memiliki sintaks dan aturan tertentu yang harus diikuti agar instruksi dapat dipahami dan dieksekusi oleh komputer.
                </p>
            </div>
        </div>
    )
}

export default Section2