import styled from "styled-components"
const TaskWrapper = styled.div`{
    background : darkGray ; 
    padding :10px;
    border-radius :10px;
    margin :0% 5% 5% 5%;
}`
const Task = ({title , body}) => {
    return <TaskWrapper>
        <h6>{title}</h6>
        <p>{body}</p>
    </TaskWrapper>
}

export default Task