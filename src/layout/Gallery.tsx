import type React from "react"
import { Card } from "../components/Card"
import {coffees} from "../data/coffees.ts"

export const Gallery: React.FC = () => {
    return (
        <section className="h-fit bg-primary-100" id="gallery">
            <div className="max-w-custon-width lg:w-[75vw] mx-auto h-fit py-20">
                <h2 className="mb-15">Um Pouco Mais do Nosso Catálogo</h2>
                <div className="flex flex-wrap gap-10 md:gap-15 justify-center">
                    {coffees.map(coffee => (
                        <Card key={coffee.id} name={coffee.name} price={coffee.price} imagePath={coffee.imagePath} />
                    ))}
                </div>
            </div>
        </section>
    )
}