export const Features = () => {
    return (
        <section className="h-fit bg-primary-100">
            <div className="max-w-custon-width py-20 lg:py-0 lg:h-[50vh] mx-auto flex flex-col justify-center items-center">
                <h2 className="mb-10 md:mb-20">Os Mais Avaliados</h2>
                <div className="max-w-custon-width px-4 flex flex-col divide-y divide-tertiary/40 md:grid md:grid-cols-2 lg:flex lg:flex-row md:divide-y-0 lg:divide-x">
                    <div className="feature">
                        <img src="/premium.png" alt="Imagem de um selo premium" />
                        <h3>Espresso</h3>
                        <p>
                            Intenso, encorpado e preparado na medida certa.
                            Grãos 100% arábica, extração precisa e crema perfeita em cada xícara.
                        </p>
                    </div>
                    <div  className="feature">
                        <img src="/premium.png" alt="Imagem de um selo premium" />
                        <h3>Latte</h3>
                        <p>
                            Café suave com leite cremoso e espuma perfeita.
                            Equilíbrio ideal entre café e leite vaporizado, perfeito para qualquer hora do dia.
                        </p>
                    </div>
                    <div  className="feature">
                        <img src="/premium.png" alt="Imagem de um selo premium" />
                        <h3>Cold Brew</h3>
                        <p>
                            Extração a frio, refrescante e cheio de sabor.
                            Preparado por até 18 horas, com acidez reduzida e notas naturalmente adocicadas.
                        </p>
                    </div>
                    <div  className="feature">
                        <img src="/premium.png" alt="Imagem de um selo premium" />
                        <h3>Mocha</h3>
                        <p>
                            A combinação perfeita de café e chocolate.
                            Um toque de chocolate premium que traz cremosidade e um sabor irresistível.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}