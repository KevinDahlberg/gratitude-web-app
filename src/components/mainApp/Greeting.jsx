import React, { Component } from 'react'

class Greeting extends Component {

    render () {
        return (
            <div>
                <h1>Hi {this.props.name}</h1>
                <p>{this.props.currentGratitude}</p>
            </div>
        )
    }
}

export default Greetings