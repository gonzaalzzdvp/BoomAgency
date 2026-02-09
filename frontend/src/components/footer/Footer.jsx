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
    <div>
      <div className="bg-(--violetBoom) p-10 w-full flex justify-around  gap-10 text-lg">
        <div className="flex flex-col gap-10">
          <h5 className="w-100 text-white font-bold text-5xl leading-16">
            <span className="text-(--roseBoom)">¡</span>Creemos impacto juntos<span className="text-(--roseBoom)">!</span>
          </h5>
          <div className="flex gap-10">
            <Button1 text="Contrata un plan" to="/plans" />
            <Button1 text="Contáctanos" to="/contact" />
          </div>
        </div>
        <ul className="flex flex-col gap-5">
          <li className="font-semibold text-(--yellowBoom)">Servicios</li>
          <li className="text-white hover:text-(--blackBoom)">
            <Link to="/plans">Planes</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-5">
          <li className="font-semibold text-(--yellowBoom)">Compañía</li>
          <li className="text-white hover:text-(--blackBoom)">
            <Link to="/about">Sobre Nosotros</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-5">
          <li className="font-semibold text-(--yellowBoom)">Contacto</li>
          <li className="text-white">+58 412 777 7777</li>
          <li className="text-white">correo@ejemplo.com</li>
          <li className="text-white hover:text-(--blackBoom)">
            <Link to="https://www.instagram.com/boomagencyve_/" className=" flex items-center gap-3">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-3xl text-(--yellowBoom)"
              />
              Instagram
            </Link>
          </li>
          <li className="text-white hover:text-(--blackBoom)">
            <Link to="https://www.tiktok.com/@boomagencyve_" className=" flex items-center gap-3">
              <FontAwesomeIcon
                icon={faTiktok}
                className="text-3xl text-(--yellowBoom)"
              />
              Tiktok
            </Link>
          </li>
          <li className="text-white hover:text-(--blackBoom)">
            <Link to="https://www.facebook.com/mariamaldonadolairet" className=" flex items-center gap-3">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-3xl text-(--yellowBoom)"
              />
              Facebook
            </Link>
          </li>
        </ul>
      </div>
      <img src="/footer/banner.jpg" alt="" />
    </div>
  );
}
