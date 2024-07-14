import React from "react";

class Card extends React.Component {
    render() {
        const {textTitle, text} = this.props
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{textTitle}</h4>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        )
    }
}

export default Card