import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ contact, onSave }) => {
    const [name, setName] = useState(contact ? contact.name : '');
    const [surname, setSurname] = useState(contact ? contact.surname : '');
    const [phone, setPhone] = useState(contact ? contact.phone : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ name, surname, phone });
    };

    useEffect(() => {
        if (contact) {
            setName(contact.name);
            setSurname(contact.surname);
            setPhone(contact.phone);
        }
    }, [contact]);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
            />
            <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <button type="submit">Save</button>
        </form>
    );
};

ContactForm.propTypes = {
    contact: PropTypes.object,
    onSave: PropTypes.func.isRequired,
};

export default ContactForm;
