'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getNowPlayingMovies, searchMovies } from '../../service/movies';
import { IMovie } from '@/interface/interface';
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

      {!searchText ? (
        <ul>
          {nowPlayingMovies &&
            nowPlayingMovies.map(video => <p>{video.title}</p>)}
        </ul>
      ) : (
        <ul>
          {searchedMovies && searchedMovies.map(video => <p>{video.title}</p>)}
        </ul>
      )}

      <Footer />
    </SearchPageBox>
  );
}

const SearchPageBox = styled.div`
  width: 375px;
  background-color: white;
`;
