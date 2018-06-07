import React, { Component } from "react";
import Cricket from "./cricket/Cricket.js";
import X01 from "./x01/X01.js";
import Menu from './Menu';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Master extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid z-index-2">
                    <Route exact path='/' component={Menu} />
                    <Route path='/home' component={Menu} />
                    <Route path='/x01' component={X01} />
                    <Route path='/cricket' component={Cricket} />
                </div>
            </BrowserRouter>
        )
    }
}