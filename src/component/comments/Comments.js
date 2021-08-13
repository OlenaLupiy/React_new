import {useEffect, useState} from "react";
import Comment from "./Comment";
import {getComments} from "../../service/user.service";

export default function Comments(){
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        getComments().then(value => setComments([...value]))
    }, [])

    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }

        </div>
    )
}