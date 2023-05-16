import styled from "styled-components";
import PlayButton from '../../assets/DetailPlay.svg';

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

export default function DetailPage(){
    return(
        <DetailPageBox>
            <Image src=""/>
            <Button>
                <PlayButton/>
            </Button>
        </DetailPageBox>
    );
}