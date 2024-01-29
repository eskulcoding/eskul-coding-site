import Image from "next/image";
import Link from "next/link";

function Navbar() {
    return (
        <header className="w-full flex items-center justify-between px-8 sm:px-12 md:px-20 lg:px-32 2xl:pl-64 2xl:px-72 py-5 bg-white fixed z-50">
            <div className="flex items-center space-x-2 md:space-x-5">
                <div className="inline-block rounded-full overflow-hidden w-10">
                    <Image src={"/assets/img/logo-0.jpg"} width={300} height={300} layout="responsive"/>
                </div>
                <h4 className="text-sm md:text-base font-bold">
                    Coding SMA Buddhi
                </h4>
            </div>
            <ul className="hidden md:flex space-x-8">
                <li>
                    <Link href={"https://www.instagram.com/smadhi_coding"} className="hover:text-neutral-400 duration-200" target="_blank">
                        Social Media
                    </Link>
                </li>
                {/* <li>
                    <Link href={"/"} className="hover:text-neutral-400 duration-200">
                        Tentang Kami
                    </Link>
                </li>
                <li>
                    <Link href={"/"} className="hover:text-neutral-400 duration-200">
                        Projek
                    </Link>
                </li> */}
            </ul>

            <button className="md:hidden flex flex-col space-y-1 group">
                <div className="w-5 h-1 bg-black"/>
                <div className="w-5 h-1 bg-black"/>
                <div className="w-5 h-1 bg-black"/>

                <ul className="bg-white w-full flex flex-col absolute left-0 pt-8 pb-10 -top-[100vh] group-focus:top-0 duration-200">
                    <div className="flex justify-end h-6 px-10">
                        <div className="relative cursor-pointer" role="button" tabIndex={0}>
                            <div className="w-6 h-1 bg-black rotate-45 absolute"/>
                            <div className="w-6 h-1 bg-black -rotate-45 absolute"/>
                        </div>
                    </div>
                    <li>
                        <Link href={"https://www.instagram.com/smadhi_coding"} className="hover:text-neutral-100 duration-200 py-5 w-full flex justify-center hover:bg-neutral-600 focus:bg-neutral-600" target="_blank">
                            Social Media
                        </Link>
                    </li>
                    {/* <li>
                        <Link href={"/"} className="hover:text-neutral-100 duration-200 py-5 w-full flex justify-center hover:bg-neutral-600 focus:bg-neutral-600">
                            Tentang Kami
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"} className="hover:text-neutral-100 duration-200 py-5 w-full flex justify-center hover:bg-neutral-600 focus:bg-neutral-600">
                            Projek
                        </Link>
                    </li> */}
                </ul>
            </button>
        </header>
    )
}

export default Navbar;