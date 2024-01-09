import { useState } from "react";
import "./user.scss";
import UserDetails from "./UserDetails";
import { Link } from "react-router-dom";

interface IProps {
    user: IUserWithID;
    isOpen: boolean;
    onClick: () => void;
    deleteUser: () => void;
}

export default function User({user, isOpen, onClick, deleteUser}: IProps):React.ReactElement {
    
    const {firstName, lastName, age, id} = user;

    if (firstName && !lastName) {
        return <>Brak danych</>
    }

    return (
    <div className="user_table">
        <section className="name_sec" onClick={onClick}>
        <span className="name">{firstName}</span>
        <span className="name">{lastName}</span> 
        </section>    
        <Link to={`${id}`}>Profil</Link>
        {isOpen && <UserDetails age = {age} deleteUser={deleteUser}/>}
    </div>
    );
}