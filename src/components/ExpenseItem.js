import React, {useContext} from 'react';
import {TiDelete, TiMinus, TiPlus} from 'react-icons/ti';
import {AppContext} from '../context/AppContext';

const ExpenseItem = (props) => {
    const {currency, dispatch} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = () => {
        const expense = {
            name: props.name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = () => {
        const expense = {
            name: props.name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#4bae4f"
                     className="bi bi-plus-circle-fill" viewBox="0 0 16 16" onClick={increaseAllocation}>
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                </svg>
            </td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#e83e32"
                     className="bi bi-dash-circle-fill" viewBox="0 0 16 16" onClick={decreaseAllocation}>
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
                </svg>

            </td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#e68632" className="bi bi-x-circle"
                     viewBox="0 0 16 16" onClick={handleDeleteExpense}>
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </td>

        </tr>
    );
};

export default ExpenseItem;
