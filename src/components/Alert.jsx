import React from "react";

class Alert extends React.Component {
    render() {
        const {text, type} = this.props
        const alertClass = `alert alert-${type}`;
        return (
            <div className={alertClass} role="alert">{text}</div>
        )
    }
}
export default Alert