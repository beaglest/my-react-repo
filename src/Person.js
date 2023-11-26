import React, { Component } from "react";

class Person extends Component {
    constructor (props) {
        super(props);
        this.props = props;
    }
    render() {

        return(
        <div>
            <i><h1>Hello {this.props.name}, This is FS Class.</h1></i>
            </div>
        )
        // return React.createElement(
        //     "div",
        //     {class: ""},
        //     React.createElement(
        //         "i",
        //         null,
        //         React.createElement(
        //             "h1",
        //             null,
        //             "Hello GfG"

        //         )
        //     )
        // );
        
    }
}

export default Person;