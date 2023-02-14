import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'juice',
    amount: '50',
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'NEW TV',
    amount: '1500',
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: '9000',
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: '5000',
    date: new Date(2021, 5, 12),
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)


  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expenses)
    setExpenses(pervExpenses => {
      return [expense, ...pervExpenses]
    })

  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
