import Image from "next/image";
import client from "../assets/client.png";

export default function ClientBenefitsPage() {
  return (
    <main className="h-[38.125rem] flex bg-white my-8">
      <div className="flex-1 relative w-full h-[700px] flex items-center justify-center">
        <Image
          src={client}
          alt="Imagem de fundo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />

        <section className="relative z-10 text-center p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-pink-600 mb-8">
            Benefícios de clientes
          </h1>
          <p className="text-2xl font-light text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            dignissim vel risus at eleifend. Phasellus imperdiet dui non arcu
            ullamcorper, ac vestibulum nisl lobortis.
          </p>
        </section>
      </div>
    </main>
  );
}
