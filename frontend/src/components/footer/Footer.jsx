import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import Button1 from "../buttons/Button1";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-(--violetBoom) px-6 py-12 text-lg">
        
        {/* MOBILE FIRST CONTAINER */}
        <div className="flex flex-col gap-12 md:grid md:grid-cols-4 md:gap-16">

          {/* CTA SECTION - SIEMPRE PRIMERO */}
          <div className="flex flex-col gap-8 md:col-span-2">
            <h5 className="text-white font-bold text-3xl leading-tight md:text-5xl md:leading-16">
              <span className="text-(--roseBoom)">¡</span>
              Creemos impacto juntos
              <span className="text-(--roseBoom)">!</span>
            </h5>

            {/* BOTONES PRIMERO EN MOBILE */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button1 text="Contrata un plan" to="/plans" />
              <Button1 text="Contáctanos" to="/contact" />
            </div>
          </div>

          <div className="w-150 flex flex-col md:flex-row justify-between gap-7">
            {/* SERVICIOS */}
          <ul className="flex flex-col gap-4">
            <li className="font-semibold text-(--yellowBoom)">Servicios</li>
            <li className="text-white hover:text-(--yellowBoom) transition-colors">
              <Link to="/plans">Planes</Link>
            </li>
          </ul>

          {/* COMPAÑÍA */}
          <ul className="flex flex-col gap-4">
            <li className="font-semibold text-(--yellowBoom)">Compañía</li>
            <li className="text-white hover:text-(--yellowBoom) transition-colors">
              <Link to="/about">Sobre Nosotros</Link>
            </li>
          </ul>

          {/* CONTACTO */}
          <ul className="flex flex-col gap-4">
            <li className="font-semibold text-(--yellowBoom)">Contacto</li>
            <li className="text-white">+58 412 777 7777</li>
            <li className="text-white">correo@ejemplo.com</li>

            <li className="text-white hover:text-(--yellowBoom) transition-colors">
              <Link
                to="https://www.instagram.com/boomagencyve_/"
                className="flex items-center gap-3"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl text-(--yellowBoom)"
                />
                Instagram
              </Link>
            </li>

            <li className="text-white hover:text-(--yellowBoom) transition-colors">
              <Link
                to="https://www.tiktok.com/@boomagencyve_/"
                className="flex items-center gap-3"
              >
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="text-2xl text-(--yellowBoom)"
                />
                Tiktok
              </Link>
            </li>

            <li className="text-white hover:text-(--yellowBoom) transition-colors">
              <Link
                to="https://www.facebook.com/mariamaldonadolairet"
                className="flex items-center gap-3"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-2xl text-(--yellowBoom)"
                />
                Facebook
              </Link>
            </li>
          </ul>
          </div>
        </div>
      </div>

      {/* BANNER */}
      <img
        src="/footer/banner.jpg"
        alt="Footer banner"
        className="w-full object-cover"
      />
    </footer>
  );
}
