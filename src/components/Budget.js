import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);
    const updateBudget = (value) => {
        dispatch({
            type: "SET_BUDGET",
            payload: value
        }
        )
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input 
                type="number"
                value={budget}
                step={10}
                max={20000}
                onChange={(event) => updateBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;
