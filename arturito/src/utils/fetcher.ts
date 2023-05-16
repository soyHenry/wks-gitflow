import axios from 'axios';

// Possible alternative: 'https://swapi.dev/api'
const baseURL = 'https://swapi.dev/api';

export const swGet = () =>
  axios.get(`${baseURL}/planets`).then((res) => res.data);
