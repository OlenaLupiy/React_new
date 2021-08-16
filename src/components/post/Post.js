export default function Post({post}){
    
    return (
        <div>
            <h3>{post.userId} - {post.id} - {post.title}</h3>
        </div>
    )
}