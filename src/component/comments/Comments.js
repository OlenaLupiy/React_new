import {useEffect, useState} from "react";

import Comment from "./Comment";

export default function Comments(){

    let [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [])

    return (
        <div>
            {posts.map(value => <Comment comment={value}/>)}
        </div>
    )
}