import React, {useState, useEffect} from 'react'

const UseEffect2 = () => {

    const [width, setWidth] = useState(window.screen.width)

    const actualWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        console.log("Add");
        window.addEventListener("resize", actualWidth)

        // cleanup function
        return() => {
            console.log("Remove");
            window.removeEventListener("resize", actualWidth)
        }
    })

    return (
        <>
            <div className='container text-center'>
                <p>Actuali size of the window</p>
                <h3>{width}</h3>
            </div>
        </>
    )
}

export default UseEffect2
