import React, { Component } from "react";
import "./FlexBox.css";
class FlexBox extends Component {
    render() {
        return(
            <div>
            <header>Header</header>
            <div class="main">
                <nav>nav</nav>
                <article>article</article>
                <aside>aside</aside>
            </div>
            <footer>footer</footer>
            </div>
        )
    }
};

export default FlexBox;