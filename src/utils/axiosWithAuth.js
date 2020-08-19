import axios from "axios";

export const axiosWithAuth = () => {
  // Will add Token name once provided by backend
  const token = localStorage.getItem("");

  // Will add baseURL once provided by backend
  return axios.create({
    baseURL: "",
    headers: {
      Authorization: token,
    },
  });
};
