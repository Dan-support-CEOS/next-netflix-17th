import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { key: process.env.NEXT_PUBLIC_MOVIEDB_API_KEY },
});

export default httpClient;
