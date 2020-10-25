import { types } from "../types/types"

const initialState = {
    modal: false,
    loading: false
}

export const uiReducer = (state = initialState, { type = '', payload = null }) => {
    switch (type) {
        case types.uiOpenModal:
            return {
                ...state,
                modal: true
            }
        case types.uiCloseModal:
            return {
                ...state,
                modal: false
            }
        default:
            return state
    }
}
