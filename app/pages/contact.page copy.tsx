import Image from "next/image";
import maps from "../assets/maps.png";

export default function ContatoPage() {
  return (
    <main className="h-[50rem] md:h-[38.125rem] flex flex-col items-center justify-center bg-[#E9F8FF] mt-8">
      <div className="w-3/4 flex flex-col md:flex-row">
        <section className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h1 className="text-5xl font-bold text-pink-700 mb-4">Contato</h1>
          <p className="text-lg mb-4">Fazenda Escadinha, 54, Zona Rural</p>
          <p className="text-lg mb-4">CEP: 44575-000</p>
          <p className="text-2xl font-bold text-pink-700">Horarios:</p>
          <p className="text-lg mt-4 font-bold">Segundas aos Sábado</p>
          <p className="text-lg mb-4">8:00 a 21:00 hrs</p>
          <p className="text-lg font-bold">Domingo</p>
          <p className="text-lg mb-4">10:00 às 17:00 hrs</p>
          <p className="text-lg font-bold">Telefone</p>
          <p className="text-lg">+55 75 9 8200-8306</p>
        </section>
        <section className="w-full md:w-2/3 flex justify-center mt-8 md:mt-0">
          <Image
            src={maps}
            alt="Mapa de localização"
            className="rounded-lg shadow-lg cursor-pointer object-cover"
            onClick={() =>
              window.open("https://maps.app.goo.gl/uw2VLdkY4t6gDq2H8")
            }
          />
        </section>
      </div>
      <footer className="w-full text-center mt-16">
        <p
          className="text-pink-700 cursor-pointer"
          onClick={() => window.open("https://www.linkedin.com/in/algeferson/")}
        >
          Made by Geferson Lopes
        </p>
      </footer>
    </main>
  );
}
