import { React, useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';




const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title); //want default state value
    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }



    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>
                    {title}
                </h2>
            </div>
            <div className="expense-item__price">
                {props.amount}rs
            </div>
            <button onClick={clickHandler}>
                change title
            </button>
        </div>
    )
}
export default ExpenseItem;