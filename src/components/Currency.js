import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Currency = () => {
    const {currency, dispatch} = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const currencyTypes = [
        {id: "$", name: "Dollar"},
        {id: "€", name: "Euro"},
        {id: "£", name: "Pound"},
        {id: "₹", name: "Rupee"},
    ];
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        })
    }
    return (
        <div className='alert alert-success'>
            <select className="dropdown-item dropdown-bg-color" id="inputCurrencySelect"
                    onChange={handleCurrencyChange}>
                {currencyTypes.filter(currency => (
                    currency.id === newCurrency
                )).map((type) => (
                    <option value=''>Currency ({type.id} {type.name})</option>
                ))}
                {currencyTypes.map((type) => (
                    <option value={type.id}>{type.id} {type.name}</option>
                ))}
            </select>
        </div>
    );
};
export default Currency;
