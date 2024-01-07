import { useState } from "react";
import "./user.scss";
import UserDetails from "./UserDetails";

interface IProps {
    user: IUser;
    isOpen: boolean;
    onClick: () => void;
    deleteUser: () => void;
}

export default function User({user, isOpen, onClick, deleteUser}: IProps):React.ReactElement {
    
    const {firstName, lastName, age} = user;

    if (firstName && !lastName) {
        return <>Brak danych</>
    }

    return (
    <div className="user_table">
        <section className="name_sec" onClick={onClick}>
        <span className="name">{firstName}</span>
        <span className="name">{lastName}</span> 
        </section>    
        {isOpen && <UserDetails age = {age} deleteUser={deleteUser}/>}
    </div>
    );
}