import React, { Component } from "react";
import { Link } from 'react-router-dom'
import X01 from './../x01/X01'
import Cricket from './../Cricket/Cricket'

export default class ChooseGame extends Component {
    constructor({ match }) {
        super();

        this.url = match.url;
    }


    render() {
        return (
            <div>
                <div className="row top-row">
                    <div className="col main-menu-title text-center">
                        Choose Game
                    </div>
                </div>
                <br />

                <div className='row'>
                    <div className="col-12 text-center main-menu">
                        <Link to={{
                            pathname: `${this.url}/cricket`,
                            render: () => {
                                <Cricket />
                            }
                        }}><button className='main-menu'>Cricket</button></Link>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12 text-center main-menu">
                        <Link to={{
                            pathname: `${this.url}/x01`,
                            render: () => {
                                <X01 />
                            }
                        }}><button className='main-menu'>x01</button></Link>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12 text-center main-menu">
                        <Link to={{
                            pathname: '/',
                        }}>
                            <button className='rules-menu'>Back</button>
                        </Link>
                    </div>
                </div >
            </div>
        )
    }
}
