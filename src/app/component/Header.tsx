import {SiNetflix} from 'react-icons/si';
import styled from 'styled-components';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ScrollInterface{
    scroll: boolean;
}

const Wrapper = styled.div<ScrollInterface>`
position: absolute;
position: fixed;
display: flex;
width: 375px;
height: 87px;
justify-content: center;
background: ${({scroll}) => scroll? '#121212' : ''};
`;

const Bar= styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 338px;
height: 57px;
justify-content: space-around;
margin-top: 15px;
`;

const Text = styled.div`
font-size:17.2px;
weight: 400;
color: white;
`;

export default function Header(){
    
    const [scroll, setScroll] = useState(false);

    useEffect(()=> {
        const handleScroll = () => {
        const currentPosition = window.pageYOffset;

        if(currentPosition >=10){
            setScroll(true);
        }
        else{
            setScroll(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll',handleScroll);
    };
},[]);


    return(
        <Wrapper scroll={scroll}>
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