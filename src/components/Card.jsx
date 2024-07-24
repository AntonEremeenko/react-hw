import React from "react";
import CardBody from "./CardBody.jsx";
import CardTitle from "./CardTitle.jsx";
import CardText from "./CardText.jsx";

class Card extends React.Component {
    static Body = CardBody
    static Title = CardTitle
    static Text = CardText
    render() {
        return (
            <div className="сard">
                {this.props.children}
            </div>
        )
    }
}
export default Card