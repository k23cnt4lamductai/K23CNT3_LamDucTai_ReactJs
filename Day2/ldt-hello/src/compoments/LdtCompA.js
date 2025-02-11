import React, { Component } from 'react'

export default class LdtCompA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Lâm Đức Tài",
        };
    }

    render() {
        return (
            <div>
                <h2>LdtCompA</h2>
                <p> Dữ liệu trong state: {this.state.name}</p>
                <h3> Hiển thị dữ liệu từ props</h3>
                <p>Name: {this.props.LdtName}</p>
                <p>Address: {this.props.LdtAddress}</p>
            </div>
        )
    }
}
