import React, { Component } from 'react'

import { TextField, RaisedButton, FlatButton } from 'material-ui'
class EnterGratitude extends Component {
    constructor(props) {
        super(props)

        this.state = {gratitude: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const objectToSend = {gratitude: this.state.gratitude}
        // this.props.onHandleSubmit(objectToSend)
        console.log(objectToSend)
    }

    handleClick() {
        this.props.onHandleClick()
    }

    render() {
        return (
            <div>
                <h2>I am happy and gratefull...</h2>
                <form onSubmit = {this.handleSubmit}>
                <TextField 
                    hintText= "Enter Gratitude Here"
                    name = "gratitude"
                    value = {this.state.gratitude}
                    onChange = {this.handleChange}
                />
                <br/>
                <RaisedButton
                    label = "Submit"
                    type = "submit"
                    primary = {true}
                />
                <FlatButton label = "close"
                    secondary = {true}
                    onClick = {this.handleClick}
                />
                </form>
        )
    }
}