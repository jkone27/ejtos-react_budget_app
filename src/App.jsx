import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/allocation-form/AllocationForm';
import RemainingBudget from './components/Remaining';
import PickCurrency from './components/PickCurrency';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-4'>Company's Budget Allocation</h1>
                <div className='row mt-4'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                        <PickCurrency />
                    </div>
                </div>
                <h3 className='mt-4'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-4'>Change allocation</h3>
                <div className='row mt-4'>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;