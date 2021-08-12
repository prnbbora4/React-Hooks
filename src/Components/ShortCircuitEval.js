import React, {useState} from 'react'

const ShortCircuitEval = () => {
    const [demo, setDemo] = useState('')
    return (
        <div>
            {/* or operator */}
            <h1> { demo || 
            <>
                <h1>Hello</h1>
                <p>Test</p>
            </>
            } </h1>

            {/* and operator */}
            <h1> { demo && "pranab" } </h1>
        </div>
    )
}

export default ShortCircuitEval
