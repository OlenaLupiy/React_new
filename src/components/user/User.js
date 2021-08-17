import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/fetch.services";
import Posts from "../Posts/Posts";

export default function User({user}){

    let [posts, setPosts] = useState([])
    useEffect(()=>{
        getPostsOfUser(user.id).then(value => setPosts([...value]))
    },[])
    return (
        <div>
            <h2>{user.id}-{user.name}</h2>
            <p>{user.username}</p>
            <hr/>
             <Posts items={posts}/>
        </div>
    )
}