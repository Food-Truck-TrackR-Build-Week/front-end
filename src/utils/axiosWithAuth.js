import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMDAwMDEsInVzZXJuYW1lIjoiZGluZXIxIiwiaWF0IjoxNTk4MTIwMzA5LCJleHAiOjE1OTgyMDY3MDl9.zru_IybKSCXHvwGatttI9owHUlhqhoPj4p3NjXobY64"
  );

  return axios.create({
    baseURL: "https://food-truck-trackr-api.herokuapp.com",
    headers: {
      // authorization: `Bearer ${token}`,
      authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMDAwMDEsInVzZXJuYW1lIjoiZGluZXIxIiwiaWF0IjoxNTk4MTkxMjk0LCJleHAiOjE1OTgyNzc2OTR9.xb9N30RlfXDG8IwBOasd0ssPamck1XA8rhkYCU_eKjo",
    },
  });
};
