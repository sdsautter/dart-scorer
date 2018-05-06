import React, { Component } from "react";
import Cricket from "./cricket/Cricket.js";
import X01 from "./x01/X01.js";
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

export default class Menu extends Component {
    constructor() {
        super();
    }


    /**
     * This is what I removed.
     *  <div>
                {this.conditionalRender()}
            </div> 
     */
    render() {
        return (
            <div className="container-fluid">
                <div className="row top-row">
                    <div className="col title text-center">
                        Choose Your Game
                        </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-4 offset-1 number">
                        <button type="button" className="btn" onClick={() => { location.assign('/cricket'); }}>
                            Cricket
                            </button>
                    </div>
                    <div className="col-4 offset-2 number">
                        <button type="button" className="btn" onClick={() => { location.assign('/x01'); }}>
                            x01
                            </button>
                    </div>
                </div>
            </div>
        )
    }
}
