import Image from "next/image";
import client from "../assets/client.png";

export default function ClientBenefitsPage() {
  return (
    <main className="h-[39.225rem] bg-white my-8 md:mt-20 relative">
      <div className="absolute inset-0">
        <Image
          src={client}
          alt="Imagem de fundo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <section className="relative z-10 text-center p-8 max-w-4xl mx-auto flex flex-col h-full">
        <h1 className="text-4xl font-bold text-pink-600 mb-8">
          Benefícios de clientes
        </h1>
        <p className="text-2xl font-light text-black text-justify">
          Clientes novatos que chegaram através do nosso site ganham 50% de
          desconto! Aproveite essa oportunidade única para experimentar nossos
          serviços com metade do preço.
        </p>
      </section>
    </main>
  );
}
