import React from "react";
import '../models/IUser';
import { IUser } from "../models/IUser";

type Props={
    users: IUser[];
}

const Userlist = ({users}: Props) => {

    const userItems_jsx = users.map((userItem, index) =>{
        return (
            <div key={index}>{`${userItem.username} (${userItem.age})`}</div>
        )
    });

    return(
        <section>
            {userItems_jsx}
        </section>
    )
}

export default Userlist;