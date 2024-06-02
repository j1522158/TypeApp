import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Transaction } from './types/index';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Report from './pages/Report';
import {theme} from './theme/theme';
import { collection, getDocs } from "firebase/firestore";
import {db} from "./firebase" 
import { async } from '@firebase/util';

function App() {

  function isFireStoreError(err: unknown):err is {code: string, message: string} {
    return typeof err === "object" && err !== null && "code" in err
  }

  const[transactions,setTransactions] = useState<Transaction[]>([]);

  {/* 初回レンダリング時のみ取得 > useEffect? */}
  useEffect((() => {
    const fetchTransactions = async() => {
      try {
        const querySnapshot = await getDocs(collection(db, "Transactions"));
        const transactionsData =querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id, 
          } as Transaction //　型アサーション
        });
        setTransactions(transactionsData)
      } catch(err) {
        if(isFireStoreError(err)) {
          console.error("fireStoreエラー: ", err)
        } else {
          console.error("一般エラー: ", err)
        }

      }
    }
    fetchTransactions();
  }))
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* デフォルトCSSをリセットしてMUAのテーマを反映する */}
      <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />}/>
          <Route path="/report" element={<Report />}/>
          <Route path="*" element={<NoMatch />}/>
        </Route>
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
