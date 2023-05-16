'use client';

import { IMovie } from '../../interface/interface';
import styled from 'styled-components';

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
              src={`https://image.tmdb.org/t/p/original${video.poster_path}`}
              alt="videoImg"
            />
            <VideoTitle>{video.title}</VideoTitle>
          </VideoBox>
        ))}
    </ul>
  );
}

const VideoBox = styled.div`
  display: flex;
  background-color: #424242;
`;

const VideoImg = styled.img`
  width: 146px;
  height: 76px;

  object-fit: cover;
  //cursor: pointer;
`;

const VideoTitle = styled.h2`
  color: white;
  font-size: 14.72px;
  font-weight: 400;
`;
