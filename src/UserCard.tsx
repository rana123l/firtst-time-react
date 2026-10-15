import"./userCard.css"

export default function UserCard({user}){
     return (
        <div className="user">
            <p>Name:{user.name}</p>
        </div>
     )
}