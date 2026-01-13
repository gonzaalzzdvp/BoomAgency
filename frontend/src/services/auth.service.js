import api from "../api/axios";

export const register = async (username, password) => {
  return await api.post("/register/", { username, password });
};

export const login = async (username, password) => {
  return await api.post("/login/", { username, password });
};

export const logout = async () => {
  return await api.post("/logout/");
};

export const getProfile = async () => {
  return await api.get("/profile/");
};
