export default function Comment({comment, choseComment}){
    const onClickComment = ()=>{
       choseComment(comment)
    }

    return (
        <div>
            <h2>{comment.id}-{comment.name}</h2> <button onClick={onClickComment}>This comment</button>
        </div>
    )
}