export const Allocation = ({ setAction }) => {

    return (
        <>
            <div className="input-group-prepend"
                style={{ marginLeft: '2rem' }}>
                <label className="input-group-text"
                    htmlFor="inputGroupSelect02">Allocation</label>
            </div>
            <select className="custom-select"
                id="inputGroupSelect02"
                onChange={(event) => setAction(event.target.value)}>
                <option defaultValue value="Add" name="Add">Add</option>
                <option value="Reduce" name="Reduce">Reduce</option>
            </select>
        </>);
}