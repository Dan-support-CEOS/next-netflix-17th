'use client';

import { useQuery } from '@tanstack/react-query';
import { getUpcomingMovies } from '../../service/movies';
import { IMovie } from '@/interface/interface';
import MovieList from '../../components/HomePage/MovieList';
import styled from 'styled-components';
//import { dehydrate, Hydrate } from '@tanstack/react-query';
//import getQueryClient from '../getQueryClient';

const HomePageBox = styled.div`
  width: 375px;
`;

async function fetchUpcomingMovies() {
  const upcomingMovies = await getUpcomingMovies();
  return { upcomingMovies };
}

export default function TestPage() {
  const { data: upcomingMovies } = useQuery<IMovie[]>(
    ['upcomingMovies'],
    getUpcomingMovies,
  );

  return (
    <HomePageBox>
      <MovieList title={'Previews'} videos={upcomingMovies} isCircle={true} />
    </HomePageBox>
  );
}

/*
export async function HydratedTestPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['upcomingMovies'], getUpcomingMovies);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <TestPage />
    </Hydrate>
  );
}
*/
