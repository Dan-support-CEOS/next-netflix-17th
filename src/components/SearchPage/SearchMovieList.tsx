'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import MovieList from '@/components/SearchPage/MovieList';
import httpClient from '@/service/httpClient';

type SearchMovieListProps = {
  searchText: string;
};

export default function SearchMovieList({ searchText }: SearchMovieListProps) {
  //Search 영화 목록
  const searchMovies = async (searchText: string, page: number) => {
    return httpClient
      .get('/search/movie', { params: { query: searchText, page: page } })
      .then(res => res.data);
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['page'],
    ({ pageParam = 1 }) => searchMovies(searchText, pageParam),
    {
      getNextPageParam: (lastPage, allPosts) => {
        return lastPage.page !== allPosts[0].total_pages
          ? lastPage.page + 1
          : undefined;
      },
    },
  );

  return (
    <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
      <MovieList data={data} />
    </InfiniteScroll>
  );
}
