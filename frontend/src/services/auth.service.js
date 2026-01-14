import api from "../api/axios";

export const login = (email, password) => {
  return api.post("/login/", { email, password });
};

export const register = (username, email, password) => {
  return api.post("/register/", { username, email, password });
};

export const logout = async () => {
  return await api.post("/logout/");
};

export const getProfile = async () => {
  return await api.get("/profile/");
};
