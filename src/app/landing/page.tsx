import Lottie from 'react-lottie-player';
import lottieJson from '../../../public/Lottie/29313-netflix-logo-swoop.json';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Content = styled.div`
display: flex;
height: 46rem;
width: 23.4375rem;
align-items: center;
margin-bottom: 3.261875rem;
`;

export default function LandingPage() {
  const router = useRouter();

  useEffect (() => {
    setTimeout(()=>{
      router.push('/home');
    },3600);
  });

    return (
      <Wrapper>
       <Content>
      <Lottie loop animationData={lottieJson} play/>
      </Content>
      </Wrapper>
    )
  }