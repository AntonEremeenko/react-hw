import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editContact } from '../redux/actions';

const EditContactPage = () => {
    const { id } = useParams();
    const contact = useSelector(state => state.contacts.contacts.find(c => c.id === parseInt(id)));
    const [name, setName] = useState(contact ? contact.name : '');
    const [phone, setPhone] = useState(contact ? contact.phone : '');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editContact({ id: contact.id, name, phone }));
        navigate('/');
    };

    return (
        <div>
            <h1>Edit Contact</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditContactPage;
