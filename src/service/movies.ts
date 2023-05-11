import httpClient from './httpClient';

export const getUpcomingMovies = async () => {
  return httpClient.get('/movie/upcoming').then(res => res.data.results);
};

export const getNowPlayingMovies = async () => {
  return httpClient.get('/movie/now_playing').then(res => res.data.results);
};

export const getPopularMovies = async () => {
  return httpClient.get('/movie/popular').then(res => res.data.results);
};

export const getTopRatedMovies = async () => {
  return httpClient.get('/movie/top_rated').then(res => res.data.results);
};
