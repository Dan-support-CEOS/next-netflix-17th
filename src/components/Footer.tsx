import styled from 'styled-components';
import { BiHomeAlt2 } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineVideoLibrary } from 'react-icons/all';
import { HiDownload } from 'react-icons/hi';
import { BsList } from 'react-icons/bs';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-basis: 20%;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 48px;
  background: #121212;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  /*
  :hover {
    color: white;
  }
  */
`;

const Text = styled.div`
  font-size: 8.2px;
  font-weight: 500;
  margin-top: 3px;
  color: #8c8787;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Content>
        <BiHomeAlt2 size={'22px'} color="#8C8787" />
        <Text>Home</Text>
      </Content>
      <Content>
        <FiSearch size={'22px'} color="#8C8787" />
        <Text>Search</Text>
      </Content>
      <Content>
        <MdOutlineVideoLibrary size={'22px'} color="#8C8787" />
        <Text>Coming Soon</Text>
      </Content>
      <Content>
        <HiDownload size={'22px'} color="#8C8787" />
        <Text>Downloads</Text>
      </Content>
      <Content>
        <BsList size={'22px'} color="#8C8787" />
        <Text>More</Text>
      </Content>
    </Wrapper>
  );
}
