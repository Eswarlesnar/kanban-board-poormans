import styled from "styled-components"
import Lane from "../Lane/Lane"
import { useFetchTaskData } from "../../hooks/useFetchTaskData"

const BoardWrapper = styled.div`
    display : grid;
    grid-template-columns : repeat(4 , minmax(250px , 1fr));
    gap:15px;
    margin-top:10px;
    margin-inline :10px;
    text-align:center;`

const Board = () => {
    const lanes = [
        {id : 1 , title : "To Do"},
        {id : 2 , title : "Doing"},
        {id : 3 , title : "Review"},
        {id : 4 , title : "Done"}
    ]
    const [tasks ,  errors , loading] = useFetchTaskData('https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks')
    
    return <BoardWrapper>
        {loading === true ? <p>Loading</p> : lanes.map(lane => {
            return <Lane 
             key = {lane.id} 
             title = {lane.title}
             tasks = {tasks.filter(task => task.lane === lane.id)}
             ></Lane>
        })}
         
    </BoardWrapper>

       

    
}

export default Board