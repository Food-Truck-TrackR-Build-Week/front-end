import axios from "axios";

export const axiosWithAuth = () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMDAwMDEsInVzZXJuYW1lIjoiZGluZXIxIiwiaWF0IjoxNTk4NDkzMjgxLCJleHAiOjE1OTg1Nzk2ODF9.82GS0lBsRnj5adfRG5oZsybBcVEjbWVZKaDSGylVq88"

  return axios.create({
    baseURL: "https://food-truck-trackr-api.herokuapp.com",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
