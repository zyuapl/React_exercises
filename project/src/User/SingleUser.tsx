import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

interface IProps {}

export default function SingleUser({}: IProps): React.ReactElement | null {
    const {id} = useParams<{id: string}>();
    const [user, setUser] = useState<IUserWithID | undefined>(undefined);

    useEffect(() => {
        api.get<IUserWithID>(`/users/${id}`).then((response) => {
            setUser(response.data);
        });

        return (() => {
            setUser(undefined);
        });
    }, [id]);

    if (!user) return <>Brak użytkownika</>;

    return (
        <div>
            <h1>{user.firstName} {user.lastName} Wiek: {user.age}</h1>
        </div>
    )
}