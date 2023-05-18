//import httpClient from './httpClient';

const baseURL = 'https://api.themoviedb.org/3';

export const getUpcomingMovies = async () => {
  const response = await fetch(
    `${baseURL}/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}`,
    {
      //method: 'GET',
      cache: 'no-store',
    },
  );
  const data = await response.json();
  return data.results;
};

export const getNowPlayingMovies = async () => {
  const response = await fetch(
    `${baseURL}/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}`,
    {
      cache: 'no-store',
    },
  );
  const data = await response.json();
  return data.results;
};

export const getHorrorMovies = async () => {
  const response = await fetch(
    `${baseURL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}&with_genres=27`,
    {
      cache: 'no-store',
    },
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (searchText: string) => {
  const response = await fetch(
    `${baseURL}/search/movie?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}&query=${searchText}`,
    {
      cache: 'no-store',
    },
  );
  const data = await response.json();
  return data.results;
};

/*
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

export const searchMovies = async (searchText: string) => {
  return httpClient
    .get('/search/movie', { params: { query: searchText } })
    .then(res => res.data.results);
};
*/
