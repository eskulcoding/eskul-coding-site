const { default: Link } = require("next/link");

function Footer () {
    return (
        <div className="py-32 px-10 flex flex-col items-center justify-center bg-white space-y-10 text-[14px] text-center">
            <ul className="flex flex-wrap justify-center space-x-5 md:space-x-9">
                {/* <li>
                    <Link href={"#"} className="hover:text-neutral-400 duration-200">
                        Tentang Kami
                    </Link>
                </li>
                <li>
                    <Link href={"#"} className="hover:text-neutral-400 duration-200">
                        Kontributor
                    </Link>
                </li>
                <li>
                    <Link href={"#"} className="hover:text-neutral-400 duration-200">
                        Projek
                    </Link>
                </li> */}
                <li>
                    <Link href={"mailto:eskulcoding.smabuddhi@gmail.com"} className="hover:text-neutral-400 duration-200">
                        Hubungi kami
                    </Link>
                </li>
            </ul>
            <span>
                Copyright &copy; 2024 Coding Club SMA Perguruan Buddhi. All rights reserved.
            </span>
        </div>
    )
}

export default Footer;