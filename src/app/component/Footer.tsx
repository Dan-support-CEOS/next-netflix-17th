import styled from "styled-components";
import {BiHomeAlt2} from 'react-icons/bi';
import {FiSearch} from 'react-icons/fi';
import {MdOutlineVideoLibrary} from 'react-icons/all';
import {HiDownload} from 'react-icons/hi';
import {BsList} from 'react-icons/bs';

const Wrapper = styled.div`
display: flex;
justify-content: center;
width: 375px;
height: 48px;
background: #121212;
`
const Contents = styled.div`
display: flex;
width: 320px;
height: 45px;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const Content = styled.div`
display:flex;
flex-direction: column;
align-items: center;
:hover{
    color: white;
    cursor: pointer;
}
`;

const Text = styled.div`
font-size:8.2px;
weight: 500;
margin-top: 3px;
color: #8C8787;
`;

export default function Footer(){
    return(
        <Wrapper>
            <Contents>
                <Content>
                <BiHomeAlt2 size={'22px'} color="#8C8787"/>
                <Text>Home</Text>
                </Content>
                <Content>
                <FiSearch size={'22px'} color="#8C8787"/>
                <Text>Search</Text>
                </Content>
                <Content>
                <MdOutlineVideoLibrary size={'22px'} color="#8C8787"/>
                <Text>Coming Soon</Text>
                </Content>
                <Content>
                <HiDownload size={'22px'} color="#8C8787"/>
                <Text>Downloads</Text>
                </Content>
                <Content>
                <BsList size={'22px'} color="#8C8787"/>
                <Text>More</Text>
                </Content>
            </Contents>
        </Wrapper>
    );
}