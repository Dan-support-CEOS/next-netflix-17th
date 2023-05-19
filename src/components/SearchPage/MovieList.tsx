'use client';

import { IMovie } from '../../interface/interface';
import styled from 'styled-components';

type MovieListProps = {
  data: any;
};

export default function MovieList({ data }: MovieListProps) {
  return (
    <ul>
      {data?.pages.map((page: any) =>
        page.results.map((video: IMovie) => (
          <VideoBox key={video.id}>
            <VideoImg
              key={video.id}
              src={`https://image.tmdb.org/t/p/original${video.backdrop_path}`}
              alt="videoImg"
            />
            <RightBox>
              <VideoTitle>{video.title}</VideoTitle>
              <PlayCircle src={'/icons/play-circle.svg'} />
            </RightBox>
          </VideoBox>
        )),
      )}
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

const PlayCircle = styled.img`
  width: 23.33px;
  height: 23.33px;
  color: white;

  cursor: pointer;
`;
