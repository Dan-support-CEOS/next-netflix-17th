'use client'
import styled from "styled-components";
import PlayButton from '../../../assets/DetailPlay.svg';
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";

const DetailPageBox = styled.div`
  width: 375px;
`;

const ImageGradient = styled.div`
  height: 415px;
  width: 375px;
  background: linear-gradient(transparent 10%, black);
  position:absolute;
  top:0;
`;

const Image = styled.img`
  object-fit: cover;
  height: 415px;
  width: 375px;
  position: relative;
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
margin: 32px;
margin-bottom:0;
`;

const SubText = styled.div`
font-size: 11.14px;
font-weight: 400;
color: white;
margin-top: 24px;
margin-left: 32px;
margin-bottom: 60px;
`;

export default function DetailPage(){
  const params = useSearchParams();
  const backdropPath = params.get('backdrop');
  const overviewW = params.get('overview');

    return(
        <DetailPageBox>
            <Image src={`https://image.tmdb.org/t/p/original${backdropPath}`}/>
            <ImageGradient/>
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