import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import LoginRegister from "./pages/Login&Register";
import Profile from "./pages/Profile";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import PrivateRoute from "./auth/ProtectedRoute";
import PublicRoute from "./auth/PublicRoute";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login-register"
            element={
              <PublicRoute>
                <LoginRegister />
              </PublicRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
