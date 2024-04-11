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
                <div className="flex 
                    flex-horizontal 
                    align-items-center 
                    justify-center
                    space-x-2.5
                    my-8">
                {this.state.details.map((output, id) => (
                    <div key="container" 
                        className="flex 
                        align-items-center 
                        border-2 
                        border-indigo-200 
                        w-48">
                        <div key={id} className="mx-auto my-2 text-center">
                            <h2 className="text-xl">{output.name}</h2>
                            <p className="p-2">{output.description}</p>
                            <div className="flex w-full

                                    ">
                                <span className="flex grow">${output.price}</span>
                                <button 
                                    className="
                                    border-2
                                    p-2
                                    "
                                    onClick="">Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}
