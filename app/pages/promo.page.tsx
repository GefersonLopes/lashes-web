import Image from "next/image";
import promo1Image from "../assets/promo_1.png";
import promo2Image from "../assets/promo_2.png";

export default function PromoPage() {
  return (
    <main className="h-[38.125rem] bg-white my-8">
      <section className="w-full h-full flex flex-col md:flex-row">
        <article className="h-1/2 w-full md:w-1/2 relative">
          <figure>
            <Image
              src={promo1Image}
              alt="Procedimento de Cílios"
              className="w-full h-full object-cover"
            />
            <figcaption className="sr-only">
              Imagem de promoção de procedimento de cílios
            </figcaption>
          </figure>
          <footer className="absolute top-10 md:bottom-8 left-8">
            <a
              href="#"
              className="px-6 py-2 h-12 w-26 bg-pink-600 text-white font-semibold rounded-full"
            >
              Ver mais
            </a>
          </footer>
          <div className="absolute -bottom-20 text-6xl font-bold bg-pink-600 text-white w-[100vw] h-20 flex items-center justify-center">
            50% OFF
          </div>
        </article>
        <article className="w-full md:w-1/2 h-1/2">
          <figure>
            <Image
              src={promo2Image}
              alt="Procedimento de Cílios"
              className="w-full h-full object-cover"
            />
            <figcaption className="sr-only">
              Imagem de promoção de procedimento de cílios
            </figcaption>
          </figure>
        </article>
      </section>
    </main>
  );
}
