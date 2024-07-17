import React from 'react';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
    }

    handleNext = () => {
        const { images } = this.props;
        this.setState(prevState => ({
            currentIndex: (prevState.currentIndex + 1) % images.length
        }));
    };

    handlePrev = () => {
        const { images } = this.props;
        this.setState(prevState => ({
            currentIndex: (prevState.currentIndex - 1 + images.length) % images.length
        }));
    };

    render() {
        const { images } = this.props;
        const { currentIndex } = this.state;

        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
                            <img alt="" className="d-block w-50" src={image} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev" onClick={this.handlePrev}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next" onClick={this.handleNext}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}

export default Slider;
