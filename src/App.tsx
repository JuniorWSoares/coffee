import { AboutUs } from "./layout/AboutUs"
import { Features } from "./layout/Features"
import { Footer } from "./layout/Footer"
import { Nav } from "./layout/Nav"
import { Hero } from "./layout/Hero"

export default function App(){
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <Features />
        <AboutUs />
      </main>
      <Footer />
    </>
  )
}