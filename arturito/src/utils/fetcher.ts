import axios from 'axios';

// Possible alternative: ''
const baseURL = 'https://swapi.dev/api';

export const swGet = (url: string) =>
  axios.get(url, { baseURL }).then((res) => res.data);
