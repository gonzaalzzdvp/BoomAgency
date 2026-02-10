import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

import Button1 from "../../components/buttons/Button1";

export default function Me() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    toast.success("Logged Out");
  };

  return (
    <div className="min-h-screen py-40 px-25">
      <h1>Hello {user.email}</h1>
      <button onClick={handleLogout}>
        <Button1 text={"Logout"} className=""></Button1>
      </button>
    </div>
  );
}
