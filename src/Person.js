import React, { Component } from "react";

class Person extends Component {
    render() {

        // return(
        // <div className='AppHeader'>
        //     <i><h1>Hello GfG</h1></i>
        //     </div>
        // )
        return React.createElement(
            "div",
            {class: "App-header"},
            React.createElement(
                "i",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Hello GfG"

                )
            )
        );
        
    }
}

export default Person;