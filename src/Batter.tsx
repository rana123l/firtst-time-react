import { useState } from "react"

export default function Batter (){
    const [run,setrun] = useState(0)
    const oneAddNumber = () =>{
        setrun(run + 1);
    }
    const handleAddFour = () =>{
        setrun(run + 4);
    }
    return (
        <div>
        <p> Everything is fair in love </p>
        <h4> Scour: {run} </h4>
        <button onClick={oneAddNumber}>add any number</button>
        <button onClick={handleAddFour}>add 4</button>
        </div>
    )
}