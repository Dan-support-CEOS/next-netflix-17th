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
import Footer from '../component/Footer';

const Wrapper = styled.ul`
display: flex;
justify-content: center;
align-items: center;
`;

const Content = styled.div`
display: flex;
height: 46rem;
width: 375px;
flex-direction: column;
`;

const Image = styled.img`
object-fit: cover;
height: 415px;
width: 375px;
`;

const Bars = styled.div`
display: flex;
justify-content: center;
`;

const Bar = styled.div`
display: flex;
width: 259px;
height: 45px;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 20px;
`;

const Text = styled.div`
font-size: 13.64px;
weight: 400;
margin-top:3px;
`;

const PlayButton = styled.div`
cursor: pointer;
`;

const InfoButton = styled.div`
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;
`;

const PlusButton = styled.div`
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;
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
        <Bars>
        <Bar>
        <PlusButton>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.2969 3.5625H12.7031C12.8281 3.5625 12.8906 3.625 12.8906 3.75V20.25C12.8906 20.375 12.8281 20.4375 12.7031 20.4375H11.2969C11.1719 20.4375 11.1094 20.375 11.1094 20.25V3.75C11.1094 3.625 11.1719 3.5625 11.2969 3.5625Z" fill="white"/>
          <path d="M4.125 11.1094H19.875C20 11.1094 20.0625 11.1719 20.0625 11.2969V12.7031C20.0625 12.8281 20 12.8906 19.875 12.8906H4.125C4 12.8906 3.9375 12.8281 3.9375 12.7031V11.2969C3.9375 11.1719 4 11.1094 4.125 11.1094Z" fill="white"/>
        </svg>
        <Text>My List</Text>
        </PlusButton>
        <PlayButton>
          <svg width="111" height="45" viewBox="0 0 111 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="111" height="45" fill="#E5E5E5"/>
            <g clip-path="url(#clip0_0_1)">
              <rect width="375" height="812" transform="translate(-137 -428)" fill="white"/>
              <rect x="-137" y="-384" width="375" height="3365" fill="black"/>
              <rect width="110.625" height="45" rx="5.625" fill="#C4C4C4"/>
              <path d="M53.5873 15.5824V30H56.1651V25.2341H59.0826C62.0001 25.2341 64.0483 23.2858 64.0483 20.4083C64.0483 17.5307 62.06 15.5824 59.1925 15.5824H53.5873ZM56.1651 17.6906H58.5131C60.3615 17.6906 61.4305 18.6797 61.4305 20.4083C61.4305 22.1568 60.3515 23.1559 58.5031 23.1559H56.1651V17.6906ZM65.6956 30H68.1835V15.5824H65.6956V30ZM74.1071 28.2915C73.0281 28.2915 72.3087 27.7419 72.3087 26.8727C72.3087 26.0334 72.9981 25.4939 74.1971 25.4139L76.6449 25.2641V26.0734C76.6449 27.3523 75.5159 28.2915 74.1071 28.2915ZM73.3578 30.1699C74.7166 30.1699 76.0455 29.4605 76.6549 28.3115H76.7049V30H79.1028V22.7063C79.1028 20.5781 77.3943 19.1893 74.7666 19.1893C72.0689 19.1893 70.3803 20.6081 70.2704 22.5864H72.5784C72.7383 21.7071 73.4877 21.1376 74.6666 21.1376C75.8956 21.1376 76.6449 21.7771 76.6449 22.8861V23.6455L73.8474 23.8053C71.2696 23.9652 69.8208 25.0942 69.8208 26.9726C69.8208 28.881 71.3095 30.1699 73.3578 30.1699ZM82.1889 33.9366C84.6068 33.9366 85.7758 33.0474 86.6851 30.4196L90.5118 19.4091H87.894L85.3962 27.8818H85.3562L82.8583 19.4091H80.1407L83.9074 30.01C83.9174 30.04 83.7676 30.5695 83.7676 30.5995C83.4878 31.5786 82.9583 31.9683 81.9291 31.9683C81.7793 31.9683 81.3397 31.9583 81.2098 31.9283V33.8966C81.3397 33.9266 82.049 33.9366 82.1889 33.9366Z" fill="black"/>
              <path d="M19 12V33.6L37 22.8L19 12Z" fill="black"/>
              </g>
              <defs>
                <clipPath id="clip0_0_1">
                  <rect width="375" height="812" fill="white" transform="translate(-137 -428)"/>
                </clipPath>
              </defs>
            </svg>
        </PlayButton>
        <InfoButton>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="22" height="22" fill="#E5E5E5"/>
          <g clip-path="url(#clip0_0_1)">
            <rect width="375" height="812" transform="translate(-290 -429)" fill="white"/>
            <rect x="-290" y="-385" width="375" height="3365" fill="black"/>
            <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 15V11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 7H11.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_0_1">
                <rect width="375" height="812" fill="white" transform="translate(-290 -429)"/>
                </clipPath>
            </defs>
        </svg>
        <Text>Info</Text>
        </InfoButton>
        </Bar>
        </Bars>
        <Footer/>
      </Content>
    </Wrapper>
  );
}}
