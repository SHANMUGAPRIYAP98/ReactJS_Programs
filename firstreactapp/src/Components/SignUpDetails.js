import React, { Component } from 'react'

export default class SignUpDetails extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                {
                    this.props.name
                }
                <table>
                    <thead><tr><th>USERNAME</th><th>EMAIL-ID</th><th>MOBILE NUMBER</th><th>PASSWORD</th></tr></thead>
                    <tbody><tr><td>{this.props.name}</td>  <td>{this.props.mail}</td><td>{this.props.mobile}</td><td>{this.props.pwd}</td></tr></tbody>
                </table>
                <div>  

                </div>
            </div>
        )
    }
}
