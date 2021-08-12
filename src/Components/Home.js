import React from 'react'
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="container text-center">
            <h1> We are Lerning hooks</h1>
            <div align="left">
                <p> <NavLink to="/UseState"> 1. UseState </NavLink> </p>
                <p> <NavLink to="/UseStateArray"> 2. UseStateArray </NavLink> </p>
                <p> <NavLink to="/SpreadOperator"> 3. SpreadOperator </NavLink> </p>
                <p> <NavLink to="/BasicTodoOne"> 4. BasicTodoOne </NavLink> </p>
                <p> <NavLink to="/ShortCircuitEval"> 5. ShortCircuitEval </NavLink> </p>
                <p> <NavLink to="/BasicForm"> 6. BasicForm </NavLink> </p>
                <p> <NavLink to="/UseEffect1"> 7. UseEffect Ex-1 </NavLink> </p>
                <p> <NavLink to="/UseEffect2"> 8. UseEffect Ex-2 </NavLink> </p>
                <p> <NavLink to="/UseEffectApi"> 9. UseEffectApi </NavLink> </p>
                <p> <NavLink to="/UncontrolledForm"> 10. UncontrolledForm </NavLink> </p>
                <p> <NavLink to="/UseReducer"> 11. UseReducer </NavLink> </p>
                <p> <NavLink to="/UseContext"> 12. UseContext </NavLink> </p>
                <p> <NavLink to="/CompoA"> 13. CustomHook ex1 </NavLink> </p>
                <p> <NavLink to="/CompoB"> 14. CustomHook ex2 </NavLink> </p>
                <p> <NavLink to="/Login"> 15. React Toastify </NavLink> </p>
            </div>
        </div>
    )
}

export default Home
