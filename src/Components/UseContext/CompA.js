import React, { createContext } from 'react'
import CompB from './CompB'

// useContext is use for passing data to child components
// it is better then props
// it send the data to required component without passing through the middle components 

// use of useContext is called Popsdrilling
// means we do not use props here


// step1: create Context
const BioData = createContext();

const CompA = () => {
    return (
        // step2: Provider and send data
        // we can send any object, array string etc
        <BioData.Provider value={"Pranab Bora"}>  
             <CompB />
        </BioData.Provider>
    )
}

export default CompA

// we have to this create context 

export {BioData}