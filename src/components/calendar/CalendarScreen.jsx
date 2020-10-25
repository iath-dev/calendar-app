import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { messages } from '../../helpers/calendar';

import Navbar from '../ui/Navbar'
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiModelOpen } from '../../actions/uiActions';
import { calendarSetEvent, calendarClearEvent } from '../../actions/calendarActions';

const localizar = momentLocalizer(moment)

// const events = []

const CalendarScreen = () => {

    const { events } = useSelector(({ calendar }) => calendar)
    const dispatch = useDispatch()

    const handleViewChange = range => {
        localStorage.setItem('calendar-range', range)
    }

    const handleSelectEvent = event => {
        dispatch(calendarSetEvent(event))
    }

    const handleDoubleClickEvent = () => {
        dispatch(uiModelOpen())
    }

    const handleClickSlot = () => {
        dispatch(calendarClearEvent())
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        
        const style = {
            backgroundColor: '#367cf7',
            borderRadius: '0px',
            opacity: isSelected ? 0.8 : 1,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }

    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
                localizer={localizar}
                events={events}
                defaultView={localStorage.getItem('calendar-range') || 'month'}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}
                onView={handleViewChange}
                onSelectSlot={handleClickSlot}
                selectable
                onSelectEvent={handleSelectEvent}
                onDoubleClickEvent={handleDoubleClickEvent}
            />
            <CalendarModal />
        </div>
    )
}

export default CalendarScreen
