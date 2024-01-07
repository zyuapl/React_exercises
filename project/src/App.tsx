
import { useReducer, useState } from "react"
import User from "./User/User"
import Form from "./Form/Form"
import "./index.scss";
import UserList from "./User/UserList";
import userReducer from "./userReducer";

let id = 10;

const initialState = [
  {firstName: "Jan", lastName: "Kowalski", age: 100, id: 1},
  {firstName: "Koko", lastName: "Joko", age: 100, id: 2},
  {firstName: "Lokaj", lastName: "Kofev", age: 100, id: 3},
];

export default function App() {

  const [state, dispatch] = useReducer(userReducer, initialState);

  function addUser(newUser:IUser) {
    dispatch({type: "ADD_USER", payload: newUser});
  }

  function deleteUser(id: number) {
    dispatch({type: "DELETE_USER", payload: {id}});
  }

  return (
  <div className="main">
    <Form addUser={addUser}/>
    <UserList 
    users={state}
    deleteUser={deleteUser}
     />
  </div>)
}