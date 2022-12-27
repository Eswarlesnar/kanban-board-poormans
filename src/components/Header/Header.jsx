import styled from "styled-components"
import {useState} from "react"
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.header`
    padding : 0.01em ; 
    background : #89ffd2;
    display : flex ;
    justify-content : space-between;
    align-items : center;
    `;

const Title = styled.h3`
    font-size :1.5em ;
    color :white;
    margin-left :2em;
    `
const StyledButton = styled.button`
    width : 100px;
    height : 40px;
    background : aqua;
    text-align : center;
    border : none;`
const Header = () => {
    const [view , setView ] = useState(true)
    const navigate = useNavigate()
    const handleClick = (e) => {
        setView(!view)
        if(view === true) {
            navigate("/tasks")
        }else{
            navigate("/")
        }
    }
    return( 
    <HeaderWrapper>
        <Title>Board</Title>
        {view === true ? <StyledButton  onClick = {e => handleClick(e)}>Task view</StyledButton>:
        <StyledButton onClick = {e => handleClick(e)}>Board View</StyledButton>}
    </HeaderWrapper>)
}

export default Header;