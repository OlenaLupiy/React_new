import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/users.fetch.services";
import Post from "../post/Post";
export default function Posts({id}){
    // function AllPostsOfUsers(props) {
    //     let id = props.id
    //
    //     let [allPostOfUser, setAllPostOfUser] = useState([]);
    let [posts, setPosts] = useState([]);
    useEffect(()=>{
        getPostsOfUser(id).then(value => setPosts([...value]))
    }, [id])
    //
    //     console.log(allPostOfUser)
    //     useEffect(() => {
    //         getPostsOfUser(id).then(value => setAllPostOfUser(value))
    //         console.log(`Fetch Posts`)
    //     },[id])
    //
    //
    //     return (
    //         <div className={`allposts`}>
    //             {allPostOfUser.map((post,i)=> <PostOfUser post={post} key={i} /> )}
    //         </div>
    //     );
    
    return (
        <div>
            {
                posts.map(post=> <Post key={post.id} post={post}/>)
            }
        </div>
    )
}