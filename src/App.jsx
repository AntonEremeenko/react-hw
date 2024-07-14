import React, { useState } from 'react'
import Definitions from "./components/Definitions.jsx";
import definitions from "./components/Definitions.jsx";


class App extends React.Component {
    render() {
        const definitions = [
            { dt: 'one', dd: 'two', id: 1 },
            { dt: 'another term', dd: 'another description', id: 2 },
        ];
        return <Definitions data = {definitions}/>
    }
}

export default App
