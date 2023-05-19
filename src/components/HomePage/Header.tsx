import { SiNetflix } from 'react-icons/si';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

interface ScrollInterface {
  scroll: boolean;
}

const Wrapper = styled.div<ScrollInterface>`
  position: absolute;
  position: fixed;
  z-index: 100;
  display: flex;
  width: 375px;
  height: 80px;
  justify-content: center;
  background: ${({ scroll }) => (scroll ? '#121212' : 'transparent')};
  transition: all 100ms ease-out;
`;

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 338px;
  height: 57px;
  justify-content: space-around;
  margin-top: 15px;
`;

const Text = styled.div`
  font-size: 17.2px;
  font-weight: 400;
  color: white;
  cursor: pointer;
`;

export default function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;

      if (currentPosition >= 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper scroll={scroll}>
      <Bar>
        <SiNetflix size={'35px'} color="#B1060F" />
        <Text>TV Shows</Text>
        <Text>Movies</Text>
        <Text>My List</Text>
      </Bar>
    </Wrapper>
  );
}
