import type React from "react";

export const Gallery: React.FC = () => {
    return (
        <section className="h-fit bg-primary-100">
            <div className="max-w-custon-width lg:w-[75vw] mx-auto h-fit py-20">
                <h2 className="mb-15">Um Pouco Mais do Nosso Catálogo</h2>
                <div className="flex flex-wrap gap-10 md:gap-15 justify-center">
                    <div className="card">
                        <img src="/cappuchino-1.jpg" alt="Imagem de um produto (cappuchino)" />
                        <div className="content">
                            <h3>Café Tradicional</h3>
                            <div>
                                <img src="/cesta.png" alt="" />
                                <span>R$ 4,00</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/cappuchino-2.jpg" alt="Imagem de um produto (cappuchino)" />
                        <div className="content">
                            <h3>Café Expresso</h3>
                            <div>
                                <img src="/cesta.png" alt="" />
                                <span>R$ 5,00</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/cappuchino-3.jpg" alt="Imagem de um produto (cappuchino)" />
                        <div className="content">
                            <h3>Café com Leite Cremoso</h3>
                            <div>
                                <img src="/cesta.png" alt="" />
                                <span>R$ 6,00</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/cappuchino-4.jpg" alt="Imagem de um produto (cappuchino)" />
                        <div className="content">
                            <h3>Mocha</h3>
                            <div>
                                <img src="/cesta.png" alt="" />
                                <span>R$ 8,00</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/cappuchino-5.jpg" alt="Imagem de um produto (cappuchino)" />
                        <div className="content">
                            <h3>Cappuccino Clássico</h3>
                            <div>
                                <img src="/cesta.png" alt="" />
                                <span>R$ 7,50</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/cappuchino-6.jpg" alt="Imagem de um produto (cappuchino)" />
                        <div className="content">
                            <h3>Cappuccino Cremoso</h3>
                            <div>
                                <img src="/cesta.png" alt="" />
                                <span>R$ 8,50</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/cappuchino-7.jpg" alt="Imagem de um produto (cappuchino)" />
                        <div className="content">
                            <h3>Latte</h3>
                            <div>
                                <img src="/cesta.png" alt="" />
                                <span>R$ 9,00</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/cappuchino-8.jpg" alt="Imagem de um produto (cappuchino)" />
                        <div className="content">
                            <h3>Cappuccino de Canela</h3>
                            <div>
                                <img src="/cesta.png" alt="" />
                                <span>R$ 9,00</span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/cappuchino-9.jpg" alt="Imagem de um produto (cappuchino)" />
                        <div className="content">
                            <h3>Cold Brew</h3>
                            <div>
                                <img src="/cesta.png" alt="" />
                                <span>R$ 10,00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}