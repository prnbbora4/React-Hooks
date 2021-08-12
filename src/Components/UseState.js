import React, {useState} from 'react'


// we use useState hook for updating the data 
const UseState = () => {
    const [myname, setMyname] = useState('Pranab')

    const handleClick = () => {

        if(myname==='Pranab'){
            setMyname('Learning hook')
        }else{
            setMyname('Pranab')
        }
    }

    return (
        <div>
            <center>
            <h1>{ myname }</h1>
            <input type="submit" name="submit" value="Click" onClick={handleClick}/>
            <p> {setMyname} </p>
            </center>
        </div>
    )
}

export default UseState
