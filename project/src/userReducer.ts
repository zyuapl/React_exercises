let id = 10;

type ACTION =
| {type: "SET_USERS"; payload: IUserWithID[]}
| {type: "ADD_USER"; payload: IUserWithID}
| {type: "DELETE_USER"; payload: {id: number}};

export default function userReducer(state: IUserWithID[], action: ACTION) {

    switch(action.type) {
        case "SET_USERS":
            return action.payload;
        case "ADD_USER":
            return [...state, {...action.payload, id: id++}];
        case "DELETE_USER":
            return state.filter((user) => user.id !== action.payload.id);
        default:
            throw new Error();
    }

}