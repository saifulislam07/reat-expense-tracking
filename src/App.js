import React from "react";
import './App.css';
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransectionList } from "./components/TransactionList";
import { AddTransection } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransectionList />
        <AddTransection />
      </div>
    </GlobalProvider>
  );
}

export default App;
