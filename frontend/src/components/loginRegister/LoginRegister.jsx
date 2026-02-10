import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

import Button1 from "../buttons/Button1";
import "../../styles/LoginRegister.css";

export default function LoginRegister() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

  // LOGIN
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await login(emailLogin, passwordLogin);
      toast.success("Welcome 👋");
      navigate("/profile");
    } catch {
      toast.error("Invalid credentials");
    }
  };

  // REGISTER
  const [username, setUsername] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Creating account...");

    try {
      await api.post("/users/register/", {
        username,
        email: emailRegister,
        password: passwordRegister,
      });

      toast.success("Cuenta creada correctamente", {
        id: loadingToast,
      });

      setIsActive(false);
    } catch {
      toast.error("Error al registrar usuario", {
        id: loadingToast,
      });
    }
  };

  return (
    <div className="principal">
      <div className={`container ${isActive ? "active" : ""}`}>

        {/* SIGN UP */}
        <div className="form-container sign-up">
          <form onSubmit={handleSubmitRegister}>
            <h2>Registro</h2>
            <input
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={emailRegister}
              onChange={(e) => setEmailRegister(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={passwordRegister}
              onChange={(e) => setPasswordRegister(e.target.value)}
              required
            />
            <button type="submit" className="h-10">
              <Button1 text={'Registrarse'} color={'bg-(--roseBoom)'} ></Button1>
            </button>
          </form>
        </div>

        {/* SIGN IN */}
        <div className="form-container sign-in">
          <form onSubmit={handleSubmitLogin}>
            <h2>Iniciar Sesión</h2>
            <input
              type="email"
              placeholder="Email"
              value={emailLogin}
              onChange={(e) => setEmailLogin(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
              required
            />
            <button type="submit" className="">
              Ingresar
            </button>
          </form>
        </div>

        {/* TOGGLE */}
        <div className="toggle-container">
          <div className="toggle">

            <div className="toggle-panel toggle-left">
              <h1 className="text-3xl">Bienvenido de&nbsp;vuelta</h1>
              <p>Coloca tus datos para ingresar&nbsp;nuevamente</p>
              <button type="button" onClick={() => setIsActive(false)}>
                Iniciar Sesión
              </button>
            </div>

            <div className="toggle-panel toggle-right">
              <h1>Bienvenido, amigo</h1>
              <p>Regístrate para obtener toda la&nbsp;información</p>
              <button type="button" onClick={() => setIsActive(true)}>
                Registrarse
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
