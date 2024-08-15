import React, {Component} from 'react';
import Modal from "./Modal.jsx";
import {Button} from "react-bootstrap";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpened: false
        }
    }
    toggleModal = () => {
        this.setState({isModalOpened: !this.state.isModalOpened});
    }
    render() {
        return (
            <>
                <Button onClick={this.toggleModal}>Open modal</Button>
                <Modal isOpen={this.state.isModalOpened}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam maxime non quaerat! Accusantium amet eaque eos eveniet fugiat placeat quaerat quod ratione rem voluptate. Dicta doloremque dolores laudantium non placeat.
                    </p>
                    <Button onClick={this.toggleModal}>Close</Button>
                </Modal>
            </>
        );
    }
}

export default Menu;