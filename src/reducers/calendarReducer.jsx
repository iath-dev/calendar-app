import { types } from "../types/types";
import moment from "moment";

const initialState = {
    events: [{
        id: 123,
        title: 'Cumpleaños del jefe',
        start: moment().toDate(),
        end: moment().add(2, "hours").toDate(),
        bgColor: '#fafafa',
        notes: 'Comprar regalo',
        user: {
            _id: 123456,
            name: 'Jesus Neira'
        }
    }],
    active: null
}

export const calendarReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.calendarGetEvents:
            return {
                ...state,
                events: payload
            }
        case types.calendarSetEvent:
            return {
                ...state,
                active: payload
            }
        case types.calendarAddEvent:
            return {
                ...state,
                events: [...state.events, payload]
            }
        case types.calendarEditEvent:
            return {
                ...state,
                events: [...state.events.map(event => event.id === payload.id ? ({ ...event, ...payload }) : event)]
            }
        case types.calendarClearActive:
            return {
                ...state,
                active: null
            }
        case types.calendarDeleteEvent:
            return {
                ...state,
                active: null,
                events: [...state.events].filter(evt => evt.id !== payload)
            }
        default:
            return state
    }
}
