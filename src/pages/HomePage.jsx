import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeContact } from '../redux/actions';

const HomePage = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeContact(id));
    };

    return (
        <div>
            <h1>Contacts</h1>
            <Link to="/add">Add Contact</Link>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name} - {contact.phone}
                        <Link to={`/edit/${contact.id}`}>Edit</Link>
                        <button onClick={() => handleRemove(contact.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
