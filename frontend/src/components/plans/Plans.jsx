import PlansCard from "./PlansCard";

import "../../styles/plans.css";
import "../../styles/animations/animations.css";

export default function Plans() {
  const plan1 = [
    "2 publicaciones semanales dependiendo de lo que solicite el cliente",
    "Historias diarias",
    "4 reels mensuales",
    "2 diseños gráficos",
    "Reporte mensual",
  ];
  const plan2 = [
    "12 Publicaciones mensuales",
    "Historias diarias",
    "6 reels mensuales",
    "Campañas ADS",
    "1 Visita para generar contenido",
    "Fotos + diseño gráfico",
    "Reporte mensual",
  ];
  const plan3 = [
    "12 Publicaciones mensuales",
    "Historias diarias",
    "8 reels mensuales",
    "Campañas ADS",
    "2 Visitas para generar contenido",
    "Fotos orgánicas",
    "Diseño gráfico",
    "Reporte mensual",
  ];
  const plan4 = [
    "Adaptado a las necesidades del cliente",
    "Historias",
    "Reels mensuales",
    "Campañas ADS",
    "Visitas para generar contenido",
    "Fotos + reels",
    "Reporte mensual",
  ];

  return (
    <div className="my-20 text-center text-4xl font-semibold flex flex-col justify-center items-center gap-10">
      <div className="flex gap-10 items-center">
        <h3 className="uppercase font-bold text-(--roseBoom)">
          Conoce Nuestros{" "}
          <span className="hover-text-grow text-(--blueBoom)">Planes</span>
        </h3>
      </div>
      <div className="my-10 flex flex-col lg:grid lg:grid-cols-2 gap-20">
        <PlansCard
          planName="Flama"
          description={plan1}
          price="100,00"
          img="/plans/flame.png"
          color="--violetBoom"
        />
        <PlansCard
          planName="Boom"
          description={plan2}
          price="150,00"
          img="/plans/boomLogo.png"
          color="--roseBoom"
        />
        <PlansCard
          planName="Oppenheimer"
          description={plan3}
          price="200,00"
          img="/plans/atomic.png"
          color="--blueBoom"
        />
        <PlansCard
          planName="Personalizado"
          description={plan4}
          price="A consultar"
          img="/plans/personalizado.png"
          color="--yellowBoom"
        />
      </div>
    </div>
  );
}
