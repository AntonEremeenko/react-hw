import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const AddContactPage = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact({ id: Date.now(), name, phone }));
        navigate('/');
    };

    return (
        <div>
            <h1>Add Contact</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddContactPage;
