import React, { Component } from 'react'

import { Drawer, MenuItem, RaisedButton } from 'material-ui'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {open: false}

        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    handleClose() {
        this.setState({open: false});
    }

    render() {
        return (
            <div>
                <RaisedButton
                    label="menu"
                    onClick={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        )
    }
}