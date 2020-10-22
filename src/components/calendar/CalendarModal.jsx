import React from 'react'
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment'

import './modal.css'
 
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

Modal.setAppElement('#root')

const CalendarModal = () => {
    return (
        <Modal
            isOpen={true}
            onRequestClose={console.log}
            style={customStyles}
            closeTimeoutMS={200}
            contentLabel="Example Modal"
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container">

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker onChange={console.log} required name="startDate" value={moment().toDate()} className="form-control" />
                    {/* <input className="form-control" placeholder="Fecha inicio" /> */}
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker onChange={console.log} required name="endDate" value={moment().add(1, 'hours').toDate()} className="form-control" />
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
                        autoComplete="off"
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
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