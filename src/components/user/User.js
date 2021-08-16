
export default function User({user, thisUser}){
    const onClickChoseUser = () => {
        console.log(user)
    }
    return (
        <div>
            {user.id} - {user.name} <button onClick={()=>thisUser(user)}>details</button>
        </div>
    )
}