import React, {useContext} from 'react'

// Retriving data from CompA
import { BioData } from "./CompA";

const CompC = () => {

    // step3: useContext to get the data 
    const myname = useContext(BioData)
    
    return (
        <div>
            <h1>CompC {myname}</h1>
        </div>
    )
}

export default CompC
