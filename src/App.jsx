import React from 'react'
import Collapse from "./components/Collapse.jsx";

const text = 'collapse me';

class App extends React.Component {
    render() {
        const text = 'collapse me';
        return (
            <div className="App">
                <Collapse text={text} opened={false}/>
            </div>
        )
    }
}

export default App
