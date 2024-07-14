import React from 'react'
import Progress from "./components/Progress.jsx";


class App extends React.Component {
    render() {
        return(
            <>
                <Progress percentage={40} />
                <Progress percentage={70} />
                <Progress percentage={90} />
            </>
        )
    }
}

export default App
