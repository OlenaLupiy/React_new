import {useEffect, useState} from "react";
import {getAllPosts} from "../services/posts.services";
import Post from "../post/Post";
import './Posts.css'
import Comments from "../comments/Comments";

export default function Posts(){
    const [posts, setPosts] = useState([]);
    const [bodyOfPost, setBodyOfPost] = useState(null);

    useEffect(()=>{
        getAllPosts().then(value => setPosts([...value]))
        console.log('work')
    }, [])

    const chosePost = (p)=>{
        console.log(p)
    setBodyOfPost(p)
    }

    return (
        <div className={'main'}>
            <div className={'posts'}>
                {posts.map(value => <Post key={value.id} post={value} chosePost={chosePost}/>)}
            </div>

                {
                    bodyOfPost && <div className={'post'}>{JSON.stringify(bodyOfPost.body)}</div>
                }

        </div>
    )
}