import FullCalendar from '@fullcalendar/react'
import React from 'react'
import dayGridPlugin from "@fullcalendar/daygrid"
import jaLocale from "@fullcalendar/core/locales/ja"
import "../calendar.css"
import { EventContentArg } from '@fullcalendar/core'
import { Balance, CalenderContent, Transaction } from '../types'
import { calculateDailyBalances } from '../utils/financeCalculations'
import { formatCurrency } from '../utils/formatting'

interface CalenderProps {
  monthlyTransactions: Transaction[]
}

const Calendar = ({monthlyTransactions}: CalenderProps) => {

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

  return (
    <FullCalendar 
    locale={jaLocale}
     plugins={[dayGridPlugin]}
     initialView='dayGridMonth'
     events={calenderEvents}
     eventContent={renderEventContent}
    />
  )
}

export default Calendar