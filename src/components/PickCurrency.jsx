import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const PickCurrency = () => {

    const { currency, dispatch } = useContext(AppContext);

    const updateCurrency = (newCurrencyVal) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrencyVal,
        });
    }

    return ( 
    <>
        <div className="alert alert-success" style={{ marginLeft: '2rem' }}>
        Currency: 
        <select 
            className="btn btn-success dropdown-toggle" 
            data-toggle="dropdown"
            id="currencyPicker"
            onChange={(event) => updateCurrency(event.target.value)}>
            <option defaultValue value="$" name="Dollar">$ (Dollar)</option>
            <option value="£" name="Pound">£ (Pound)</option>
            <option value="€" name="Euro">€ (Euro)</option>
            <option value="₹" name="Rupee">₹ (Rupee)</option>
        </select>
        </div>
    </>);
}

export default PickCurrency;