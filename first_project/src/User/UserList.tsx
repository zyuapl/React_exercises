import React, { useState } from "react";
import User from "./User";
import "./user.scss";

interface IProps {
    users: IUserWithID[];
    deleteUser: (id: number) => void;
}

export default function UserList ({users, deleteUser}: IProps): React.ReactElement {
    
    const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

    function setActiveUser(index: number) {
        if (index===activeIndex) {
            setActiveIndex(undefined);
        } else {
            setActiveIndex(index);
        }
    }

    return (
        <div className="table">
            <section className="table_header">
                <h1>Lista</h1>
            </section>
            <section className="name_sec">
                <span className="name">Imię</span>
                <span className="name">Nazwisko</span>
            </section>
            <section className="user">
                {users.map((user, index) => (
                <User
                key={user.id}
                user = {user}
                isOpen = {index === activeIndex}
                onClick = {() => setActiveUser(index)}
                deleteUser = {() => {
                    deleteUser(user.id);
                    setActiveIndex(undefined);
                }}
                />
                ))}
            </section>
    </div>
    )
}