import React, { Component } from "react";
import "./FlexBox1.css";
class FlexBox1 extends Component {
    render() {
        return(
            <div class="container">
                <div class ="red"> 1 
                    <div class = "green"> 1a </div>
                    <div class = "blue"> 1b </div>
                </div>
                <div class="green">2 </div>
                <div class="blue"> 3 </div>
            </div>
        )
    }
};

export default FlexBox1;