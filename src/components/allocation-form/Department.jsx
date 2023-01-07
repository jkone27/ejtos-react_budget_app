export const Department = ({ setName }) => {

    return (
        <>
            <div className="input-group-prepend">
                <label className="input-group-text"
                    htmlFor="inputGroupSelect01">Department</label>
            </div>
            <select className="custom-select"
                id="inputGroupSelect01"
                onChange={(event) => setName(event.target.value)}>
                <option defaultValue>Choose...</option>
                <option value="Marketing" name="marketing"> Marketing</option>
                <option value="Sales" name="sales">Sales</option>
                <option value="Finance" name="finance">Finance</option>
                <option value="HR" name="hr">HR</option>
                <option value="IT" name="it">IT</option>
                <option value="Admin" name="admin">Admin</option>
            </select>
        </>);
} 