import axios from "axios";
export const API = {
  saveUser: (user) => axios.post("api/users", user),
};
