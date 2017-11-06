import React, { Component } from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table'
import IconButton from 'material-ui/IconButton'
import { Clear, Create } from 'material-Ui/svg-icons/'

export default class ViewGratitudeTable extends Component {
    constructor(props) {
        super(props)

        this.editClick = this.editClick.bind(this)
        this.deleteClick = this.deleteClick.bind(this)
    }

    //scaffolding code for the click events
    editClick() {
        this.props.onEditClick(objectClicked)
    }

    deleteClick() {
        this.props.onDeleteClick(objectClicked)
    }

    render() {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Gratitude</TableHeaderColumn>
                        <TableHeaderColumn>Edit</TableHeaderColumn>
                        <TableHeaderColumn>Delete</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.props.gratitudeArray.map((grat, idk) => {
                        return (
                            <TableRow key={idx}>
                                <TableRowColumn>{grat}</TableRowColumn>
                                <TableRowColumn>
                                    <IconButton tooltip="Edit">
                                        <Create />
                                    </IconButton>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <IconButton tooltip="Delete">
                                        <Clear />
                                    </IconButton>
                                </TableRowColumn>
                            </TableRow>
                        })    
                    )}
                </TableBody>
            </Table>
        )
    }

}