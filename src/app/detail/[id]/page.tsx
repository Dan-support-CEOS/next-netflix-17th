'use client'
import styled from "styled-components";
import PlayButton from '../../../assets/DetailPlay.svg';
import { useRouter } from "next/navigation";

const DetailPageBox = styled.div`
  width: 375px;
`;

const Image = styled.img`
  object-fit: cover;
  height: 415px;
  width: 375px;
`;

const Button = styled.div`
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;
`;

const Text = styled.div`
font-size: 26.75px;
font-weight: 700;
color: white;
`;

const SubText = styled.div`
font-size: 11.14px;
font-weight: 400;
color: white;
`;

export default function DetailPage(){
  const router = useRouter();
  const {title, backdrop, overview} = router.query;
  const movieTitle = `${title}`;
  const backdropPath = `${backdrop}`;
  const overviewW = `${overview}`;

    return(
        <DetailPageBox>
            <Image src={`https://image.tmdb.org/t/p/original${backdropPath}`}/>
            <Button>
                <PlayButton/>
            </Button>
            <Text>
              {movieTitle}
            </Text>
            <SubText>
              {overviewW}
            </SubText>
        </DetailPageBox>
    );
}