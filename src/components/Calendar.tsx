import FullCalendar from '@fullcalendar/react'
import React from 'react'
import dayGridPlugin from "@fullcalendar/daygrid"
import jaLocale from "@fullcalendar/core/locales/ja"
import "../calendar.css"
import { DatesSetArg, EventContentArg } from '@fullcalendar/core'
import { Balance, CalenderContent, Transaction } from '../types'
import { calculateDailyBalances } from '../utils/financeCalculations'
import { formatCurrency } from '../utils/formatting'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'

interface CalenderProps {
  monthlyTransactions: Transaction[],
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>,
  setCurrentDay: React.Dispatch<React.SetStateAction<string>>,
  currentDay: string
}

const Calendar = ({monthlyTransactions, setCurrentMonth, setCurrentDay, currentDay}: CalenderProps) => {

  // 日付ごとの収支を計算する関数
  const dailyBalances = calculateDailyBalances(monthlyTransactions)

  // FullCalender用のイベントを生成する関数
  const createCalenderEvents = (dailyBalances: Record<string, Balance>): CalenderContent[] => {
    return Object.keys(dailyBalances).map((date) => {
      const {income, expense, balance} = dailyBalances[date]
      return {
        start: date,
        income: formatCurrency(income),
        expense: formatCurrency(expense),
        balance: formatCurrency(balance)
      }
    })
  }

  const backgroundEvent = {
    start: currentDay,
   display: "background",
   backgroundColor: "red"
  }

  const calenderEvents = createCalenderEvents(dailyBalances);
  console.log(calenderEvents)

  const renderEventContent = (eventInfo: EventContentArg) => {
    return (
      <div>
        <div className='money' id="event-income">
          {eventInfo.event.extendedProps.income}
        </div>
        <div className='money' id="event-expense">
          {eventInfo.event.extendedProps.expense}
        </div>
        <div className='money' id="event-balance">
          {eventInfo.event.extendedProps.balance}
        </div>
      </div>
    )
  }

  const handleDateSet = (datesetInfo:DatesSetArg) => {
    setCurrentMonth(datesetInfo.view.currentStart)
  }

  const handleDateClick = (dateInfo: DateClickArg) => {
    setCurrentDay(dateInfo.dateStr)
  }

  return (
    <FullCalendar 
    locale={jaLocale}
     plugins={[dayGridPlugin, interactionPlugin]}
     initialView='dayGridMonth'
     events={calenderEvents}
     eventContent={renderEventContent}
     datesSet={handleDateSet}
     dateClick={handleDateClick}
    />
  )
}

export default Calendar