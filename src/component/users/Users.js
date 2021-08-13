import {useEffect, useState} from "react";
import User from "./User";
import {getUsers} from "../../service/user.service";

export default function Users(){
   let [users, setUsers] = useState([]);
    useEffect(()=>{
       getUsers().then(value => setUsers([...value]))
    }, [])
    return (
        <div>
            {
                users.map(value => <User  key={value.id} user={value}/> )
            }
        </div>
    )
}