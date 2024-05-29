import { Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { fontSize } from '@mui/system';

const MonthlySummary = () => {
  return (
    <Grid container> {/* container: 要素が横並びになる */}
      <Grid item>
        <Card sx={{bgcolor: 'blue', color: 'white', borderRadius: '10px'}}>
          <CardContent>
            <Stack direction={"row"}>
              <CurrencyYenIcon sx={{fontSize: '2rem'}}/>
              <Typography>収入</Typography>
            </Stack>
            <Typography 
            textAlign={"right"} 
            variant={"h5"} 
            fontWeight={"fontWeigthBold"}
            sx={{wordBreak: "break-word"}}
            >¥300</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default MonthlySummary