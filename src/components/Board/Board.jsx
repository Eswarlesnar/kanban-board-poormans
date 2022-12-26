import styled from "styled-components"
import {useState , useEffect } from "react"
import Lane from "../Lane/Lane"

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

    const [tasks ,setTasks ]  = useState([])
    const [errors , setErrors] = useState("")

    useEffect(() =>{
        const fetchData = async () => {
            try{
                const response = await fetch('https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks')
                const result = await response.json()
                
                if(result){
                    setTasks(result)
                }
            }catch(e){
                setErrors(e.message)
            }
        }
        fetchData()
    } , [])
    return <BoardWrapper>
         {lanes.map(lane => {
            return <Lane 
             key = {lane.id} 
             title = {lane.title}
             tasks = {tasks.filter(task => task.lane === lane.id)}
             ></Lane>
        })}
    </BoardWrapper>

       

    
}

export default Board