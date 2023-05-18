import httpClient from './httpClient';

export const getAnimations = async () => {
  return httpClient
    .get('/discover/tv', { params: { with_genres: 16 } })
    .then(res => res.data.results);
};

export const getTopRatedTvShows = async () => {
  return httpClient.get('/tv/top_rated').then(res => res.data.results);
};
