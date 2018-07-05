import React, { Component } from "react";
import { Link } from 'react-router-dom'
import X01 from './../x01/X01'
import Cricket from './../Cricket/Cricket';
import NavMenu from '../navMenu/NavMenu';

export default class ChooseGame extends Component {
    constructor({ match }) {
        super();

        this.url = match.url;
    }


    render() {
        return (
            <div>
                <NavMenu setUsername={this.props.setUsername}
                    username={this.props.username}
                    setUsername={this.props.setUsername}
                />
                <div className="row top-row">
                    <div className="col main-menu-title text-center">
                        Choose Game
                    </div>
                </div>
                <div className='row'>
                    <div className="col-12 text-center main-menu-button">
                        <Link to={{
                            pathname: `${this.url}/cricket`,
                            render: () => {
                                <Cricket />
                            }
                        }}><button className='bttn-float bttn-lg'>Cricket</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center main-menu-button">
                        <Link to={{
                            pathname: `${this.url}/x01`,
                            render: () => {
                                <X01 />
                            }
                        }}><button className='bttn-float bttn-lg'>x01</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center main-menu-button">
                        <Link to={{
                            pathname: '/',
                        }}>
                            <button className='bttn-float bttn-lg'>Back</button>
                        </Link>
                    </div>
                </div >
            </div>
        )
    }
}
