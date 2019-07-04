import React, { Component } from 'react'


class Counter extends Component {
    render() {

        return (

            <div className="Counter">
                <span>Attending: {this.props.attending} </span>
            </div>

        );
    }
}


export default Counter