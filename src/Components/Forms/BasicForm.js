import React, { useState } from 'react'
import '../Forms/basicForm.css'
import logo from "../Forms/login_logo.png";
import { NavLink } from "react-router-dom";

const BasicForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [allEntry, setAllEntry] = useState([])


    const handleClick = (e) => {
        e.preventDefault();

        if(email && password){
            const newEntry = { id: new Date().getTime().toString(), email, password }

            setAllEntry([...allEntry, newEntry])
            console.log(allEntry);
    
            setEmail('')
            setPassword('')
        }else{
            alert("fill the data")
        }

    }
    return (
        <>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    {/* Tabs Titles */}

                    {/* Icon */}
                    <div className="fadeIn first">
                        <img src={logo} id="icon" alt="UserIcon" />
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleClick}>
                        <input type="text" id="login" className="fadeIn second" name="email" placeholder="Email" autoComplete="Off"
                            value={email}
                            onChange={(e) =>  setEmail(e.target.value) }
                        />
                        <input type="password" id="password" className="fadeIn third" name="password" placeholder="Password" autoComplete="Off"
                            value={password}
                            onChange={(e) =>  setPassword(e.target.value) }
                        />
                        <br />
                        <button type="submit" className="btn btn-primary fadeIn fourth" >Login</button>
                        {/* <input type="submit" className="fadeIn fourth" value="Log In" /> */}
                    </form>

                    {/* Remind Passowrd */}
                    <div id="formFooter">
                        <NavLink className="underlineHover" to="#">Forgot Password?</NavLink>
                    </div>

                </div>

                <div className="dispalydata">
                    {
                        allEntry.map((curElem) => {
                            const {id, email, password} = curElem;
                            return (
                                    <div className="showdata" key={id}>
                                        <p>{email}</p>
                                        <p>{password}</p>
                                    </div>
                            )

                        })
                    }
                </div>
            </div>
        </>
    )
}

export default BasicForm
