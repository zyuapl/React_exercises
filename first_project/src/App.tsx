
import { useState } from "react"
import User from "./User"
import Form from "./Form";

let id = 10;

export default function App() {

  const [users, setUsers] = useState<IUserWithID[]>([
    {firstName: "Jan", lastName: "Kowalski", age: 100, id: 1},
    {firstName: "", lastName: "", age: 100, id: 2},
    {firstName: "Kok", lastName: "Kofev", age: 100, id: 3},
  ]);

  function addUser(newUser: IUser) {
    const newUserWithID = {...newUser, id: id++};
    setUsers([...users, newUserWithID]);
  }

  return <>
    <Form addUser={addUser}/>
    <div>Lista</div>
    {users.map((user) => (
      <div key={user.id}>
        <User
          user = {user}
          />
      </div>
    ))}
  </>
}