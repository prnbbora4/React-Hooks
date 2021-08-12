import React, {useRef, useState} from 'react'

const UncontrolledForm = () => {

    // it is like a useState only and it preserve the initialValue, no rerender

    const luckyname = useRef(null)
    const [show, setShow] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()

        // console.log(luckyname.current.value);

        const name = luckyname.current.value

        name === '' ? alert("Plz fill the data") : setShow(true)
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={submitForm}>
                    <label htmlFor="luckyname">Enter your lucky name</label>
                    <input type="text" ref={luckyname} ></input>
                    <input type="submit"></input>
                </form>
                <p> {show ? `your lucky name is ${luckyname.current.value}` : ""} </p>
            </div>
        </>
    )
}

export default UncontrolledForm
