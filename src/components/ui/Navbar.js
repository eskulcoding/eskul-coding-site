import Link from "next/link";

function Navbar() {
    return (
        <header className="w-full flex justify-between px-72 py-7 bg-white fixed z-50">
            <h4 className="font-bold">
                Coding SMA Buddhi
            </h4>
            <ul className="flex space-x-8">
                <li>
                    <Link href={"/"} className="hover:text-neutral-400 duration-200">
                        Social Media
                    </Link>
                </li>
                <li>
                    <Link href={"/"} className="hover:text-neutral-400 duration-200">
                        Tentang Kami
                    </Link>
                </li>
                <li>
                    <Link href={"/"} className="hover:text-neutral-400 duration-200">
                        Projek
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Navbar;