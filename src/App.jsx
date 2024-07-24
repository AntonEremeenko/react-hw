import React from 'react'
import Card from "./components/Card.jsx";


class App extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>Title</Card.Title>
                        <Card.Text>Text</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default App
