import Carousel from "../carousel/Carousel";
import "../../styles/carousel.css";
import Mafer from "/carousel/Mafer.png";
import Hector from "/carousel/Hector.png";
import Amanda from '/carousel/amanda.png'

export default function AboutHero() {
  const users = [
    {
      image: Mafer,
      name: "María Maldonado",
      text: "CEO",
    },
    {
      image: Mafer,
      name: "Glennis Ybirma",
      text: "CEO",
    },
    {
      image: Amanda,
      name: "Amanda González",
      text: "Graphic Designer",
    },
    {
      image: Mafer,
      name: "Edailyn Ibarra",
      text: "Community",
    },
    {
      image: Hector,
      name: "Héctor González",
      text: "Web Developer",
    },
  ];

  return (
    <div className="w-full my-10 flex flex-col items-center font-semibold">
      <h3 className="text-4xl text-center w-[70%] mt-20">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
        recusandae quibusdam nulla?
      </h3>

      <div className="max-w-full">
        <div id="services" className="carousel">
          {users.map((user, index) => (
            <Carousel key={index} image={user.image} name={user.name} text={user.text} />
          ))}
        </div>
      </div>
    </div>
  );
}
