import React from 'react'

import { useLocation, useHistory } from "react-router-dom";
const AboutUs = () => {
    const location = useLocation()
    const history = useHistory()
    return (
        <div>
            <h1>Hello {location.pathname.replace("/", "")} page</h1>
            {
                location.pathname === '/AboutUs/pranab' ?
                <p>Good to see you</p> :
                <p>Log in first </p>
            }

            <button className="btn-primary btn" 
            onClick={() => history.push('/Homepage')}> Home</button>

            {/* if function has arguments then use a anonymous funtion before it */}
        </div>
    )
}

export default AboutUs
