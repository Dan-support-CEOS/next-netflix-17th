'use client';

import { useQuery, dehydrate, Hydrate } from '@tanstack/react-query';
import {
  getUpcomingMovies,
  getNowPlayingMovies,
  getHorrorMovies,
} from '../../service/movies';
import { getAnimations, getTopRatedTvShows } from '../../service/tvshows';
import { IMovie, ITvShow } from '@/interface/interface';
import Header from '@/components/HomePage/Header';
import Bar from '@/components/HomePage/Bar';
import MovieList from '../../components/HomePage/MovieList';
import TvShowList from '../../components/HomePage/TvShowList';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import Link from 'next/link';
import getQueryClient from '../getQueryClient';

const HomePageBox = styled.div`
  width: 375px;
  padding-bottom: 48px;
`;

const Images = styled.div`
  position: relative;
`;

const ImageGradient = styled.div`
  height: 415px;
  width: 375px;
  background: linear-gradient(transparent 10%, black);
  position:absolute;
  top:0;
  z-index:90;
`;

const Image = styled.img`
  object-fit: cover;
  height: 415px;
  width: 375px;
  position: relative;
`;

export default function HomePage() {
  const { data: upcomingMovies } = useQuery<IMovie[]>(
    ['upcomingMovies'],
    getUpcomingMovies,
  );
  const { data: nowPlayingMovies } = useQuery<IMovie[]>(
    ['nowPlayingMovies'],
    getNowPlayingMovies,
  );
  const { data: horrorMovies } = useQuery<IMovie[]>(
    ['horrorMovies'],
    getHorrorMovies,
  );
  const { data: animations } = useQuery<ITvShow[]>(
    ['animations'],
    getAnimations,
  );
  const { data: topRatedTvShows } = useQuery<ITvShow[]>(
    ['topRatedTvShows'],
    getTopRatedTvShows,
  );

  if(nowPlayingMovies && nowPlayingMovies!){
    const index = Math.floor(Math.random() * nowPlayingMovies.length);

  return (
    <HomePageBox>
      <Header />
      <Images>
         <Link href={{pathname: `/detail/${nowPlayingMovies[index].id}`, query: {backdrop: nowPlayingMovies[index].backdrop_path, overview: nowPlayingMovies[index].overview}, }} >
        <Image
          src={`https://image.tmdb.org/t/p/original${
            nowPlayingMovies[index].poster_path
          }`}
          alt={'randomImg'}
        />
        <ImageGradient/>
        </Link>
        </Images>
      <Bar />

      <MovieList title={'Previews'} videos={upcomingMovies} isCircle={true} />
      <MovieList
        title={'Now Playing'}
        videos={nowPlayingMovies}
        isCircle={false}
      />
      <MovieList
        title={'Horror Movies'}
        videos={horrorMovies}
        isCircle={false}
      />
      <TvShowList title={'Animations'} videos={animations} />
      <TvShowList title={'Top Rated TV Shows'} videos={topRatedTvShows} />

      <Footer />
    </HomePageBox>
  );
}

  }

/*
export async function HydratedHomePage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['upcomingMovies'], getUpcomingMovies);
  await queryClient.prefetchQuery(['nowPlayingMovies'], getNowPlayingMovies);
  await queryClient.prefetchQuery(['horrorMovies'], getHorrorMovies);
  await queryClient.prefetchQuery(['animations'], getAnimations);
  await queryClient.prefetchQuery(['topRatedTvShows'], getTopRatedTvShows);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <HomePage />
    </Hydrate>
  );
}
*/
