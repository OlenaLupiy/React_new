import {useEffect, useState} from "react";
import {getPosts} from "../../service/user.service";
import Post from "./Post";

export default function Posts(){
    let [posts, setPosts] = useState([]);
    useEffect(() =>{
        getPosts().then(value => setPosts([...value]))

    }, [])

    return (
        <div>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    )
}