import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://food-truck-trackr-api.herokuapp.com",
    headers: {
      Authorization: token,
    },
  });
};
