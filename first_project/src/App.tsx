
import { useState } from "react"
import User from "./User/User"
import Form from "./Form/Form"
import "./index.scss";

let id = 10;

export default function App() {

  const [users, setUsers] = useState<IUserWithID[]>([
    {firstName: "Jan", lastName: "Kowalski", age: 100, id: 1},
    {firstName: "Koko", lastName: "Joko", age: 100, id: 2},
    {firstName: "Lokaj", lastName: "Kofev", age: 100, id: 3},
  ]);

  function addUser(newUser: IUser) {
    const newUserWithID = {...newUser, id: id++};
    setUsers([...users, newUserWithID]);
  }

  return (
  <div className="main">
    <div className="add_form">
    <Form addUser={addUser}/>
    </div>
    <div className="table">
      <section className="table_header">
    <h1>Lista</h1>
    </section>
    <section className="table_body">
      <table>
        <thead>
      <tr>
        <th>Imię</th>
        <th>Nazwisko</th>
        <th>Wiek</th>
      </tr>
      </thead>
      </table>
    </section>
    <section className="user">
    {users.map((user) => (
        <User
          key={user.id}
          user = {user}
          />
    ))}
    </section>
    </div>
  </div>)
}