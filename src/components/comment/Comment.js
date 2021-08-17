export default function Comment({comment}){

    return (
        <div>
            <h5>Comments #{comment.id}</h5>
             {comment.body}
        </div>
    )
}