import React from 'react'

// import of react-icon package and use as a component
import { FcApproval } from "react-icons/fc";

// receiving users data from the Component UseEffectApi
const GithubUsers = ({users}) => {
    return (
        <>
            <h1 className='text-center'>List of Github users</h1>
            <div className='container-fluid mt-5'>
                <div className='row text-center'>

                    {
                        users.map((curElem) => {
                            // Object destructuring
                            const {id, avatar_url, login, node_id} = curElem
                            return (
                                <div className='col-10 col-md-4 mt-5' key={id}>

                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                            <div className="image"> <img src={avatar_url} className="rounded" width="70" alt="pic"/> </div>
                                            <div className="ml-3 w-100">
                                                <h4 className="mb-0 mt-0 textLeft">{login} <FcApproval/></h4>
                                                {/* <span className="text-left">{type }</span> */}
                                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">

                                                    <div className="d-flex flex-column">
                                                        <span className="articles">Node Id</span> <span className="number1">{node_id}</span>
                                                    </div>

                                                    <div className="d-flex flex-column">
                                                        <span className="followers">Followers</span> <span className="number2">{node_id}</span>
                                                    </div>

                                                    <div className="d-flex flex-column">
                                                        <span className="rating">Rating</span> <span className="number3">{node_id}</span>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            )
                        })
                    }



                </div>
            </div>
        </>
    )
}

export default GithubUsers
