import { useState, useContext } from "react";
import Button1 from "../buttons/Button1";
import "../../styles/loginRegister.css";
import { login, register } from "../../services/auth.service";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginRegister() {
  const [isActive, setIsActive] = useState(false);

  // REGISTER
  const [username, setUsername] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  // LOGIN
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const { fetchUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(username, emailRegister, passwordRegister);
      await fetchUser();
      navigate("/profile");
    } catch (error) {
      alert("Error al registrarse");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(emailLogin, passwordLogin);
      await fetchUser();
      navigate("/profile");
    } catch (error) {
      alert("Credenciales inválidas");
    }
  };

  return (
    <div className="principal">
      <div className={`container ${isActive ? "active" : ""}`}>

        {/* SIGN UP */}
        <div className="form-container sign-up">
          <form onSubmit={handleRegister}>
            <h2>Create Account</h2>
            <input
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={emailRegister}
              onChange={(e) => setEmailRegister(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={passwordRegister}
              onChange={(e) => setPasswordRegister(e.target.value)}
            />
            <Button1 text="Registrarse" className="navbar" />
          </form>
        </div>

        {/* SIGN IN */}
        <div className="form-container sign-in">
          <form onSubmit={handleLogin}>
            <h2>Iniciar Sesión</h2>
            <input
              type="email"
              placeholder="Email"
              value={emailLogin}
              onChange={(e) => setEmailLogin(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
            />
            <Button1 text="Ingresar" className="navbar" />
          </form>
        </div>

        {/* TOGGLE */}
        <div className="toggle-container">
          <div className="toggle">

            <div className="toggle-panel toggle-left">
              <h1>Bienvenido de vuelta</h1>
              <p>Coloca tus datos para ingresar nuevamente</p>
              <button type="button" onClick={() => setIsActive(false)}>
                Iniciar Sesión
              </button>
            </div>

            <div className="toggle-panel toggle-right">
              <h1>Bienvenido, amigo</h1>
              <p>Regístrate para obtener toda la información</p>
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
