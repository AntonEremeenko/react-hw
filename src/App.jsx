import React from 'react'
import Slider from "./components/Slider.jsx";


class App extends React.Component {
    render() {
        const images = [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfuHJo25p2avbeum-9noSDh27OAEajHIgeaH2toE53PCTXuCtxcTr1A1cC88qxnnhUDA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlfK-DgWGJCgXCA5jyKVzttMfsN029GQZDLJ-0vEqRymjmNAIOIVpVxKT-iVkgVpmQtWk&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Sg-kQ0q92DUetEdv80kkiR4Zd31KtFRu3uTTkd3x3PhjQa7AxwypfFAQjPvNQhFGbv8&usqp=CAU"
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
