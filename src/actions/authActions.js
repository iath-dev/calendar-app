import Swal from 'sweetalert2'

import { noTokenFetch, TokenFetch } from "../helpers/fectch";
import { types } from "../types/types";

export const startRegister = (name, email, password) => {
    return async dispatch => {
        const res = await noTokenFetch('auth/signup', { name, email, password }, "POST")

        const body = await res.json()

        if (body.ok) {
            localStorage.setItem('token-calendar', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())

            dispatch(login({ uid: body.uid, name: body.name }))
        } else {
            Swal.fire({
                title: 'Error',
                text: body.msg,
                icon: 'error'
            })
        }
    }
}

export const startLogin = (email, password) => {
    return async dispatch => {
        const res = await noTokenFetch('auth', { email, password }, "POST")

        const body = await res.json()

        if (body.ok) {
            localStorage.setItem('token-calendar', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())

            dispatch(login({ uid: body.uid, name: body.name }))
        } else {
            Swal.fire({
                title: 'Error',
                text: body.msg,
                icon: 'error'
            })
        }
    }
}

export const startRenewToken = () => {
    return async dispatch => {
        const res = await TokenFetch('auth/renew')

        const body = await res.json()

        if (body.ok) {
            localStorage.setItem('token-calendar', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())

            dispatch(login({ uid: body.uid, name: body.name }))
        } else {
            Swal.fire({
                title: 'Precaución',
                text: body.msg,
                icon: 'warning'
            })
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish })

const login = user => ({
    type: types.authLogin,
    payload: user
})
