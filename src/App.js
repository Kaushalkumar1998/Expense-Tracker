import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = (props) => {
  const expenses = [
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

  const addExpenseHandler = expense => {
    console.log('In App.js')
    console.log(expense)

  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
