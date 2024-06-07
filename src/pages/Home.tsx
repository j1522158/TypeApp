import { Box } from '@mui/material'
import React from 'react'
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
  return (
    <Box sx={{display: 'flex'}}>
      {/* 左 */}
      <Box sx={{flexGrow: 1}}>
        <MonthlySummary monthlyTransactions={monthlyTransactions}/>
        <Calendar monthlyTransactions={monthlyTransactions} setCurrentMonth={setCurrentMonth}/>
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