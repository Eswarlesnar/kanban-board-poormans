import styled from "styled-components"
import Task from "../Task/Task"
const LaneWrapper = styled.div`
    background : #d5faff;
    min-height :500px;
    height : auto;
    border-radius : 20px;`
const Lane = ({title ,tasks}) => {
    console.log(title  , tasks)
    return  <LaneWrapper>
        <h4>{title}</h4>
        {
            tasks?.map(task => {
                return <Task
                 key = {task.id}
                 title = {task.title}
                 body = {task.body}
                 ></Task>
            })
        }
    </LaneWrapper>
}

export default Lane