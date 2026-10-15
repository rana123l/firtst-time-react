import { useEffect, useState } from "react"

export default function Todos(){
     const [Todos,setTodos] = useState([]);
        useEffect(() =>{
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then (res=>res.json())
            .then( data=>{
                console.log(data);
                setTodos(data);
            })
        },[])
    return (
       
        <div>
            <h3>Todos:{Todos.length}</h3>
        </div>
    )
}