'use client';

import { IMovie } from '@/interface/interface';
import styled from 'styled-components';
import Link from 'next/link';

type MovieListProps = {
  title: string;
  videos: IMovie[] | undefined;
  isCircle: boolean;
};

export default function MovieList({ title, videos, isCircle }: MovieListProps) {
  return (
    <VideoListContainer>
      <Title isCircle={isCircle}>{title}</Title>
      <VideoListBox isCircle={isCircle}>
        {videos &&
          videos!.map(video => (
            <Link
              href={{
                pathname: `/detail/${video.id}`,
                query: {
                  backdrop: video.backdrop_path,
                  overview: video.overview,
                },
              }}
              key={video.id}
            >
              <ImgBox key={video.id} isCircle={isCircle}>
                <VideoImg
                  src={`https://image.tmdb.org/t/p/original${video.poster_path}`}
                  alt="videoImg"
                  isCircle={isCircle}
                />
              </ImgBox>
            </Link>
          ))}
      </VideoListBox>
    </VideoListContainer>
  );
}

const VideoListContainer = styled.div``;

const Title = styled.h2<{ isCircle: boolean }>`
  font-size: ${props => (props.isCircle ? '26.75px' : '20.92px')};
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0 16px;
`;

const ImgBox = styled.div<{ isCircle: boolean }>`
  width: ${props => (props.isCircle ? '102px' : '103px')};
  height: ${props => (props.isCircle ? '102px' : '161px')};
  margin-right: 7px;
`;

const VideoImg = styled.img<{ isCircle: boolean }>`
  width: ${props => (props.isCircle ? '102px' : '103px')};
  height: ${props => (props.isCircle ? '102px' : '161px')};
  border-radius: ${props => (props.isCircle ? '50%' : '2px')};

  object-fit: cover;
  cursor: pointer;

  transition: all 100ms ease-out;

  &:hover {
    transform: scale(0.95);
  }
`;

const VideoListBox = styled.ul<{ isCircle: boolean }>`
  margin: ${props => (props.isCircle ? '23px 0 28px 0' : '14px 0 22px 0')};
  display: flex;
  overflow-x: auto;
  padding-left: 12px;
  overflow-y: hidden;
`;
