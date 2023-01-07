export const Cost = ({cost, currency, setCost}) => {

    return (
    <>
        <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
            <label className="input-group-text" htmlFor="cost">{currency}</label>
        </div>
        <input
            required='required'
            type='number'
            id='cost'
            value={cost}
            style={{ marginLeft: '2rem', size: 10 }}
            onChange={(event) => setCost(event.target.value)}>
        </input>
    </>);
};