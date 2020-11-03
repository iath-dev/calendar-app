import { noTokenFetch } from "../helpers/fectch";
import { types } from "../types/types";

export const startLogin = (email, password) => {
    return async dispatch => {
        const res = await noTokenFetch('auth', { email, password }, "POST")

        const body = await res.json()

        if (body.ok) {
            localStorage.setItem('token-calendar', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())

            dispatch(login({ uid: body.uid, name: body.name }))
        }
    }
}

const login = user => ({
    type: types.authLogin,
    payload: user
})
