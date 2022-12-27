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
    const [tasks ,  errors , loading , setData] = useFetchTaskData('https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks')
    const onDragStart = (e , id ) => {
        e.dataTransfer.setData("id" , id)

    }
    const onDragOver = (e) => {
        e.preventDefault()
    } 
    const onDrop = (e , laneId) => {
        const taskId = e.dataTransfer.getData('id')
        const updatedTasks = tasks.map(task => {
            if(task.id == taskId){
                task.lane = laneId
            }
            return task
        })
        setData(updatedTasks)
        console.log(laneId , taskId)
        console.log(updatedTasks)
    }
    return <BoardWrapper>
        {loading === true ? <p>Loading</p> : lanes.map(lane => {
            return <Lane 
             laneId = {lane.id}
             key = {lane.id} 
             title = {lane.title}
             tasks = {tasks.filter(task => task.lane === lane.id)}
             onDragStart = {onDragStart}
             onDragOver = {onDragOver}
             onDrop ={onDrop}
             ></Lane>
        })}
         
    </BoardWrapper>

       

    
}

export default Board