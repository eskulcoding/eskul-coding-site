import Navbar from "@/components/ui/Navbar";
import Link from "next/link";

function NotFound() {
    return (
        <>
            <header>
                <title>Page not found</title>
            </header>
            <Navbar/>
            <div className="w-full min-h-screen flex justify-center items-center bg-[#F7F7F7]">
                <div className="w-[80%] md:w-[55%] xl:w-[40%] flex flex-col items-center text-center">
                    <h1 className="text-[80px] md:text-[100px] xl:text-[110px] text-[#FA264D]">404</h1>
                    <span className="text-lg xl:text-2xl">OOPS! NOTHING WAS FOUND</span>
                    <span className="mt-7">
                        The page you are looking for might have been removed or temporarily archived for development process <Link href={"/"} className="underline text-[#FA264D]">Return to homepage</Link>
                    </span>
                </div>
            </div>
        </>
    )
}

export default NotFound;