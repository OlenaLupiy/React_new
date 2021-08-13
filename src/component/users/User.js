import './user.css'

export default function User({user}) {



    return (

           <div className={'user'}>
               <h2>{user.name}</h2>
               <h3>{user.username}</h3>
               <p>{user.email}</p>
               <hr/>
               address:
               <h4>{user.address.city}</h4>
               <h4>{user.address.suite}</h4>
               <h4>{user.address.street}</h4>


           </div>

    )
}