import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiModelOpen } from '../../actions/uiActions'
import { calendarSetEvent, calendarClearEvent, calendarDeleteEvent } from '../../actions/calendarActions'

const Navbar = () => {

    const dispatch = useDispatch()
    const { active } = useSelector(state => state.calendar)

    const handleOpenModal = () => {
        dispatch(calendarClearEvent())
        dispatch(uiModelOpen())
    }

    const handleDeleteEvent = () => {
        if (active) {
            dispatch(calendarDeleteEvent(active.id))
        }
    }

    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                Kunai
            </span>

            <div className="btn-group">

                <button className="btn btn-outline-light" onClick={handleOpenModal}>
                    <i className="fas fa-plus" />
                    <span className="pr-1">Añadir</span>
                </button>

                {
                    active && (
                        <button className="btn btn-outline-danger" onClick={handleDeleteEvent}>
                            <i className="fas fa-trash" />
                            <span className="pr-1">Eliminar</span>
                        </button>
                    )
                }

                <button className="btn btn-outline-danger">
                    <i className="fas fa-sign-out-alt" />
                    <span className="pr-1">Salir</span>
                </button>
            </div>
        </div>
    )
}

export default Navbar
