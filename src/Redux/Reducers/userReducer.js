import userTypes from "../Users/UserType"


const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case userTypes.SET_CURRENT_USER:
            console.log(type, "userRedu payload")
            return {
                ...state,
                currentUser: payload,

            }

        default:

            return state;
    }
}
export default userReducer;