import styled from "styled-components"


const HeaderWrapper = styled.header`
    padding : 0.01em ; 
    background : #89ffd2;
    `;

const Title = styled.h3`
    font-size :1.5em ;
    color :white;
    margin-left :2em;
    `
const Header = () => {
    return <HeaderWrapper>
        <Title>Board</Title>
    </HeaderWrapper>
}

export default Header;