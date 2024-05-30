import AlbumSection from "@/components/Album/AlbumSection";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function Album() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Navbar/>
            <AlbumSection/>
            <Footer/>
        </div>
    )
}