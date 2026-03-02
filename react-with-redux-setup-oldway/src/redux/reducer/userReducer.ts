import { CLEAR_USERS, SET_USER } from "../constants/user"

const initialState = {
    user: null
}

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case CLEAR_USERS:
            return {
                initialState
            }
        default:
            return state
    }

}

export default userReducer