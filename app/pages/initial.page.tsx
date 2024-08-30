import Image from "next/image";
import logo from "../assets/logo.png";

export default function Initial() {
  return (
    <main className="my-8 md:my-0 md:h-[38.125rem] flex flex-col items-center justify-center bg-white">
      <header className="text-center">
        <h1 className="text-7xl font-medium text-pink-700 tracking-wide">
          Emilly
        </h1>
        <h2 className="text-3xl text-pink-600 mt-2">Cílios Perfeitos</h2>
      </header>

      <article className="w-3/4 mt-8 text-justify text-2xl font-medium text-black px-6">
        Transforme sua expressão com cílios que destacam sua beleza natural. Com
        técnicas avançadas e cuidados especiais, oferecemos o realce ideal para
        cada ocasião. Agende já seu atendimento!
      </article>

      <section className="mt-10 p-4 flex flex-col md:flex-row md:justify-between items-center w-3/4">
        <figure className="flex flex-col md:flex-row-reverse md:w-2/3 px-3 items-center text-center">
          <Image src={logo} alt="Emilly" className="mt-4 w-32 h-32" />
          <figcaption className="mt-8 md:mr-8 md:m-auto">
            <h3 className="text-xl font-bold text-pink-600">
              Olá! Eu sou a Emilly. Bem-vinda ao meu cantinho dos cílios
              perfeitos.
            </h3>
            <p className="text-gray-500 mt-2 text-base leading-4">
              Venha descobrir como um toque de mágica pode transformar seu
              olhar. Com cílios impecáveis e personalizados, você vai se sentir
              mais confiante e radiante, pronta para qualquer ocasião.
            </p>
          </figcaption>
        </figure>
        <button className="px-6 py-2 h-12 w-48 bg-pink-600 text-white font-semibold rounded-full mt-10">
          Agende agora
        </button>
      </section>
    </main>
  );
}
