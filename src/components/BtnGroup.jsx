import React from "react";

class BtnGroup extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        activeButton: null
                };
        }

        handleButtonClick = (button) => {
                this.setState({ activeButton: button });
        };

        render() {
                const { activeButton } = this.state;

                return (
                    <div className="btn-group" role="group">
                            <button
                                type="button"
                                className={`btn btn-secondary left ${activeButton === "left" ? "active" : ""}`}
                                onClick={() => this.handleButtonClick("left")}
                            >
                                    Left
                            </button>
                            <button
                                type="button"
                                className={`btn btn-secondary right ${activeButton === "right" ? "active" : ""}`}
                                onClick={() => this.handleButtonClick("right")}
                            >
                                    Right
                            </button>
                    </div>
                );
        }
}

export default BtnGroup