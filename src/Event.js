import React, { Component } from "react";

class Event extends Component {

    myFunction(params) {
        alert('Hello GfG')
    }

    render() {
        return (
            <div>
                <button type='button' onClick={this.myFunction}>Click Me</button>
            </div>
        )
    }
}

export default Event;