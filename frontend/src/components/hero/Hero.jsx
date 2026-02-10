import Button1 from "../buttons/Button1";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh - 80px)] mt-30 mb-10 px-20 flex justify-center">
      <div className="flex flex-col justify-center gap-7">
        <div className="w-[70%] bg-white grid grid-cols-2 justify-items-center-safe gap-x-10 rounded-2xl">
          <h1 className="font-bold text-(--violetBoom) flex items-center text-8xl row-start-1">
            Boom
          </h1>
          <h1 className="font-bold text-(--blueBoom) flex items-center text-8xl row-start-2 col-start-1 col-end-3 justify-self-start">
            Agency
          </h1>
          <img
            src="/hero/megaphone.png"
            alt="Megaphone"
            className="w-30 row-start-1 col-start-2 flex justify-center items-center self-end"
          />
        </div>
        <p className="text-xl w-[70%] bg-white rounded-2xl">
          No hacemos marketing bonito, hacemos marketing que vende. Convertimos ideas en resultados reales y marcas invisibles en negocios imposibles de&nbsp;ignorar.
        </p>
        <Button1 text="Contáctanos" to="/contact" color={'bg-(--yellowBoom)'}/>
      </div>
      <div className="w-300">
        <video src="/hero/heroVid.mp4" autoPlay muted loop playsInline></video>
      </div>
    </div>
  );
}
