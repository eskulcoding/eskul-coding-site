const { default: Link } = require("next/link");

function Footer () {
    return (
        <div className="bg-black text-white py-5 px-10 flex flex-col items-center justify-center space-y-10 text-[14px] text-center">
            <span>
                Copyright &copy; 2024 Coding Club SMA Perguruan Buddhi. All rights reserved.
            </span>
        </div>
    )
}

export default Footer;