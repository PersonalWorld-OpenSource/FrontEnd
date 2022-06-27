import axios from "axios";
export default axios.create({
  baseURL: "https://personalworld.azurewebsites.net",
  headers: { "Content-type": "application/json" },
});
