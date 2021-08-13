export default function Comment({comment}){
    
    return (
        <div>
            <h2>{comment.postId} {comment.id}</h2>
            <p>{comment.body}</p>
        </div>
    )
}