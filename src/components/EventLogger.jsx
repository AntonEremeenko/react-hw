import React from 'react';

class EventLogger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            log: [],
        };
    }

    addEvent = (value) => {
        this.setState((prevState) => ({
            log: [value, ...prevState.log],
        }));
    };

    handleAdd = () => {
        const newValue =
            this.state.log.length === 0 ? 1 : this.state.log[0] + 1;
        this.addEvent(newValue);
    };

    handleSubtract = () => {
        const newValue =
            this.state.log.length === 0 ? 1 : this.state.log[0] - 1;
        this.addEvent(newValue);
    };

    handleRemove = (index) => {
        this.setState((prevState) => ({
            log: prevState.log.filter((_, i) => i !== index),
        }));
    };

    render() {
        return (
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={this.handleAdd}
                    >
                        +
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={this.handleSubtract}
                    >
                        -
                    </button>
                </div>
                <div className="list-group mt-3">
                    {this.state.log.map((value, index) => (
                        <button
                            key={index}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => this.handleRemove(index)}
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default EventLogger;