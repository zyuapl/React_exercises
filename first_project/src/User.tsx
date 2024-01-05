interface IProps {
    user: IUser;
}

export default function User({user}: IProps):React.ReactElement {
    
    const {firstName, lastName, age} = user;

    if (firstName && !lastName) {
        return <>Brak danych</>
    }

    return (<>
    {firstName} {lastName} {age}
    </>);
}