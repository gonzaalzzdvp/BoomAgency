import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import Button1 from "../buttons/Button1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faArrowRightToBracket,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { isAuthenticated } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-screen bg-white shadow-sm">
      <div className="h-20 px-6 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/assets/BOOM-LOGO-01.png"
            alt="Logo de Boom Agency"
            className="w-32"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-12 font-medium">
          <li className="cursor-pointer hover:text-(--blackBoom)">Nosotros</li>
          <li className="cursor-pointer hover:text-(--blackBoom)">Planes</li>
          <li className="cursor-pointer hover:text-(--blackBoom)">Reviews</li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-6">
          {!isAuthenticated ? (
            <Link
              to="/login-register"
              className="flex flex-col items-center hover:text-(--violetBoom)"
            >
              <FontAwesomeIcon
                icon={faArrowRightToBracket}
                className="text-2xl text-(--blueBoom)"
              />
              <span>Ingresar</span>
            </Link>
          ) : (
            <Link
              to="/profile"
              className="flex flex-col items-center hover:text-(--violetBoom)"
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-2xl text-(--blueBoom)"
              />
              <span>Profile</span>
            </Link>
          )}

          <Button1
            text="Contacto"
            to="http://wa.me//+584126112094"
            className="small"
            bgColor="var(--roseBoom)"
            target="_blank"
          />
        </div>

        {/* HAMBURGER BUTTON (MOBILE) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-(--blueBoom)"
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-6 pb-6 bg-white shadow-md">
          <li className="list-none cursor-pointer">Nosotros</li>
          <li className="list-none cursor-pointer">Planes</li>
          <li className="list-none cursor-pointer">Reviews</li>

          {!isAuthenticated ? (
            <Link
              to="/login-register"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faArrowRightToBracket} />
              Ingresar
            </Link>
          ) : (
            <Link
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faUser} />
              Profile
            </Link>
          )}

          <Button1
            text="Contacto"
            to="http://wa.me//+584126112094"
            className="small"
            bgColor="var(--roseBoom)"
            target="_blank"
          />
        </div>
      </div>
    </nav>
  );
}
