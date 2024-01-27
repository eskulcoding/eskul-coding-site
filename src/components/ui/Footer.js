const { default: Link } = require("next/link");

function Footer () {
    return (
        <div className="py-32 flex flex-col items-center bg-white space-y-10 text-[12px]">
            <ul className="flex space-x-9">
                <li>
                    <Link href={"#"}>
                        Tentang Kami
                    </Link>
                </li>
                <li>
                    <Link href={"#"}>
                        Kontributor
                    </Link>
                </li>
                <li>
                    <Link href={"#"}>
                        Projek
                    </Link>
                </li>
                <li>
                    <Link href={"#"}>
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