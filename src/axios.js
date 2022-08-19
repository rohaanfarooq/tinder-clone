import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-for-clone.herokuapp.com",
});

export default instance;
