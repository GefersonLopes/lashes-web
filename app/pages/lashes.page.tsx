import Image from "next/image";
import lashesImage from "../assets/lashes.png";

export default function LashesPage() {
  return (
    <main className="h-[38.125rem] bg-[#F1B9C6] relative">
      <div className="absolute inset-0 md:hidden">
        <Image
          src={lashesImage}
          alt="Lashes"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-50"
        />
      </div>
      
      <section className="w-full h-full flex flex-col md:flex-row items-center relative z-10">
        <figure className="hidden md:block w-full md:w-1/2">
          <Image src={lashesImage} alt="Lashes" className="w-full h-full max-h-[610px]" />
        </figure>
        <article className="flex-1 text-center md:text-left p-4 flex flex-col gap-10 text-white md:text-black">
          <header>
            <h1 className="text-5xl font-bold text-pink-600 text-center">
              Lashes
            </h1>
          </header>
          <p className="text-justify text-2xl font-medium text-black px-6">
            Explore nossa seleção de cílios, incluindo o delicado e natural
            &quot;Maria Lashes&quot;, os &quot;Volumosos&quot; para um olhar intenso e marcante, e
            os &quot;Glam Lashes&quot; para um efeito dramático e glamouroso. Escolha o
            estilo que combina com você e realce seu olhar!
          </p>
          <footer className="flex justify-center">
            <button className="px-6 py-2 h-12 w-26 bg-pink-600 text-white font-semibold rounded-full">
              Agendar
            </button>
          </footer>
        </article>
      </section>
    </main>
  );
}
