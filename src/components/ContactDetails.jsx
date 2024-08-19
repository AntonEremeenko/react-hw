import React from 'react';
import PropTypes from 'prop-types';

const ContactDetails = ({ contact }) => (
    contact ? (
        <div>
            <h2>{contact.name} {contact.surname}</h2>
            <p>Phone: {contact.phone}</p>
        </div>
    ) : (
        <p>Select a contact to view details</p>
    )
);

ContactDetails.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        surname: PropTypes.string,
        phone: PropTypes.string,
    }),
};

export default ContactDetails;
