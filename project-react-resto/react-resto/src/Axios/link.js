import axios from "axios";

const url = "http://localhost:8000/api";
let token = "a3zgUOGQkcVqFKYc56zOPqzUIRnbgZ69pOGvZaYQ";

export const link = axios.create({
  baseURL: url,
  headers: {
    api_token: token,
  },
});
