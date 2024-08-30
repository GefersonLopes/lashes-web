import Image from "next/image";
import promo1Image from "../assets/promo_1.png";
import promo2Image from "../assets/promo_2.png";

export default function PromoPage() {
  return (
    <main className="my-8 md:h-[39.225rem]">
      <section className="w-full h-full flex flex-col md:flex-row">
        <article className="relative w-full md:w-1/2 h-[50vh] md:h-auto">
          <Image
            src={promo1Image}
            alt="Procedimento de Cílios"
            layout="fill"
            objectFit="cover"
          />
          <footer className="absolute top-8 left-4 md:left-8">
            <a
              href="#"
              className="px-6 py-2 h-16 w-26 bg-pink-600 text-white font-semibold rounded-full"
            >
              Ver mais
            </a>
          </footer>
          <div className="absolute z-10 w-[100vw] -bottom-10 left-0 right-0 text-3xl md:text-6xl font-bold bg-pink-600 text-white p-2 flex items-center justify-center">
            50% OFF
          </div>
        </article>
        <article className="relative w-full md:w-1/2 h-[50vh] md:h-auto mt-8 md:mt-0">
          <Image
            src={promo2Image}
            alt="Procedimento de Cílios"
            layout="fill"
            objectFit="cover"
          />
        </article>
      </section>
    </main>
  );
}
