import {useRef} from "react"
import style from "./Input.module.css"
import Container from "./Container";

export const Input = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <>
        <div>
            <label htmlFor={inputRef?.current?.id}>Vstupní</label>
            <input 
            ref={inputRef}
            type="text" 
            id="number" 
            className="txt-input" 
            defaultValue="2" />
        </div>
        <div>
            <button
            style={{color: "red", backgroundColor: "yellow"}}
            onClick={()=>{console.log(inputRef);alert(inputRef?.current?.value)}}>Odeslat</button>
        </div>
        </>
    );
}

export default Input