import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { messages } from '../../helpers/calendar';

import Navbar from '../ui/Navbar'
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';

const localizar = momentLocalizer(moment)

const events = [{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgColor: '#fafafa',
    notes: 'Comprar regalo',
    user: {
        _id: 123456,
        name: 'Jesus Neira'
    }
}]

const CalendarScreen = () => {

    const handleViewChange = range => {
        localStorage.setItem('calendar-range', range)
    }

    const handleSelectEvent = event => {
        console.log(event)
    }

    const handleDoubleClickEvent = (event) => {
        console.log({ event })
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
                onSelectEvent={handleSelectEvent}
                onDoubleClickEvent={handleDoubleClickEvent}
            />
            <CalendarModal />
        </div>
    )
}

export default CalendarScreen
