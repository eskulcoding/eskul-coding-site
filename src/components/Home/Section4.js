import Link from "next/link";

function Section4() {
    return (
        <div className="flex items-center justify-center py-36">
            <div className="flex flex-col items-center text-center space-y-5 w-full md:w-[50%]" data-aos="fade-up"> 
                <h1 className="text-5xl md:text-6xl 2xl:text-[72px] font-bold leading-none">
                    Jadi, Kamu Tunggu <br/>Apa Lagi ?
                </h1>
                <p className="w-[75%]">
                    Mulai dari satu baris kode, hingga proyek besar, ikuti kelas Python di Ekstrakurikuler Coding SMA Buddhi. Dibimbing oleh Mahrudinda, S.Pd., M.Mat. Kamu akan melihat bagaimana langkah sederhana bisa menjadi karya besar. Bergabunglah sekarang dan raih peluang belajar Python yang menyenangkan dan bermanfaat bersama !
                </p>
                <div>
                    <Link href={"mailto:eskulcoding.smabuddhi@gmail.com"}>
                        <button className="px-10 py-4 border-2 border-[#101010] rounded-xl bg-[#101010] hover:bg-transparent hover:text-black duration-200 text-white">
                            Hubungi kami
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Section4;