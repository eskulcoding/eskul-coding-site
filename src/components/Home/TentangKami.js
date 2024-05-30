const { default: Image } = require("next/image")

const TentangKami = () => {
    return (
        <section className="space-y-10 md:space-y-0 section-container flex flex-col md:flex-row items-center justify-between" data-aos="fade-up">
            <div className="flex flex-col space-y-8 w-full xl:w-[40%] text-neutral-800">
                <h3 className="text-4xl xl:text-5xl text-black font-bold">Tentang kami</h3>
                <div className="space-y-3 text-justify">
                    <p>
                        Selamat datang di Eskul Coding, ekstrakurikuler pemrograman di SMA Perguruan Buddhi yang berdiri sejak tahun 2022. Kami berlokasi di lantai 2 gedung SMA, tepatnya di Lab Bahasa. Eskul ini dibimbing oleh Bapak Mahrudinda, S.Pd., M.Mat., seorang pendidik berpengalaman dalam bidang matematika dan teknologi.

                    </p>
                    <p>
                        Di Eskul Coding, kami membekali siswa dengan keterampilan pemrograman dasar hingga lanjut yang berfokus pada algoritma dan computational thinking. Siswa akan belajar dasar-dasar pemrograman hingga bisa memecahkan suatu masalah dengan logika pemograman.
                        Bergabunglah dengan kami untuk belajar, berkreasi, dan menjelajahi dunia pemrograman. Mari bersama-sama membangun masa depan yang lebih cemerlang dengan teknologi!
                    </p>
                </div>
            </div>
            <div className="w-full xl:w-[40%] inline-block md:hidden xl:inline-block">
                <Image src="/assets/img/album/6.jpg" width={500} height={500} layout="responsive"></Image>
            </div>
        </section>
    )
}

export default TentangKami;