'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getNowPlayingMovies, searchMovies } from '../../service/movies';
import { IMovie } from '@/interface/interface';
import MovieList from '@/components/SearchPage/MovieList';
import Footer from '../../components/Footer';
import styled from 'styled-components';

export default function HomePage() {
  const [searchText, setSearchText] = useState('');

  const { data: nowPlayingMovies } = useQuery<IMovie[]>(
    ['nowPlayingMovies'],
    getNowPlayingMovies,
  );

  const { data: searchedMovies } = useQuery<IMovie[]>(
    ['searchedMovies', searchText],
    () => searchMovies(searchText),
  );

  return (
    <SearchPageBox>
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />

      <TiTle>Top Searches</TiTle>
      {!searchText ? (
        <MovieList videos={nowPlayingMovies} />
      ) : (
        <MovieList videos={searchedMovies} />
      )}

      <Footer />
    </SearchPageBox>
  );
}

const SearchPageBox = styled.div`
  width: 375px;
`;

const TiTle = styled.h2`
  color: white;
  font-size: 26.75px;
  font-weight: 700;
`;
