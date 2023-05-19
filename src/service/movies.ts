import httpClient from './httpClient';

export const getUpcomingMovies = async () => {
  return httpClient.get('/movie/upcoming').then(res => res.data.results);
};

export const getNowPlayingMovies = async () => {
  return httpClient.get('/movie/now_playing').then(res => res.data.results);
};

export const getHorrorMovies = async () => {
  return httpClient
    .get('/discover/movie', { params: { with_genres: 27 } })
    .then(res => res.data.results);
};
