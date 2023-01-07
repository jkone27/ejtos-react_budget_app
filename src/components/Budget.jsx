import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './money-input.css';


const Budget = ({limit}) => {

    const upperLimit = limit ?? 20000;

    const { budget, dispatch, currency, spending } = useContext(AppContext);

    const validateSetBudget = (newValue) => {

        if (newValue > upperLimit) {
            alert(`The value cannot exceed the upper limit ${currency} ${upperLimit}`);
            return;
        }

        if (newValue < spending) {
            alert(`You cannot reduce the budget value lower than the spending`);
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(newValue),
        });
    };

    return (
        <div className='alert alert-secondary' >
            <span>Budget: </span> 
            <span className='money-input' data-currency={currency} >
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{ 
                    marginLeft: '2rem', 
                    size: 10
                }}
                onChange={(event) => validateSetBudget(event.target.value)}>
            </input>
            </span>
        </div>);
};

export default Budget;