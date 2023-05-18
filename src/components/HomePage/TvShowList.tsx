'use client';

import { ITvShow } from '@/interface/interface';
import styled from 'styled-components';

type TvShowListProps = {
  title: string;
  videos: ITvShow[] | undefined;
};

export default function TvShowList({ title, videos }: TvShowListProps) {
  return (
    <VideoListContainer>
      <Title>{title}</Title>
      <VideoListBox>
        {videos &&
          videos.map(video => (
            <ImgBox key={video.id}>
              <VideoImg
                key={video.id}
                src={`https://image.tmdb.org/t/p/original${video.poster_path}`}
                alt="videoImg"
              />
            </ImgBox>
          ))}
      </VideoListBox>
    </VideoListContainer>
  );
}

const VideoListContainer = styled.div``;

const Title = styled.h2`
  font-size: 20.92px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0 16px;
`;

const ImgBox = styled.div`
  width: 103px;
  height: 161px;
  margin-right: 7px;
`;

const VideoImg = styled.img`
  width: 103px;
  height: 161px;
  border-radius: 2px;

  object-fit: cover;
  cursor: pointer;

  transition: all 100ms ease-out;

  &:hover {
    transform: scale(0.95);
  }
`;

const VideoListBox = styled.ul`
  margin: 14px 0 22px 0;
  display: flex;
  overflow-x: auto;
  padding-left: 12px;
  overflow-y: hidden;
`;
