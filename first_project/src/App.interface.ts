interface IUser {
    firstName: string | undefined;
    lastName: string | undefined;
    age: number | undefined;
}

interface IUserWithID extends IUser {
    id: number;
}