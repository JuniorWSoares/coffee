import type React from "react"
import { Button } from "../components/Button"

export const Hero: React.FC = () => {
    return (
        <section id="home" className="h-screen bg-[url('/cappuchino-home.jpg')] bg-cover bg-center relative " >
            <div className="absolute inset-0 bg-black/70 md:bg-black/50"></div>
            <div className="h-screen max-w-custon-width z-10 flex flex-col justify-center md:justify-start mx-auto px-4 py-20 relative">
                <div className="text-white flex flex-col gap-10 max-w-2xl">
                    <h1 className="text-5xl text-center md:text-left md:text-6xl font-bold">Saboreie o Café Perfeito!</h1>
                    <p className="text-sm md:text-lg">
                        Grãos selecionados, preparo artesanal e um ambiente aconchegante
                        para transformar seu momento em uma experiência única.
                    </p>
                    <div className="flex gap-2">
                        <Button variant="primary">Ver Cardápio</Button>
                        <Button variant="tertiary">Visite-nos</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}