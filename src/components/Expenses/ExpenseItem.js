import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';




const ExpenseItem = (props) => {

    let title = props.title;

    const clickHandler = () => {
        title = 'Updated';
        console.log(title)
    }



    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">{props.amount}rs</div>

            <button onClick={clickHandler}>change title</button>
        </div>
    )
}
export default ExpenseItem;