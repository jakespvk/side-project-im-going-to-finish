"use client"

import React, { Component } from 'react'
import axios from 'axios'

export default class page extends Component {
    state = { details: [], }

    componentDidMount() {

        let data;
        axios.get('http://localhost:8000')
            .then(res => {
                data = res.data;
                this.setState({
                    details: data
                });
            })
            .catch(err => { })
    }
    render() {
        return (
            <div>
                <header>Data Generated</header>
                <hr></hr>
                {this.state.details.map((output, id) => (
                    <div key={id}>
                        <h2>{output.product}</h2>
                    </div>
                ))}
            </div>
        )
    }
}
