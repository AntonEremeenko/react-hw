import React from 'react';
import Modal from '@mui/material/Modal';
import PropTypes from "prop-types";

const ModalTemplate = ({button, children, open, handleClose}) => {

    return (
        <div>
            {button}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {children}
            </Modal>
        </div>
    );
}

ModalTemplate.propTypes = {
    button: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default ModalTemplate;