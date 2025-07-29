import { useState } from "react"
import style from "./Count.module.css"

const Counter = ({initialiseCount}) =>{
    

    const[count, setCount] = useState(initialiseCount)
    const increment = () => setCount(count +1)
    const decrement = () => setCount(count -1)
    const reset = () => setCount(initialiseCount)

    return(
        <div className={style.container}>
            <h1>Compteur ({count})</h1>
            <div className={style.buttonContainer}>
                <button className={style.increment} onClick={increment}>+</button>
                <button className={style.decrement} onClick={decrement}>-</button>
                <button className={style.reset} onClick={reset}>Réinitialiser ({initialiseCount})</button>
            </div>
        </div>
    )
   
    
}

export default Counter