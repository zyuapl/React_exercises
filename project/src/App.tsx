import Form from "./Form/Form"
import "./index.scss";
import UserList from "./User/UserList";
import useUserContext from "./UserContext";

export default function App() {

  const {users, addUser, deleteUser} = useUserContext();

  return (
  <div className="main">
    <Form addUser={addUser}/>
    <UserList 
    users={users}
    deleteUser={deleteUser}
     />
  </div>)
}