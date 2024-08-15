import React from 'react'
import EventLogger from "./components/EventLogger.jsx";


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <EventLogger />
            </div>
        );
    }
}

export default App
