import './ExpenseItem.css' ;

function ExpenseItem () {
    const expenseDate = new Date(2023, 5, 3);
    const expenseTitle = 'Car Insurance';
    const expenseAmout = 294.67;
    return(
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2> {expenseTitle} </h2>
                <div className='expense-item__price'>{expenseAmout}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;