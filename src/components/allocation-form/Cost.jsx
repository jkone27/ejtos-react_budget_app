import '../money-input.css';

export const Cost = ({ cost, setCost, remaining }) => {

    const validateSetCost = (newValue) => {

        if (newValue > remaining) {
            setCost(remaining);
            alert("The value cannot exceed remaining funds  £" + remaining);
            return;
        }

        setCost(newValue);
    };

    return (
        <input
            required='required'
            type='number'
            id='cost'
            value={cost}
            style={{ 
                marginLeft: '2rem', 
                size: 10
            }}
            onChange={(event) => validateSetCost(event.target.value)}>
        </input>);
};