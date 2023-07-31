import { useEffect, useRef } from "react";


function Form(){
    const inputRef = useRef(null);

    useEffect(()=>{
        console.log(inputRef.current);
        inputRef.current.focus();
    },[])

    return(
        <div>
            <p>
                <input ref={inputRef} type="text" placeholder="Enter Something" />
            </p>
        </div>
    )
}

export default Form;