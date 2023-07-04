import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const updateCurrency = (value) => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: value
        }
        )
    }
    return (
        <div className='alert alert-secondary' id='currency'>
            <span>
                Currency:
                <select
                onChange={(event) => updateCurrency(event.target.value)}>
                    <option value={"dollar"}>$ Dollar</option>
                    <option value={"pound"}>£ Pound</option>
                    <option value={"euro"}>€ Euro</option>
                    <option value={"ruppee"}>₹ Ruppee</option>
                    
                </select>
            </span>
        </div>
    );
};
export default Currency;