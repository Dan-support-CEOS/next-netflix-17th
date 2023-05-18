import styled from 'styled-components';
import Play from '../../../public/assets/HomePlay.svg';
import Plus from '../../../public/assets/Plus.svg';
import Info from '../../../public/assets/Info.svg';

const Bars = styled.div`
  width: 375px;
  display: flex;
  justify-content: center;
  margin: 13px 0 43px 0;
`;

const BarBox = styled.div`
  display: flex;
  width: 259px;
  height: 45px;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  font-size: 13.64px;
  font-weight: 400;
  margin-top: 3px;
  color: white;
`;

const PlayButton = styled.div`
  cursor: pointer;
  transition: all 100ms ease-out;

  &:hover {
    opacity: 70%;
  }
`;

const InfoButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const PlusButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export default function Bar() {
  return (
    <Bars>
      <BarBox>
        <PlusButton>
          <Plus/>
          <Text>My List</Text>
        </PlusButton>
        <PlayButton>
          <Play/>
        </PlayButton>
        <InfoButton>
          <Info/>
          <Text>Info</Text>
        </InfoButton>
      </BarBox>
    </Bars>
  );
}
