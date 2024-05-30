import "@/styles/globals.css";
import "@/styles/swiper.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}
