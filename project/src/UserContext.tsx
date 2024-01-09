import React, { PropsWithChildren, createContext, useContext, useEffect, useReducer } from "react";
import userReducer from "./userReducer";
import api from "./api";

const initialState: IUserWithID[] = [];

const UserContext = createContext<{
users: IUserWithID[];
addUser: (newUser: IUser) => void;
deleteUser: (id: number) => void;
}>({users: [], addUser: () => {}, deleteUser: () => {}});

export function UserContextProvider({children}:PropsWithChildren): React.ReactElement {

    const [state, dispatch] = useReducer(userReducer, initialState);

    async function getUsers() {
      try {
        const response = await api<IUserWithID[]>("/users");
        dispatch({type: "SET_USERS", payload: response.data});
      } catch(error) {
        console.error(error);
      }
    }

    async function addUser(newUser: IUser) {
      try {
        const response = await api.post("/users", newUser);
        dispatch({type: "ADD_USER", payload: response.data});
      } catch(error) {
        console.error(error);
      }
    }

    async function deleteUser(id: number) {
      try {
        await api.delete(`/users/${id}`);
        dispatch({type: "DELETE_USER", payload: {id}});
      } catch(error) {
        console.error(error);
      }
    }

    useEffect(() => {
      getUsers();
    }, []);

      return (
        <UserContext.Provider value={{users: state, addUser, deleteUser}}>
            {children}
        </UserContext.Provider>
      );
}
export default function useUserContext () {
    return useContext(UserContext);
}