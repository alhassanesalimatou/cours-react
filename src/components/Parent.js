import { useState } from "react"
import Counter from "./Count"


const Parent = () =>{
    const[count, setCount] = useState()

    const handleChangeCount = () =>{

        const newInitailCount = Math.floor(Math.random() * 100)
        setCount(newInitailCount)
    }
    
    
    return(
        <div>
            
            <Counter initialiseCount={count}></Counter>
            <button onClick={handleChangeCount} className="random">Charger une valeur aléatoire</button>
        </div>
    )
}

export default Parent;