import axios from "axios";

export const swGetStarships = () =>
  axios.get('https://swapi.dev/api/starships/').then((res) => res.data); 