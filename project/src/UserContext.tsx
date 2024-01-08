import React, { PropsWithChildren, createContext, useContext, useReducer } from "react";
import userReducer from "./userReducer";

const initialState = [
    {firstName: "Jan", lastName: "Kowalski", age: 100, id: 1},
    {firstName: "Koko", lastName: "Joko", age: 100, id: 2},
    {firstName: "Lokaj", lastName: "Kofev", age: 100, id: 3},
];

const UserContext = createContext<{
users: IUserWithID[];
addUser: (newUser: IUser) => void;
deleteUser: (id: number) => void;
}>({users: [], addUser: () => {}, deleteUser: () => {}});

export function UserContextProvider({children}:PropsWithChildren): React.ReactElement {

    const [state, dispatch] = useReducer(userReducer, initialState);

    function addUser(newUser:IUser) {
        dispatch({type: "ADD_USER", payload: newUser});
      }
    
      function deleteUser(id: number) {
        dispatch({type: "DELETE_USER", payload: {id}});
      }

      return (
        <UserContext.Provider value={{users: state, addUser, deleteUser}}>
            {children}
        </UserContext.Provider>
      );
}
export default function useUserContext () {
    return useContext(UserContext);
}