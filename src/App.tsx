import { AboutUs } from "./layout/AboutUs"
import { Features } from "./layout/Features"
import { Footer } from "./layout/Footer"
import { Navbar } from "./layout/Navbar"
import { Hero } from "./layout/Hero"
import { Gallery } from "./layout/Gallery"

export default function App(){
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Features />
        <AboutUs />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}