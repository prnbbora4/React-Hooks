import React, { useReducer } from 'react'


// We use useReducer for multiple state control with dispatch method
const UseReducer = () => {

    const initialState = 0;

    // declare reducer function here and it has two arguments
    // action is again a function here, action has its type
    const reducer = (state, action) => {
        console.log(state, action);

        if(action.type === "INCREMENT"){
            return state + 1
        }

        if(action.type === "DECREMENT"){
            return state - 1
        }
        return state
    }



    // use of useReducer hook 
    // reducer is a function, another is initial value
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <>
            <div className='container text-center'>
                <h1>{state}</h1>

                {/* with the help of dispatch , we run the action function here */}
                <button className="btn btn-primary" onClick={ () => dispatch({type: "INCREMENT"}) }>Inc</button> &nbsp;
                <button className="btn btn-primary" onClick={ () => dispatch({type: "DECREMENT"}) } >Dec</button>
            </div>
        </>
    )
}

export default UseReducer
