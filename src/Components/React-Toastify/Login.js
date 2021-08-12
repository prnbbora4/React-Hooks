import React from 'react'

// Import react-toastify and css file
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

    const diffToast = () => {
        // alert('hello')
        toast.error("Wow so easy!", {
            position: "top-center",
        });
        toast.success("Wow so easy!", {
            position: "top-left",
        });
        toast.dark("Wow so easy!", {
            position: "top-center",
        });
        toast.info("Wow so easy!", {
            position: "top-center",
        });
    }
    return (
        <>
            <div className='container'>
                <h1>Welcome to Login page</h1>
                <button className='btn btn-primary'
                onClick={diffToast}
                >Login</button>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login
