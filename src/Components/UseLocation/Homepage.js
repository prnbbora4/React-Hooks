import React from 'react'

import { useLocation, useHistory } from "react-router-dom";
// with the help of useLocation we access the current location of the page
// for redirect, goback , forward we can use useHistory
const Homepage = () => {
    const location = useLocation()
    // console.log(location);


    const history = useHistory()
    console.log(history);

    return (
        <div>
            <h1> Hello {location.pathname.replace("/", "")} Page</h1>
            <button className="btn-primary btn"
            onClick={history.goBack}
            >Go Back</button>
        </div>
    )
}

export default Homepage
