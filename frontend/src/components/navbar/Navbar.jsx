import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import Button1 from "../buttons/Button1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { isAuthenticated } = useAuth();

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
        <li className="cursor-pointer hover:text-(--blackBoom)">Nosotros</li>
        <li className="cursor-pointer hover:text-(--blackBoom)">Planes</li>
        <li className="cursor-pointer hover:text-(--blackBoom)">Reviews</li>
      </ul>
      <div className="flex items-center cursor-pointer hover:text-(--violetBoom)">
        {!isAuthenticated && (
          <>
            <div className="px-6 flex flex-col hover:text-(--violetBoom)">
              <Link
                to={"/login-register"}
                className="h-full flex justify-center items-center"
              >
                <FontAwesomeIcon
                  icon={faArrowRightToBracket}
                  className="text-2xl text-(--blueBoom) hover:text-(--violetBoom)"
                />
              </Link>
              <span className="">Ingresar</span>
            </div>
          </>
        )}

        {isAuthenticated && (
          <>
            <div className="px-6 flex flex-col hover:text-(--violetBoom)">
              <Link
                to={"/login-register"}
                className="h-full flex justify-center items-center"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-2xl text-(--blueBoom) hover:text-(--violetBoom)"
                />
              </Link>
              <span className="">Profile</span>
            </div>
          </>
        )}
        <Button1 text="Contacto" to="http://wa.me//+584126112094" className="small" bgColor="var(--roseBoom)" target="_blank" />
      </div>
    </div>
  );
}
