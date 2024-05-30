import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
    return (
        <header className="w-full flex items-center justify-between px-8 sm:px-12 md:px-20 lg:px-32 2xl:pl-64 2xl:px-72 py-5 bg-white fixed z-50">
            <div className="flex items-center space-x-2 md:space-x-5">
                <Link href={"/"}>
                    <h4 className="text-sm md:text-base font-bold text-[#FA264D]">
                        Coding SMA Buddhi
                    </h4>
                </Link>
            </div>
            <ul className="hidden md:flex space-x-8 text-xs text-neutral-600">
                <li>
                    <Link href={"/"} className="hover:text-[#FA264D] duration-200 border-b-2 border-[#FA264D] border-opacity-0 hover:border-opacity-100 hover:pb-2">
                        Tentang kami
                    </Link>
                </li>
                <li>
                    <Link href={"/album"} className="hover:text-[#FA264D] duration-200 border-b-2 border-[#FA264D] border-opacity-0 hover:border-opacity-100 hover:pb-2">
                        Album
                    </Link>
                </li>
                <li>
                    <Link href={"#"} className="hover:text-[#FA264D] duration-200 border-b-2 border-[#FA264D] border-opacity-0 hover:border-opacity-100 hover:pb-2">
                        Kontak
                    </Link>
                </li>
            </ul>
            <Link href={"https://www.instagram.com/smadhi_coding"}>
                <button className="hidden md:flex text-[#FA264D] px-4 py-2 items-center space-x-2 border border-[#FA264D] bg-transparent hover:bg-[#FA264D] hover:text-white duration-200">
                    <FontAwesomeIcon icon={faInstagram}/>
                    <span className="text-xs">
                        Media sosial
                    </span>
                </button>
            </Link>

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
                        <Link href={"/"} className="hover:text-neutral-100 duration-200 py-5 w-full flex justify-center hover:bg-neutral-600 focus:bg-neutral-600">
                            Tentang Kami
                        </Link>
                    </li>
                    <li>
                        <Link href={"/album"} className="hover:text-neutral-100 duration-200 py-5 w-full flex justify-center hover:bg-neutral-600 focus:bg-neutral-600">
                            Album
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"} className="hover:text-neutral-100 duration-200 py-5 w-full flex justify-center hover:bg-neutral-600 focus:bg-neutral-600">
                            Kontak
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://www.instagram.com/smadhi_coding"} className="hover:text-neutral-100 duration-200 py-5 w-full flex justify-center hover:bg-neutral-600 focus:bg-neutral-600">
                            Media sosial                            
                        </Link>
                    </li>
                </ul>
            </button>
        </header>
    )
}

export default Navbar;