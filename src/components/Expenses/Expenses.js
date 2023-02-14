import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setfilteredYear] = useState('2020')
    const filterChangeHandler = () => {
        setfilteredYear()
    }
    return (
        <div className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}
            />
            {props.items.map(expense => <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />)}
        </div>


    )
}

export default Expenses;