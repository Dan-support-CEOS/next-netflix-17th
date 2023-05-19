'use client';

import { useState } from 'react';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { searchMovies } from '../../service/movies';
import { IMovie } from '@/interface/interface';
import MovieList from '@/components/SearchPage/MovieList';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import httpClient from '@/service/httpClient';

export default function SearchPage() {
  const [searchText, setSearchText] = useState('');

  /*
  const { data: searchedMovies } = useQuery<IMovie[]>(['searchedMovies'], () =>
    searchMovies(searchText),
  );
  */

  //디폴트 Search 영화 목록
  const getNowPlayingMovies = async (page: number) => {
    return httpClient
      .get('/movie/now_playing', { params: { page: page } })
      .then(res => res.data);
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['page'],
    ({ pageParam = 1 }) => getNowPlayingMovies(pageParam),
    {
      getNextPageParam: (lastPage, allPosts) => {
        return lastPage.page !== allPosts[0].total_pages
          ? lastPage.page + 1
          : undefined;
      },
    },
  );

  /*
  const searchMovies = async (searchText: string, page: number) => {
    return httpClient
      .get('/search/movie', { params: { query: searchText, page: page } })
      .then(res => res.data);
  };

  const { searchedMovies, fetchNextPage, hasNextPage } = useInfiniteQuery<
    IMoviePerPage,
    FetchNextPageOptions,
    boolean
  >(['page'], ({ pageParam = 1 }) => searchMovies(searchText, pageParam), {
    getNextPageParam: (lastPage, allPosts) => {
      return lastPage.page !== allPosts[0].total_pages
        ? lastPage.page + 1
        : undefined;,
    },
  });
  */

  return (
    <SearchPageBox>
      <SearchInputBox>
        <img src={'/icons/search.svg'} />
        <SearchInput
          type="text"
          placeholder="Search for a show, movie, e.t.c."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <DeleteBtn
          src={'/icons/delete.svg'}
          onClick={() => setSearchText('')}
        />
      </SearchInputBox>

      <Title>Top Searches</Title>
      <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
        <MovieList data={data} />
      </InfiniteScroll>

      <Footer />
    </SearchPageBox>
  );
}

const SearchPageBox = styled.div`
  width: 375px;
`;

const SearchInputBox = styled.div`
  background-color: #424242;
  width: 375px;
  height: 52px;
  margin-top: 44px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 21px;
`;

const SearchInput = styled.input`
  width: 270px;
  height: 31px;
  background-color: #424242;
  border: 0;
  padding: 0;

  font-weight: 400;
  font-size: 15.213px;
  line-height: 31px;
  letter-spacing: 0.206667px;
  color: #c4c4c4;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 15.213px;
    line-height: 31px;

    text-align: center;
    letter-spacing: 0.206667px;

    color: #c4c4c4;
  }
`;

const Title = styled.h2`
  color: white;
  font-size: 26.75px;
  font-weight: 700;
  margin: 21px 0;
`;

const DeleteBtn = styled.img`
  cursor: pointer;
`;

/*
      {!searchText ? (
        <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
          <MovieList videos={nowPlayingMovies.results} />
        </InfiniteScroll>
      ) : (
        <MovieList videos={searchedMovies} />
      )}
      */
