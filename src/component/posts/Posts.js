import {useEffect, useState} from "react";
import {getPosts} from "../../service/user.service";
import Post from "./Post";
import Comments from "../comments/Comments";

export default function Posts({userId}){
    let [posts, setPosts] = useState([]);
    useEffect(() =>{
        getPosts(userId).then(value => setPosts([...value]))

    }, [])

    return (
        <div>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    )
}