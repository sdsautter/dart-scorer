import React, { Component } from "react";

export default class VsOptions extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row top-row">
                    <div className="col title text-center">
                        Opponent
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6 col-sm-12 x01-option number text-center">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.setBotGame(false) }}>Human</button>
                    </div>
                    <div className="col-md-6 col-sm-12 x01-option number text-center">
                        <button type="button" className="btn btn-success" onClick={() => { this.props.setBotGame(true) }}>Computer</button>
                    </div>
                </div>
            </div>
        )
    }
}
