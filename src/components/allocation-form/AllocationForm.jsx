import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { Cost } from './Cost';
import { Save } from './Save';
import { Allocation } from './Allocation';
import { Department } from './Department';

const AllocationForm = (props) => {
    const { currency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <Department {...{ setName }} />
                    <Allocation {...{ setAction }} />
                    <Cost {...{ currency, cost, setCost }} />
                    <Save {...{ cost, setCost, name, action }} />
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;