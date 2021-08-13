import Comments from "../comments/Comments";
import './post.css'

export default function Post({post}){

    return (
        <div>
            <span className={'post'}>{post.id}. {post.title}</span>
            <p className={'post'}>{post.body}</p>
            <Comments postId={post.id}/>
        </div>
    )
}