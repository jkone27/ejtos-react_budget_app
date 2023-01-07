import './cost.css';

export const Cost = ({ cost, currency, setCost }) => {

    return (
        <>
            <span className="money-input" data-currency={currency} />
            {/* <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="cost">{currency}</label>
            </div> */}
            <input
                className='money-input'
                data-currency={currency}
                required='required'
                type='number'
                id='cost'
                value={cost}
                style={{ 
                    marginLeft: '2rem', 
                    size: 10
                }}
                onChange={(event) => setCost(event.target.value)}>
            </input>
        </>);

    // (<>
    //     <div class="input-group mb-3">
    //         <div class="input-group-prepend">
    //             <span class="input-group-text">$</span>
    //         </div>
    //         <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
    //             <div class="input-group-append">
    //                 <span class="input-group-text">.00</span>
    //             </div>
    //         </input>
    //     </div>
    // </>)
};