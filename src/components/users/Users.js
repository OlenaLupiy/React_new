import {useEffect, useState} from "react";
import {getPostsOfUser, getUsers} from "../../services/users.fetch.services";
import User from "../user/User";
import './Users.css'
import Posts from "../posts/Posts";

export default function Users(){
    let[users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    useEffect(()=>{
        getUsers().then(value => setUsers([...value]))
    },[])
    //getPostsOfUser(u.id).then(value => )

    const thisUser = (u)=>{
setUser(u.id)
    }

    return (
        <div className=" wrap" >
            <div className={'users-box'}>
                {
                    users.map(value => <User key={value.id}
                    user={value}
                    thisUser={thisUser}/>)
                }
            </div>
            {user && <div className={'chosen-one'}>
                <Posts id={user}/>
            </div>}
        </div>
    )
}