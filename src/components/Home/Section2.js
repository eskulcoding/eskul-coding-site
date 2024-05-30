import Image from "next/image"
import CodeBlockComponent from "../ui/CodeBlock"

function Section2() {
    const code = (
        `
            function masukEskulCoding(orang) {
                orang.bingungDenganDuniaPemograman = false;
                console.log("Pemrograman itu mudah");
            }
            
            const saya = {
                nama: "siswa perguruan buddhi",
                minat: "coding",
                bingungDenganDuniaPemograman: true
            };
            
            while (saya.bingungDenganDuniaPemograman) {
                masukEskulCoding(saya);
            }
        `
    );

    return (
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-8 sm:px-12 md:px-24 lg:px-36 2xl:px-72 py-16 lg:py-40" data-aos="fade-right">
            <div className="w-full lg:w-[50%] rounded-3xl overflow-hidden mt-10 lg:mt-0">
                {/* <Image src={"/assets/img/carbon.png"} width={300} height={300} layout="responsive"/> */}
                <CodeBlockComponent code={code} language={"javascript"} showLineNumber={false}/>
            </div>
            <div className="flex flex-col w-full lg:w-[38%] space-y-7" data-aos="fade-left">
                <h1 className="text-4xl xl:text-5xl 2xl:text-[72px] leading-none font-bold">
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