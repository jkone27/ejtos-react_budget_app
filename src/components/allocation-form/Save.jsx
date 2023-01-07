import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export const Save = ({cost, setCost, name, action}) => {
    
    const { dispatch, remaining } = useContext(AppContext);

    const submitEvent = () => {

        if (cost > remaining) {
            alert("The value cannot exceed remaining funds  £" + remaining);
            setCost("");
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if (action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };
    
    return (
    <button className="btn btn-primary" 
        onClick={submitEvent} 
        style={{ marginLeft: '2rem' }}>
        Save
    </button>);
}