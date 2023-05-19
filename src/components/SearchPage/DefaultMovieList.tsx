'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import MovieList from '@/components/SearchPage/MovieList';
import httpClient from '@/service/httpClient';

export default function DafaultMovieList() {
  //디폴트 영화 목록
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

  return (
    <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
      <MovieList data={data} />
    </InfiniteScroll>
  );
}
