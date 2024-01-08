import {useRef, useState} from "react";
import "./form.scss";
import useUserContext from "../UserContext";
import { useNavigate } from "react-router-dom";

export default function Form():React.ReactElement {
    
    const {addUser} = useUserContext();
    const navigate = useNavigate();
    
    const [user, setUser] = useState<IUser>({
        firstName: "",
        lastName: "",
        age: undefined
    });

    const formRef = useRef<HTMLFormElement>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUser({...user, [e.target.name]: e.target.value});
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        addUser(user);
        setUser({firstName:"",lastName:"", age: undefined});
        formRef.current?.reset();
        formRef.current?.firstName.focus();
        navigate("/users");
    }

    return(
        <div className="form_main">
        <form className="form" onSubmit={handleSubmit} ref={formRef}>
            <input onChange={handleChange} type="text" name="firstName" placeholder="Imię" />
            <input onChange={handleChange} type="text" name="lastName" placeholder="Nazwisko" />
            <input onChange={handleChange} type="number" name="age" placeholder="Wiek" />
            <button type="submit" disabled={!user.firstName || !user.lastName || !user.age}>Dodaj</button>
        </form>
        </div>
    )
}