import React, { useState } from 'react'
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
import ExpenseList from './ExpenseList';

const Expenses = (props) => {
    const [filteredYear, setfilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setfilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpenseList items={filteredExpenses} />
        </div>


    )
}

export default Expenses;


