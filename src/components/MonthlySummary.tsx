import { Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { fontSize } from '@mui/system';
import { theme } from '../theme/theme';
import { Transaction } from '../types';
import { financeCalculations } from '../utils/financeCalculations';

interface MonthlySummaryProps {
  monthlyTransactions: Transaction[], 
}

const MonthlySummary = ({monthlyTransactions}: MonthlySummaryProps) => {
  const {income, expense, balance} = financeCalculations(monthlyTransactions)
  return (
    <Grid container spacing={{xs: 1, sm: 2}} mb={2}> {/* container: 要素が横並びになる */}
      {/* 収入 */}
      <Grid item xs={4} display={"flex"} flexDirection={"column"}>
        <Card 
          sx={{
            bgcolor: (theme) => theme.palette.incomeColor.main, 
            color: 'white', 
            borderRadius: '10px',
            flexGrow: 1
          }}>
          <CardContent sx={{padding: {xs: 1, sm: 2}}}>
            <Stack direction={"row"}>
              <CurrencyYenIcon sx={{fontSize: '2rem'}}/>
              <Typography>収入</Typography>
            </Stack>
            <Typography 
            textAlign={"right"} 
            variant={"h5"} 
            fontWeight={"fontWeigthBold"}
            sx={{
              wordBreak: "break-word", 
              fontSize: { xs: ".8rem", sm: "1rem", md: "1.2rem" },
          }}
            >
              ¥{income}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* 支出 */}
      <Grid item xs={4} display={"flex"} flexDirection={"column"}>
        <Card 
          sx={{
            bgcolor: (theme) => theme.palette.expenceColor.main, 
            color: 'white', 
            borderRadius: '10px', 
            flexGrow: 1
          }}>
          <CardContent sx={{padding: {xs: 1, sm: 2}}}>
            <Stack direction={"row"}>
              <ShoppingCartCheckoutIcon sx={{fontSize: '2rem'}}/>
              <Typography>支出</Typography>
            </Stack>
            <Typography 
            textAlign={"right"} 
            variant={"h5"} 
            fontWeight={"fontWeigthBold"}
            sx={{
              wordBreak: "break-word", 
              fontSize: { xs: ".8rem", sm: "1rem", md: "1.2rem" },
          }}
            >
              ¥{expense}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* 残高 */}
      <Grid item xs={4} display={"flex"} flexDirection={"column"}>
        <Card 
          sx={{
            bgcolor: (theme) => theme.palette.balanceColor.main, 
            color: 'white', 
            borderRadius: '10px',
            flexGrow: 1
            }}>
          <CardContent sx={{padding: {xs: 1, sm: 2}}}>
            <Stack direction={"row"}>
              <AccountBalanceIcon sx={{fontSize: '2rem'}}/>
              <Typography>残高</Typography>
            </Stack>
            <Typography 
            textAlign={"right"} 
            variant={"h5"} 
            fontWeight={"fontWeigthBold"}
            sx={{
              wordBreak: "break-word", 
              fontSize: { xs: ".8rem", sm: "1rem", md: "1.2rem" },
          }}
            >
              ¥{balance}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default MonthlySummary