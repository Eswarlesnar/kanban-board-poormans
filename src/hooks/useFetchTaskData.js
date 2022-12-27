import {useState , useEffect} from 'react'

export const useFetchTaskData = (dataSource) => {
   const [data , setData ] = useState([])
   const [errors , setErrors] = useState("")
   const [loading  , setLoading] = useState(false)
   useEffect(() =>{
    const fetchData = async () => {
        try{
            setLoading(true)
            const response = await fetch(dataSource)
            const result = await response.json()
            
            if(result){
                setData(result)
                setLoading(false)
            }else {
                setLoading(false)
            }
        }catch(e){
            setErrors(e.message)
            setLoading(false)
        }
    }
    fetchData()
    } , [])
   return [data , errors , loading , setData]
}
