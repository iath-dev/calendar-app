import React from 'react'
import PropTypes from 'prop-types'

const CalendarEvent = ({ event }) => {

    const { title, notes } = event

    return (
        <div>
            <strong>{title}</strong>
            <span> - {notes}</span>
        </div>
    )
}

CalendarEvent.propTypes = {
    event: PropTypes.any.isRequired
}

export default CalendarEvent
