import { types } from "../types/types"

const initialState = {
    checking: true,
    name: null,
    uid: null
}

export const authReducer = (state = initialState, { type = '', payload = null }) => {
    switch (type) {
        case types.authLogin:
            return {
                ...state,
                checking: false,
                ...payload
            }
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }
        default:
            return state
    }
}
