import {useEffect, useState} from "react";
import Comments from "../comments/Comments";
import {getCommentsOfUser} from "../../services/fetch.services";

export default function Post({item}){
    console.log(item.id);
   let [comments, setComments] = useState([]);
   useEffect(()=>{
       getCommentsOfUser(item.id).then(value => setComments([...value]))
   }, [])
    return (
        <div>
            <hr/>
            <h3>Posts #{item.id}</h3>
            {item.title}
            <hr/>
            <Comments comments={comments}/>
        </div>

    );
}