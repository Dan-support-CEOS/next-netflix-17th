'use client';

import { useQuery } from '@tanstack/react-query';
import { searchMovies } from '../../service/movies';
import { IMovie } from '@/interface/interface';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import { useState } from 'react';

const SearchPageBox = styled.div`
  width: 375px;
  background-color: white;
`;

export default function HomePage() {
  const [searchText, setSearchText] = useState('');

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

      <ul>
        {searchedMovies && searchedMovies.map(video => <p>{video.title}</p>)}
      </ul>

      <Footer />
    </SearchPageBox>
  );
}
