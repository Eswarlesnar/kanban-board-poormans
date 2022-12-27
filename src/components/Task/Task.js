import styled from "styled-components"
const TaskWrapper = styled.div`{
    background : #E8A4BA; 
    padding :10px;
    border-radius :10px;
    margin :0% 5% 5% 5%;
}`
const Task = ({id , title , body , onDragStart}) => {
    return <TaskWrapper onDragStart = {e => onDragStart(e , id)} draggable> 
        <h5>{title}</h5>
        <p>{body}</p>
    </TaskWrapper>
}

export default Task