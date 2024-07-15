import React from "react";

class ListGroup extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {React.Children.map(this.props.children, (child, index) => (
                    <li className="list-group-item" key={index}>
                        {child}
                    </li>
                ))}
            </ul>
        )
    }
}

export default ListGroup