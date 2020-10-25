import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment'
import Swal from 'sweetalert2'

import './modal.css'
import { useSelector, useDispatch } from 'react-redux';
import { uiModalClose } from '../../actions/uiActions';
import { calendarAddEvent, calendarEditEvent } from '../../actions/calendarActions';
 
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

const now = moment().add(1, 'h')

Modal.setAppElement('#root')

const initEvent = {
    start: now.toDate(),
    end: now.clone().add(2, 'h').toDate(),
    title: 'titulo',
    notes: ''
}

const CalendarModal = () => {
    
    const { ui: { modal }, calendar: { active } } = useSelector(state => state)
    const dispatch = useDispatch()

    const [values, setValues] = useState({
        ...initEvent
    })

    const {
        start,
        end,
        title,
        notes
    } = values

    const handleCloseModal = () => {
        setValues(initEvent)
        dispatch(uiModalClose())
    }

    const handleChangeDate = (date, value) => {
        setValues(vals => ({ ...vals, [date]: value }))
    }

    const handleInputChange = ({ target: { name, value } }) => setValues(vals => ({ ...vals, [name]: value }))

    const handleSubmit = e => {
        e.preventDefault()

        const momentStart = moment(start)
        const momentEnd = moment(end)

        if (momentStart.isSameOrAfter(momentEnd)) {
            return Swal.fire({
                title: 'Error...',
                text: 'Las dos fechas no pueden ser iguales',
                icon: 'error'
            })
        }

        if (title.trim().length < 2) {
            return Swal.fire({
                title: 'Error',
                text: 'El titulo debe tener mínimo 2 caracteres',
                icon: 'error'
            })
        }

        if (active) {
            dispatch(calendarEditEvent(values))
        } else {
            dispatch(calendarAddEvent(
                {
                    ...values,
                    id: new Date().getTime(),
                    user: {
                        _id: '123',
                        name: 'Fernando'
                    }
                }
            ))
        }
        handleCloseModal()
    }

    useEffect(() => {
        if (active) {
            setValues(active)
        } else {
            setValues(initEvent)
        }
        
    }, [active])

    return (
        <Modal
            isOpen={modal}
            onRequestClose={handleCloseModal}
            style={customStyles}
            closeTimeoutMS={200}
            contentLabel="Example Modal"
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        onChange={d => handleChangeDate('start', d)}
                        required
                        name="start"
                        value={start}
                        className="form-control"
                    />
                    {/* <input className="form-control" placeholder="Fecha inicio" /> */}
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        onChange={d => handleChangeDate('end', d)}
                        required
                        name="end"
                        minDate={start}
                        value={end}
                        className="form-control"
                    />
                    {/* <input className="form-control" placeholder="Fecha inicio" /> */}
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        value={title}
                        autoComplete="off"
                        onChange={handleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        value={notes}
                        name="notes"
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}

export default CalendarModal
