import Button1 from "../buttons/Button1";

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-80px)] mt-20 mb-10 w-full px-6 md:px-16 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* TEXT SIDE */}
      <div className="flex flex-col gap-8 max-w-xl text-center md:text-left">
        {/* TITLE */}
        <div
          className="flex flex-col md:flex-row items-center md:items-start
         justify-center md:justify-start gap-7"
        >
          <div className="flex flex-col leading-none">
            <h1 className="font-bold text-(--violetBoom) text-6xl sm:text-xl md:text-7xl">
              Boom
            </h1>
            <h1 className="font-bold text-(--blueBoom) text-6xl sm:text-6xl md:text-7xl">
              Agency
            </h1>
          </div>
          <div>
            <img
              src="/hero/megaphone.png"
              alt="Megaphone"
              className="w-20 sm:w-16 md:w-20 self-start animate-bounce"
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-base sm:text-lg text-gray-700">
          No hacemos marketing bonito, hacemos marketing que vende. Convertimos
          ideas en resultados reales y marcas invisibles en negocios imposibles
          de ignorar.
        </p>

        {/* CTA */}
        <div className="flex justify-center md:justify-start">
          <Button1
            text="Contáctanos"
            to="/contact"
            className=""
            bgColor="var(--yellowBoom)"
          />
        </div>
      </div>

      {/* VIDEO SIDE */}
      <div className="w-full md:w-100 hidden md:block">
        <video src="/hero/heroVid.mp4" autoPlay muted loop playsInline />
      </div>
    </section>
  );
}
