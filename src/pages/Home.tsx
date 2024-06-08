import { Box } from '@mui/material'
import { format } from 'date-fns'
import React, { useState } from 'react'
import Calendar from '../components/Calendar'
import MonthlySummary from '../components/MonthlySummary'
import TransactionForm from '../components/TransactionForm'
import TransactionMenu from '../components/TransactionMenu'
import { Transaction } from '../types'

interface HomeProps {
  monthlyTransactions: Transaction[], 
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>
}

const Home = ({monthlyTransactions,setCurrentMonth}: HomeProps) => {
  const today = format (new Date(), "yyyy-MM-dd");
  console.log(today);
  const[currentDay,setCurrentDay] = useState(today);

  const dailyTransactions = monthlyTransactions.filter((transaction) => {
    return transaction.date === currentDay;
  });
  console.log(dailyTransactions);

  return (
    <Box sx={{display: 'flex'}}>
      {/* 左 */}
      <Box sx={{flexGrow: 1}}>
        <MonthlySummary monthlyTransactions={monthlyTransactions}/>
        <Calendar 
          monthlyTransactions={monthlyTransactions} 
          setCurrentMonth={setCurrentMonth}
          setCurrentDay={setCurrentDay}
        />
      </Box>
      {/* 右 */}
      <Box>
        <TransactionMenu />
        {/* <TransactionForm /> */}
      </Box>
    </Box>
  )
}

export default Home