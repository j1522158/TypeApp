import FullCalendar from '@fullcalendar/react'
import React from 'react'
import dayGridPlugin from "@fullcalendar/daygrid"
import jaLocale from "@fullcalendar/core/locales/ja"
import "../calendar.css"
import { EventContentArg } from '@fullcalendar/core'

const Calendar = () => {
  const events = [
    { title: 'Meeting', start: new Date(), income: 300, expense: 500, balance: 100 },
    { title: 'Meeting2', start: "2024-06-03" },
  ]

  const renderEventContent = (eventInfo: EventContentArg) => {
    return (
      <div>
        <div className='money' id="event-income">
          {eventInfo.event.extendedProps.income}
        </div>
        <div className='money' id="event-expense">
          {eventInfo.event.extendedProps.expense}
        </div>
        <div className='money' id="event-blance">
          {eventInfo.event.extendedProps.balance}
        </div>
      </div>
    )
  }

  return (
    <FullCalendar 
    locale={jaLocale}
     plugins={[dayGridPlugin]}
     initialView='dayGridMonth'
     events={events}
     eventContent={renderEventContent}
    />
  )
}

export default Calendar