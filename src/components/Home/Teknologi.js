const Teknologi = () => {
    return (
        <section className="section-container flex flex-col md:flex-row justify-between items-center space-y-7 md:space-y-0" data-aos="fade-up">
            <div className="flex flex-col space-y-4 w-full lg:w-[50%]">
                <h3 className="text-4xl xl:text-5xl font-bold">Teknologi dan software yang digunakan</h3>
                <p className="text-justify">
                    Teknologi merupakan elemen penting dalam dunia pemrograman. Sebelum memulai karir, para programmer harus mempertimbangkan teknologi yang akan mereka gunakan, mulai dari perangkat lunak hingga bahasa pemrograman. Memilih teknologi yang tepat sangat penting karena akan mendukung perkembangan karir di masa depan. Kami telah memilih teknologi yang populer dan dapat membantu Anda memperluas kemampuan di bidang ini.
                </p>
                <div className="flex space-x-4">
                    <a href="https://code.visualstudio.com/">
                        <button className="bg-[#04A5FF] hover:bg-[#FA264D] px-5 py-2 text-white duration-200">
                            Visual Studio Code
                        </button>
                    </a>
                    <a href="https://www.python.org/">
                        <button className="bg-[#FDF30D] hover:bg-[#FA264D] px-5 py-2 duration-200">
                            Python
                        </button>
                    </a>
                </div>
            </div>
            <img src="/assets/img/album/2.jpg" className="w-full md:w-[37%] inline-block md:hidden lg:inline-block" alt="pembimbing eskul coding sma perguruan buddhi"></img>
        </section>
    )
}

export default Teknologi;