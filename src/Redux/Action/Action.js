import userTypes from "../Users/UserType";

export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user.currentUser

});
