import React, { useEffect, useState } from 'react'

import LoadingGithubAPI from "../UseEffect/LoadingGithubAPI";
import GithubUsers from "./GithubUsers";

const UseEffectApi = () => {

    const [users, setUsers] = useState([])

    const [load, setLoad] = useState(true)

    const getUsers = async () => {
        // error handling
        try {

            const response = await fetch('https://api.github.com/users')
            setLoad(false)
            // console.log(response);

            // convert data to json format
            // const data = await response.json()
            // console.log(data);

            setUsers(await response.json())
        } catch (error) {
            setLoad(false)
            console.log(error);
        }
    }

    useEffect(() => {
        getUsers();

        // use [] to run for the first time else it will go infinte loop
    }, []);

    if (load) {
        return <LoadingGithubAPI />
    }

    return (
        <>
            {/* we fetch data from another Component */}
            <GithubUsers users={users}/>
            {/* passing users data to another Component  GithubUsers*/}
        </>
    )
}

export default UseEffectApi
