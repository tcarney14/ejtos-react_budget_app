import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Components.css';
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
        <div className='currency'>
                Currency:
                <select className='dropdown'
                onChange={(event) => updateCurrency(event.target.value)}>
                    <option value={"£"}>£ Pound</option>
                    <option value={"$"}>$ Dollar</option>
                    <option value={"€"}>€ Euro</option>
                    <option value={"₹"}>₹ Ruppee</option>
                    
                </select>
        </div>
    );
};
export default Currency;