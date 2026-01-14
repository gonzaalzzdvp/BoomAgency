import { Link } from "react-router-dom";
import Button1 from "../buttons/Button1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAddressCard } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-50 bg-white h-20 w-full p-6 flex justify-between items-center shadow-sm">
      <Link to={"/"} className="flex justify-center items-center">
        <img
          src="/assets/BOOM-LOGO-01.png"
          alt="Logo de Boom Agency"
          className="w-32 cursor-pointer"
        />
      </Link>
      <ul className="flex gap-30">
        <li className="cursor-pointer hover:text-[var(--blackBoom)]">Nosotros</li>
        <li className="cursor-pointer hover:text-[var(--blackBoom)]">Planes</li>
        <li className="cursor-pointer hover:text-[var(--blackBoom)]">Reviews</li>
      </ul>
      <div className="flex items-center">
        <div className="px-6 flex flex-col hover:text-[--violetBoom]">
          <Link to={"/login"} className="h-full flex justify-center items-center">
            <FontAwesomeIcon icon={faUser} className="text-2xl text-[var(--blueBoom)] hover:text-[var(--violetBoom)]" />
          </Link>
          <span className="">Ingresar</span>
        </div>
        <Button1 text="Contacto" to="/contact" className="navbar" />
      </div>
    </div>
  );
}
