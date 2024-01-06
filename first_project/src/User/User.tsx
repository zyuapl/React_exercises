import "./user.scss";

interface IProps {
    user: IUser;
}

export default function User({user}: IProps):React.ReactElement {
    
    const {firstName, lastName, age} = user;

    if (firstName && !lastName) {
        return <>Brak danych</>
    }

    return (<>
    <div className="user_table">
        <table>
            <tbody>
                <tr>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{age}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </>);
}