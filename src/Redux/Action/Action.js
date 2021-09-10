import UserType from "../Users/UserType";

export const setCurrentUser = user => ({
    type: UserType.SET_CURRENT_USER,
    payload: user

});