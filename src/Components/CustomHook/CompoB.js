import React, {useEffect, useState} from 'react'

// import custom hook
import useTitleCount from "./useTitleCount";


const CompoB = () => {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count+1);
    }

    // calling custom hook
    useTitleCount(count)

    console.log("main function");
    return (
        <>
            <div className="container text-center">
                <p> {count} </p>
                <button className="btn btn-primary" onClick={handleClick}>Click</button>
            </div>
        </>
    )
}

export default CompoB
