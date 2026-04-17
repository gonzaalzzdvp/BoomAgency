import TeamCard from "./TeamCard";
import Mafer from "/carousel/Mafer.png";
import Hector from "/carousel/Hector.png";
import Amanda from "/carousel/Amanda.png";
import Glennis from "/carousel/Glennis.png";


export default function AboutHero() {
  return (
    <div className="lg:h-screen w-full py-20 flex flex-col justify-center items-center gap-20">
      <h3 className="text-3xl md:text-4xl font-bold text-(--blueBoom) uppercase">Nuestro equipo</h3>
      <div className="w-full flex flex-col justify-center items-center md:grid md:grid-cols-2 md:justify-items-center lg:flex lg:flex-row gap-10">
        <TeamCard img={Mafer} name="Mafer Maldonado" workstation="CEO" />
        <TeamCard img={Glennis} name="Glennis Ybirma" workstation="CEO" />
        <TeamCard img={Amanda} name="Amanda Gonzalez" workstation="CEO" />
        <TeamCard img={Mafer} name="Mafer" workstation="CEO" />
        <TeamCard img={Hector} name="Hector Gonzalez" workstation="CEO" />
      </div>
    </div>
  );
}
