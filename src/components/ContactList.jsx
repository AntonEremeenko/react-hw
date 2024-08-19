import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onEdit, onDelete }) => (
    <ul>
        {contacts.map((contact) => (
            <li key={contact.id}>
                <span>{contact.name} {contact.surname} - {contact.phone}</span>
                <button onClick={() => onEdit(contact.id)}>Edit</button>
                <button onClick={() => onDelete(contact.id)}>Delete</button>
            </li>
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            surname: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
        })
    ).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactList;

