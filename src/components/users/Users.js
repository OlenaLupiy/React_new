import {useEffect, useState} from "react";
import {getUser, getUsers} from "../../services/fetch.services";
import User from "../user/User";

export default function Users(){

    let [users, setUsers] = useState([]);
    useEffect(()=> {
        getUsers().then(value => setUsers([...value]))
    }, []);



    return (
        <div>
            {
                users.map(userItem => <User key={userItem.id} user={userItem}/>)
            }

        </div>
    )
}