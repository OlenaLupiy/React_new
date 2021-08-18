export default function Post({post, chosePost}){

const onclickPost = ()=>{
    chosePost(post);
}
    return (
        <div>
            <h2>{post.id} {post.title}</h2> <button onClick={onclickPost}>Details about post</button>
        </div>
    )
}