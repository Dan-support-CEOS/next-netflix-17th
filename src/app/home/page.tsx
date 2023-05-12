'use client';

import { useQuery } from '@tanstack/react-query';
import {
  getUpcomingMovies,
  getNowPlayingMovies,
  getHorrorMovies,
} from '../../service/movies';
import { getAnimations, getTopRatedTvShows } from '../../service/tvshows';
import { IMovie, ITvShow } from '@/interface/interface';
import styled from 'styled-components';

const Wrapper = styled.ul`
display: flex;
justify-content: center;
align-items: center;
`;

const Content = styled.div`
display: flex;
height: 46rem;
width: 23.4375rem;
`;

const Image = styled.img`
height:25.938rem;
width: 100%;
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
    const random = Math.floor(Math.random() * nowPlayingMovies.length);
 
    return (
    <Wrapper>
     <Content>
        <Image src={`https://image.tmdb.org/t/p/original${nowPlayingMovies[random].poster_path}`}/>
      </Content>
    </Wrapper>
  );
}}
