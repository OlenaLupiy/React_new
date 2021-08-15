import Posts from "../posts/Posts";
import './user.css'

export default function User({user}) {

    return (
        <div>
            {console.log('User')}
            <h2 className={'user'}>{user.id}. {user.name}, {user.username}</h2>
            <p className={'user'}>{user.address.city} {user.address.street}</p>
             <div>
                 <Posts userId = {user.id}/>
             </div>

        </div>
    )
}