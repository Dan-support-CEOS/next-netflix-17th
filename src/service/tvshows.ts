import httpClient from './httpClient';

export const getPopularTvShows = async () => {
  return httpClient.get('/movie/popular').then(res => res.data.results);
};

export const getTopRatedTvShows = async () => {
  return httpClient.get('/movie/top_rated').then(res => res.data.results);
};
