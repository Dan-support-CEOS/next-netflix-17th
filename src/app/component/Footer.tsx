import styled from "styled-components";
import {BiHomeAlt2} from 'react-icons/bi';
import {FiSearch} from 'react-icons/fi';
import {MdOutlineVideoLibrary} from 'react-icons/all';
import {TfiDownload} from 'react-icons/tfi';
import {BsList} from 'react-icons/bs';

const Wrapper = styled.div`
display: flex;
justify-content: center;
width: 375px;
height: 48px;
background: #121212;
`
const Content = styled.div`
display: flex;
width: 320px;
height: 45px;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 20px;
`;

export default function Footer(){
    return(
        <Wrapper>
            <Content>
                <BiHomeAlt2/>
                <FiSearch/>
                <MdOutlineVideoLibrary/>
                <TfiDownload/>
                <BsList/>
            </Content>
        </Wrapper>
    );
}