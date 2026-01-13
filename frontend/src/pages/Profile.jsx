import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate("/login");
  }, [loading, user]);

  if (loading) return <p>Cargando...</p>;
  if (!user) return null;

  return (
    <div>
      <h1>Bienvenido {user.username}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
