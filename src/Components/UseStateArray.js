import React, {useState} from 'react'

const UseStateArray = () => {

    const bioData = [
        {
            id:0, myName: "Pranab", age: 25
        },
        {
            id:1, myName: "PranabBora", age: 24
        },
        {
            id:2, myName: "Bora", age: 23
        }
    ]

    // console.log(bioData);

    const [myArray, setmyArray] = useState(bioData)

    const clearArray = () => {
        setmyArray([]);
    }
    return (
        <>
            {
                myArray.map((curElement) =>{
                    return <p className="container text-center" key={curElement.id}>Name : {curElement.myName} & Age : {curElement.age}</p>
                })
            }
            <center>
            <button className="btn btn-primary" onClick={clearArray}>Clear</button>
            </center>
        </>
    )
}

export default UseStateArray
