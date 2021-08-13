import './comment.css'
export default function Comment({comment}){
    
    return (
        <div>
            <li className={'comment'}>{comment.body}</li>
        </div>
    )
}