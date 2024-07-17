import React from 'react'
import Slider from "./components/Slider.jsx";


class App extends React.Component {
    render() {
        const images = [
            "/images/first.jpeg",
            "/images/second.jpeg",
            "/images/third.jpeg"
        ];
        return (
            <div>
                <h1>Image Slider</h1>
                <Slider images={images}/>
            </div>
        )
    }
}

export default App
