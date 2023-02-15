import React from 'react';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const clickHandler = () => {
        setIsEditing(true)
    }
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }


    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={clickHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    )
};

export default NewExpense;