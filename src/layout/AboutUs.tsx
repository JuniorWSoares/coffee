import type React from "react";
import { Button } from "../components/Button";

export const AboutUs: React.FC = () => {
  return (
    <section className="h-fit lg:grid lg:grid-cols-3">
      <div className="lg:grid lg:grid-cols-2 items-center bg-secondary col-span-2 lg:pl-20">
        <div className=" text-white py-15 px-5 flex flex-col gap-5">
          <h2 className="mb-3">
            Por Que Escolher a Gente?
          </h2>
          <div className="mb-3 lg:px-5">
            <p>
                Mais do que café, oferecemos uma experiência acolhedora, com qualidade em cada detalhe. Um espaço pensado para você desacelerar, aproveitar o momento e se sentir em casa.
            </p>
            <h3 className="mt-6 mb-3 font-bold">Benefícios:</h3>
            <ul>
              <li>✔ Grãos 100% selecionados</li>
              <li>✔ Baristas especializados</li>
              <li>✔ Ambiente confortável</li>
              <li>✔ Atendimento acolhedor</li>
            </ul>
          </div>
          <span className="text-center">
            <Button variant="primary" classList="px-10">
              Visite-nos
            </Button>
          </span>
        </div>
        <div className="h-125 lg:h-full md:w-full bg-[url('/cappuchino-mao.jpg')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>
      <div className="bg-primary-200 flex flex-col justify-center gap-8 py-20 col-span-1">
        <h2 className="text-4xl font-bold text-center">Happy Hour do Café!</h2>
        <span className="text-center">
          <p>Todos os dias, das 8h às 10h,</p>
          <p>10% OFF em cafés e combos da manhã.</p>
        </span>
        <span className="text-center">
          <Button variant="secondary" classList="px-10">
            Visite-nos
          </Button>
        </span>
      </div>
    </section>
  )
}
