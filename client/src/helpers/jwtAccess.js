import axios from "axios";


const user = window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : {}

//const token = user ? user.UserInfo.token : ""

const AuthAxios = axios.create({
  baseURL: "http://localhost:9000",
  headers: {
    authorization: `Bearer `,
  },
});

export default AuthAxios;
