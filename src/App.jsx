import React from 'react'
import Card from "./components/Card.jsx";


class App extends React.Component {
    render() {
        return (
            <>
            <Card textTitle = 'hi'/>
            <Card text = 'how are you?'/>
                <Card textTitle = 'hi' text = 'how are you?'/>
            </>
        )
    }
}

export default App
