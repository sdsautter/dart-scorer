import React, {Component} from "react";
import Cricket from "./cricket/Cricket.js";
import X01 from "./x01/X01.js";

export default class Master extends Component {
    constructor() {
        super();
        this.state = {
            game: {}                        
        }

        //Binding functions to change the states       
        this.conditionalRender = this.conditionalRender.bind(this);
        this.setGame = this.setGame.bind(this);
    }

    setGame(game) {
        this.setState({game});
    } 

    conditionalRender() {
        if (this.state.game === "x01") {
            return (
                <X01 
                    setGame={this.setGame}
                />
            )    
        } else if (this.state.game === "cricket") {
            return (
                <Cricket 
                    setGame={this.setGame}
                />
            )
        } else {
            return(
                <div className="container-fluid">
                    <div className="row top-row">
                        <div className="col title text-center">
                            Choose Your Game
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-4 offset-1 number">
                            <button type="button" className="btn" onClick={() => {this.setGame("cricket")}}>
                                Cricket
                            </button>
                        </div>
                        <div className="col-4 offset-2 number">
                            <button type="button" className="btn" onClick={() => {this.setGame("x01")}}>
                                x01
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.conditionalRender()}
            </div>
        )
    }
}
