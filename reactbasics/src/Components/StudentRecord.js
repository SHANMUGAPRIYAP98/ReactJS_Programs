import React, { Component } from 'react'

export default class StudentRecord extends Component {
    render() {
        return (
            <div>
                {this.props.data}
            </div>
        )
    }
}
