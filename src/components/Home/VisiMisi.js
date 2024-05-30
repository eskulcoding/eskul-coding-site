const VisiMisi = () => {
    return (
        <section className="section-container lg:py-32 flex flex-col md:flex-row space-y-7 md:space-y-0 md:space-x-12 bg-neutral-100">
            <div className="md:text-right w-full md:w-[50%]" data-aos="fade-right">
                <h3 className="text-3xl font-bold">
                    Visi
                </h3>
                <p className="text-justify md:text-right">
                    Menjadi wadah yang memfasilitasi siswa/siswi SMA Perguruan Buddhi dalam mengembangkan keahlian dan pemahaman dalam dunia pemrograman serta menciptakan generasi penerus yang berkompeten dan berdaya saing dalam era teknologi digital.
                </p>
            </div>
            <div className="text-left w-full md:w-[50%]" data-aos="fade-left">
                <h3 className="text-3xl font-bold">
                    Misi
                </h3>
                <ul className="list-decimal pl-3 text-justify md:text-left">
                    <li>
                        Menyediakan suasana belajar yang positif dan kondusif untuk menginspirasi minat siswa/siswi terhadap dunia pemrograman.
                    </li>
                    <li>
                        Mendorong siswa/siswi untuk mengembangkan kreativitas dalam merancang solusi pemrograman yang inovatif.
                    </li>
                    <li>
                        Mengajarkan siswa/siswi untuk mengembangkan pola pikir pemecahan masalah dengan logika pemrograman.
                    </li>
                    <li>
                        Memberikan kesempatan dan dukungan untuk proyek-proyek pemrograman yang dapat merangsang pikiran kreatif siswa/siswi.
                    </li>
                    <li>
                        Menyediakan sumber daya dan fasilitas yang memadai untuk mendukung pembelajaran pemrograman.
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default VisiMisi;