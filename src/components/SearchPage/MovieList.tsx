'use client';

import { IMovie } from '../../interface/interface';
import styled from 'styled-components';
import Link from 'next/link';
import { MdOutlinePlayCircle } from 'react-icons/all';

type MovieListProps = {
  videos: IMovie[] | undefined;
};

export default function MovieList({ videos }: MovieListProps) {
  return (
    <ul>
      {videos &&
        videos.map(video => (
          <VideoBox key={video.id}>
            <VideoImg
              key={video.id}
              src={`https://image.tmdb.org/t/p/original${video.backdrop_path}`}
              alt="videoImg"
            />
            <RightBox>
              <VideoTitle>{video.title}</VideoTitle>
              <Link href={{pathname: `/detail/${video.id}`, query: {backdrop: video.backdrop_path, overview: video.overview},}}>
              <img src={'/icons/play-circle.svg'} />
              </Link>
            </RightBox>
          </VideoBox>
        ))}
    </ul>
  );
}

const VideoBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #424242;
  margin-bottom: 3px;
`;

const VideoImg = styled.img`
  width: 146px;
  height: 76px;

  object-fit: cover;
  //cursor: pointer;
`;

const RightBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 14px;
`;

const VideoTitle = styled.h2`
  color: white;
  font-size: 14.72px;
  font-weight: 400;
`;

const playCircle = styled.div`
  width: 23.33px;
  height: 23.33px;
  color: white;
`;
