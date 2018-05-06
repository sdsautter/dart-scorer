import React, { Component } from "react";
import Cricket from "./cricket/Cricket.js";
import X01 from "./x01/X01.js";
import Menu from './Menu'
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Redirect = ReactRouter.Redirect;

export default class Master extends Component {
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
            <Router>
                <div className="container-fluid z-index-2">
                    <Route exact path='/' component={Menu} />
                    <Route path='/home' component={Menu} />
                    <Route path='/x01' component={X01} />
                    <Route path='/cricket' component={Cricket} />
                </div>
            </Router>

        )
    }
}