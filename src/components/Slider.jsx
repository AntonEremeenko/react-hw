import React from "react";
import PropTypes from "prop-types";

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0
        };
    }

    handlePrevClick = () => {
        this.setState((prevState) => ({
            currentSlide: (prevState.currentSlide - 1 + this.props.images.length) % this.props.images.length
        }));
    };

    handleNextClick = () => {
        this.setState((prevState) => ({
            currentSlide: (prevState.currentSlide + 1) % this.props.images.length
        }));
    };

    render() {
        const { images } = this.props;
        const { currentSlide } = this.state;
        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
                            <img alt="" className="d-block w-100" src={image} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" onClick={this.handlePrevClick} type="button">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" onClick={this.handleNextClick} type="button">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}

Slider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Slider;
