import { useState } from "react";

const Counter = (
    //{value, setValue}: {value: number, setValue: React.Dispatch<React.SetStateAction<number>>
    //{value, setValue}: {value: number, setValue: { (value: (prev:number) => number): void; (value: (prev: number) => number): void}
    //{value, setValue}: {value: number, setValue: (x: ((val:number) => number) | number) => void
    {value, setValue}: {value: number, setValue: (x:number): => void
    }) => {
    return (
        <span>
            <button onClick={e => {setValue(0)}}>Restart</button>
            <button onClick={e => {setValue(-1)}}>-</button>
            <span>{value}</span>
            <button onClick={e => {setValue(+1)}}>+</button>
        </span>
    )
}

export default Counter