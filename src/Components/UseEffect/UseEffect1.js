import React, {useEffect, useState} from 'react'

const UseEffect1 = () => {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count+1);
    }

    // rerender at every refresh

    useEffect(() => {
        console.log("useEffect First");
        // change title in js
        if(count>=1){
            document.title = `Chats (${count})`
        }else{
            document.title = `Chat`
        }
        // dependency list is use to run conditionaly 
        // in this case when count value is updated this useEffect will run
    }, [count])

    useEffect(() => {
        console.log("second");
        // if dependency list declared as empty then it will run only first time
    }, [])

    // we can use multiple useEffect



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

export default UseEffect1
