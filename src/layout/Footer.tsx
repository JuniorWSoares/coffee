import type React from "react"

export const Footer:React.FC = () => {
    return (
        <footer className="h-fit bg-primary-300 pt-20 text-center">
            <div className="w-fit md:w-full md:max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 pb-5">
                <iframe className="w-min-75 min-h-75 shadow-sm shadow-secondary"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.9383928521806!2d-42.962229923820814!3d-22.393679819736626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x984c8d72440a5f%3A0xc2908311701787eb!2sUnifeso%20-%20Campus%20Quinta%20do%20Para%C3%ADso!5e0!3m2!1spt-BR!2sbr!4v1769343049229!5m2!1spt-BR!2sbr"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>

                <div>
                    <h3 className="text-xl font-bold mb-5">Informações da Empresa</h3>
                    <div className="flex flex-col items-center md:items-start  gap-4 text-lg">
                        <a href="#about-us" className="hover:text-secondary hover:font-semibold">Sobre Nós</a>
                        <a href="#about-us" className="hover:text-secondary hover:font-semibold">Contate-nos</a>
                        <a href="#about-us" className="hover:text-secondary hover:font-semibold">Suporte</a>
                    </div>
                </div>

                <div className="text-center">
                    <h3 className="text-xl font-bold mb-5">Siga-nos</h3>
                    <div className="flex gap-5 justify-center md:justify-start">
                        <a href="https://www.instagram.com/junnior_ws/" target="_blank"><img src="/assets/instagram.png" className="w-9 h-9" alt="" /></a>
                        <a href="https://github.com/JuniorWSoares"  target="_blank"><img src="/assets/github.png" className="w-9 h-9"  alt="" /></a>
                        <a href="https://www.linkedin.com/in/j%C3%BAnior-soares-b5a869354/"  target="_blank"><img src="/assets/linkedin.png" className="w-9 h-9"  alt="" /></a>
                    </div>
                </div>
            </div>

            <div id="contact" className="text-black text-sm py-2">&copy; Coffee | 2026</div>
        </footer>
    )
}