import React from "react"
import "./user.scss";

interface IProps {
    age: number | undefined;
    deleteUser: () => void;
}

export default function UserDetails({age, deleteUser}: IProps): React.ReactElement {

    return (
        <div>
        <section className="user_det">
            Wiek: {age}
        </section>
        <button onClick={deleteUser}>Usuń</button>
        </div>
    );
}