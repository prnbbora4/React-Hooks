import React, {useState} from 'react'

const BasicTodoOne = () => {

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

    // clear All
    const clearArray = () => {
        setmyArray([]);
    }

    // clear particular Todo
    const removeTodo = (id) => {
        // alert(id)
        const myNewArray = myArray.filter((curElem) => {
            return curElem.id !== id;
        })

        setmyArray(myNewArray)
    }
    return (
        <>
            {
                myArray.map((curElement) =>{
                    return <p className="container text-center" key={curElement.id}>Name : {curElement.myName} & Age : {curElement.age}
                    <button className=" btn-danger" onClick={() => removeTodo(curElement.id)}>Remove</button>
                    </p>
                })
            }
            <center>
            <button className="btn btn-primary" onClick={clearArray}>Clear</button>
            </center>
        </>
    )
}

export default BasicTodoOne
