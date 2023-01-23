import axios from "axios";
//front end talking to backend
export const API = {
  saveUser: (user) => axios.post("api/users", user),
  getUser: (user) => axios.get("api/users/" + user),
  removeUser: (user) => axios.delete("api/users", user),
};
//try to implement a put route before next session
