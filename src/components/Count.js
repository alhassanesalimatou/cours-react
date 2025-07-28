import { useState } from 'react'
import style from './Count.module.css'


const Counter = ({initialiseCount}) =>{
    const[count, setCount] = useState(initialiseCount)
    const increment = () => setCount(count +1)
    const decrement = () => setCount(count -1)
    const reinitaliser = () => setCount(0)
    return(
        <div className={style.Container}>
            <h1>Valeur {count}</h1>
            <div className={style.button}>
            <button className={style.Increment} onClick={increment}>+</button>
            <button className={style.Decrement} onClick={decrement}>-</button>
            <button className={style.Reinitaliser} onClick={reinitaliser}>Réinitialiser</button>
            </div>
        </div>
    )
}

export default Counter