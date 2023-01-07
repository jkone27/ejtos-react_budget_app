import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { spending, currency } = useContext(AppContext);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currency}{spending}</span>
        </div>
    );
};

export default ExpenseTotal;