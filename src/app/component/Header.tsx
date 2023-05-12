import {SiNetflix} from 'react-icons/si';
import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.div`
position: absolute;
position: fixed;
`;

const Bar= styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 338px;
height: 57px;
justify-content: space-around;
`;

const Text = styled.div`
font-size:17.2px;
weight: 400;
color: white;
`;

export default function Header(){
    return(
        <Wrapper>
        <Bar>
        <SiNetflix size={'35px'} color="#B1060F"/>
        <Text>
        <Link href="/home">TV Shows</Link>
        </Text>
        <Text>
        <Link href="/home">Movies</Link>
        </Text>
        <Text>
        <Link href="/home">My List</Link>
        </Text>
        </Bar>
        </Wrapper>
    );
}