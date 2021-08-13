
import {useEffect, useState} from "react";
import Post from "./Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    console.log(posts);
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [])


    return (
        <div>
            {
                posts.map(value=><Post post={value}/>)
            }
        < /div>

    )
}