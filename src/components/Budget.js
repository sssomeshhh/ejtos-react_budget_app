import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {budget, currency, dispatch, remaining} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if (event.target.value < budget - remaining) {
            alert("You cannot reduce the budget value lower than the spending");
            setNewBudget(budget);
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    };
    return (
        <div className='alert alert-secondary'>
            <div className="input-group">
                <span>Budget: {currency}</span>
                <input className='input-group-text' type="number" step="10" style={{marginLeft: '4px'}}
                       value={newBudget} onChange={handleBudgetChange}></input>
            </div>
        </div>
    );
};
export default Budget;
