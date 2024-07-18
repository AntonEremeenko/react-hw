import React from "react";

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.opened || false
        };
    }

    toggleCollapse = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }));
    };

    render() {
        const { text } = this.props;
        const { isOpen } = this.state;

        return (
            <div>
                <p>
                    <a
                        className="btn btn-primary"
                        data-bs-toggle="collapse"
                        href="#"
                        role="button"
                        aria-expanded={isOpen}
                        onClick={this.toggleCollapse}
                    >
                        {isOpen ? 'Hide' : 'Show'}
                    </a>
                </p>
                <div className={`collapse ${isOpen ? 'show' : ''}`}>
                    <div className="card card-body">
                        {text}
                    </div>
                </div>
            </div>
        );
    }
}

export default Collapse