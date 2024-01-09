import User from "./User";
import "./user.scss";
import {useCollapse} from "../hooks/useCollapse";
import { useFilter } from "../hooks/useFilter";
import useUserContext from "../UserContext";
import { Outlet } from "react-router-dom";

export default function UserList(): React.ReactElement {
    
    const {users, deleteUser} = useUserContext();

    const {activeIndex, setActive} = useCollapse();

    const {filter, search, setSearch} = useFilter(users, "lastName");

    return (
        <div className="table">
            <section className="table_header">
                <h1>Lista</h1>
            </section>
            <section className="search">
                <input
                type="text"
                placeholder="Szukaj..."
                value={search}
                className="input"
                onChange={(e) => setSearch(e.target.value)}
                />
            </section>
            <section className="name_sec">
                <span className="name">Imię</span>
                <span className="name">Nazwisko</span>
            </section>
            <section className="user">
                {filter.map((user, index) => (
                <User
                key={user.id}
                user = {user}
                isOpen = {index === activeIndex}
                onClick = {() => setActive(index)}
                deleteUser = {() => {
                    deleteUser(user.id);
                    setActive(undefined);
                }}
                />
                ))}
            </section>
            <div>
                <Outlet />
            </div>
    </div>
    )
}