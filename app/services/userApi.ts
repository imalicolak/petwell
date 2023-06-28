import api from "./apiConfig.ts";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Token ${localStorage.getItem("knox") || null}`);
  });
};

export const getUser = async () => {
  try {
    let token = await getToken();

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    };

    const response = await api.get("/profile", { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (userData: Object) => {
  try {
    const response = await api.post("/register", userData);
    localStorage.setItem("knox", response.data["token"]);
    return response.data["token"];
  } catch (error) {
    throw error;
  }
};

export const signInUser = async (userData: Object) => {
  try {
    const response = await api.post("signin", userData);
    localStorage.setItem("knox", response.data["token"]);
    return response.data["token"];
  } catch (error) {
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    localStorage.removeItem("knox");
    return true;
  } catch (error) {
    throw error;
  }
};
