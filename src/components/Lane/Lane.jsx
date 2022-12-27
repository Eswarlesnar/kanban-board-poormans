import styled from "styled-components"
import Task from "../Task/Task"
const LaneWrapper = styled.div`
    background : papayawhip;
    min-height :500px;
    height : auto;
    border-radius : 20px;`
const Lane = ({title ,tasks , laneId , onDragStart, onDragOver , onDrop}) => {
   
    return  <LaneWrapper onDragOver = {onDragOver} onDrop = { e => onDrop(e , laneId)}>
        <h4>{title}</h4>
        {
            tasks?.map(task => {
                return <Task
                 key = {task.id}
                 id = {task.id}
                 title = {task.title}
                 body = {task.body}
                 onDragStart = {onDragStart}
                 ></Task>
            })
        }
    </LaneWrapper>
}

export default Lane