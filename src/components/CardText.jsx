import React from 'react';

class CardText extends React.Component {
    render() {
        return (
            <p className="card-text">
                {this.props.children}
            </p>
        );
    }
}

export default CardText;
