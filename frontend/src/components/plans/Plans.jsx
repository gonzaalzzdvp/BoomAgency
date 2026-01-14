import { Link } from "react-router-dom";
import Button1 from "../buttons/Button1";
import "../../styles/plans.css"

export default function Plans() {
  return (
    <div className="my-20 text-center text-4xl font-semibold flex flex-col justify-center items-center">
      <div className="flex gap-10 items-center">
        <div className="h-18 w-3 bg-[var(--roseBoom)] rounded-2xl"></div>
        <h3 className="uppercase font-bold text-[var(--roseBoom)]">Conoce Nuestros <span className="text-[var(--blueBoom)]">Planes</span></h3>
        <div className="h-18 w-3 bg-[var(--roseBoom)] rounded-2xl"></div>
      </div>
      <div className="my-10 grid grid-cols-4 gap-10">
        <Link to="/plans" className="plans">
          <img
            src="/plans/flame.png"
            alt="Flama"
            className="w-50 rounded-t-2xl"
          />
          <p className="">
            Flama
          </p>
        </Link>
        <Link to="/plans" className="plans">
          <img
            src="/plans/boomLogo.png"
            alt="Boom"
            className="w-50 rounded-t-2xl"
          />
          <p className="">
            Boom
          </p>
        </Link>
        <Link to="/plans" className="plans">
          <img
            src="/plans/atomic.png"
            alt="Oppenheimer"
            className="w-50 rounded-t-2xl"
          />
          <p className="">
            Oppenheimer
          </p>
        </Link>
        <Link to="/plans" className="plans">
          <img
            src="/plans/personalizado.png"
            alt="Personalizado"
            className="w-50 rounded-t-2xl"
          />
          <p className="">
            Personalizado
          </p>
        </Link>
      </div>
      <Button1 text="Todos los Planes" to="/plans" />
    </div>
  );
}
