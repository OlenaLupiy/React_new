import User from "./User";
import {useEffect, useState} from "react";

export default function Users(){

    //     let [users, setUsers] = useState([]);
    // console.log(users);
    //
    //     useEffect(() => {
    //         fetch('https://jsonplaceholder.typicode.com/users')
    //             .then(response => response.json())
    //             .then(value => setUsers(value))
    //     }, []);
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])

    return (
        <div>
            {
                users.map(value=><User user={value}/>)
            }



        </div>
    )
}