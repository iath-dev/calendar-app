import { types } from "../types/types";

export const calendarAddEvent = event => ({
    type: types.calendarAddEvent,
    payload: event
})

export const calendarSetEvent = event => ({
    type: types.calendarSetEvent,
    payload: event
})

export const calendarEditEvent = event => ({
    type: types.calendarEditEvent,
    payload: event
})

export const calendarClearEvent = () => ({
    type: types.calendarClearActive
})

export const calendarDeleteEvent = (id) => ({
    type: types.calendarDeleteEvent,
    payload: id
})