import {useEffect, useState} from "react";
import {getAllComments} from "../services/posts.services";
import Comment from "../comment/Comment";
import './Comments.css'

export default function Comments(){

    const [comments, setComments] = useState([]);
    const [bodyOfComment, setBodyOfComment] = useState(null);

    useEffect(()=>{
        getAllComments().then(value => setComments([...value]))
    }, []);

    const choseComment = (com)=>{
        setBodyOfComment(com)
    }
    return (
        <div className={'main'}>
            <div className={'comments'}>
                {
                    comments.map(value => <Comment key={value.id} comment={value} choseComment={choseComment}/>)
                }
            </div>
            { bodyOfComment && <div className={'comment'}>{bodyOfComment.body}</div>}
        </div>
    )
}