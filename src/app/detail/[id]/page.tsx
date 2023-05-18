'use client'
import styled from "styled-components";
import PlayButton from '../../../assets/DetailPlay.svg';
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";

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
margin-top:13px;
&:hover{
  opacity:70%;
}
`;

const Text = styled.div`
font-size: 26.75px;
font-weight: 700;
color: white;
margin-top: 32px;
margin-left: 32px;
`;

const SubText = styled.div`
font-size: 11.14px;
font-weight: 400;
color: white;
margin-top: 24px;
margin-left: 32px;
`;

export default function DetailPage(){
  const params = useSearchParams();
  const backdropPath = params.get('backdrop');
  const overviewW = params.get('overview');

    return(
        <DetailPageBox>
            <Image src={`https://image.tmdb.org/t/p/original${backdropPath}`}/>
            <Button>
                <PlayButton/>
            </Button>
            <Text>
              Previews
            </Text>
            <SubText>
              {overviewW}
            </SubText>
            <Footer/>
        </DetailPageBox>
    );
}