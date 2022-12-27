import { useFetchTaskData } from "../../hooks/useFetchTaskData"
import styled from "styled-components"


const BacklogWrapper = styled.div`
  width :100%;
  display : flex;
  justify-content : center;
  text-align: center;`

const StyledList = styled.ul`
    list-style:none;
    display : flex ; 
    flex-direction : column;
    gap :3px;
    margin-top :50px;
    li {
        
        min-width :1300px;
        width :100vh;
        height : 40px;
        display : grid;
        border-radius : 5px;
        grid-template-columns : 4fr  1.5fr;
        border : none ;
        border-collapse : collapse;
        line-height :200%;

    }
   `
const Heading = styled.li`
   background : gray;
   span {
    font-style : bold;
    font-size : 1.3em
   }`
const Backlog = () => {
    const [tasks ,  errors , loading] = useFetchTaskData('https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks')
    const stateReferenceHash = {
        "1": { color : "red", state : "To do"},
        "2" : { color : "orange", state : "Doing"},
        "3" : { color : "aqua", state : "Review"},
        "4" : { color : "green", state : "Done"}
    } 
    return (
    <BacklogWrapper>

         {
            loading === true ? <p>loading</p> : 
            <StyledList>
                <Heading>
                    <span>Task</span><span>State</span>
                </Heading>
                
                {tasks.map(task => {
                   
                    return  <li style = {{ background : stateReferenceHash[task.lane].color }}><span>{task.title}</span> <span>{ stateReferenceHash[task.lane].state}</span></li>
                 })}
                

            </StyledList>
         }
    </BacklogWrapper>
    )
}

export default Backlog