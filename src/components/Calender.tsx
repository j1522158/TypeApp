import FullCalendar from '@fullcalendar/react'
import React from 'react'
import dayGridPlugin from "@fullcalendar/daygrid"
import jaLocale from "@fullcalendar/core/locales/ja"
import "../calender.css"

const Calender = () => {
  return (
    <FullCalendar 
    locale={jaLocale}
     plugins={[dayGridPlugin]}
     initialView='dayGridMonth'
    />
  )
}

export default Calender