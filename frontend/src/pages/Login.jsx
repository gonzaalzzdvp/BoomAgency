import { useState, useContext } from "react";
import { login } from "../services/auth.service";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { fetchUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      await fetchUser();
      navigate("/profile");
    } catch (error) {
      alert("Credenciales inválidas");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
