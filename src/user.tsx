import { use } from "react";
import UserCard from "./userCard";

function User ({userDataPromise}){
    const user =use(userDataPromise)
    console.log(user);
    return(
    <div>
        <h3>user:{user.length}</h3>
        {
            user.map(user => <UserCard user={user}></UserCard>)
        }
    </div>
    )
}
export default User;