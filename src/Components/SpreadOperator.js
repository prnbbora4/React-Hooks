import React, {useState} from 'react'

const SpreadOperator = () => {
    const [myObject, setMyObject] = useState({
        myName: "Pranab", age: 25
    })

    const handleClick = () => {
        // without spread operator field must be manually update
        // setMyObject({myName: "Bora", age: 25})

        // with the help of spread operator we can update particular field's value
        setMyObject({...myObject, myName: "Bora"})
    }
    return (
        <div>
            <center>
                <h1>Name : {myObject.myName} & Age:{myObject.age} </h1>
                <input type="submit" name="submit" value="Click" onClick={handleClick} />
            </center>
        </div>
    )
}

export default SpreadOperator
