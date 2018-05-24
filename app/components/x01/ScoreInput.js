import React, { Component } from "react";
import DesktopInput from './views/DesktopInput';
import MobileInput from './views/MobileInput';
import TabletInput from './views/TabletInput';

export default class ScoreInput extends Component {
    constructor() {
        super();
    }

    render() {
        var intViewportWidth = window.innerWidth;
        //Renders either an input or a text area depending on the screen width
        if (intViewportWidth < 720) {
            return (
                <MobileInput
                    activeThrower={this.props.activeThrower}
                    score={this.props.score}
                    miss={this.props.miss}
                    undo={this.props.undo}
                />
            )
        } else if (intViewportWidth < 900) {
            return (

                <TabletInput
                    activeThrower={this.props.activeThrower}
                    score={this.props.score}
                    miss={this.props.miss}
                    undo={this.props.undo}
                    activeThrows={this.props.activeThrows}
                />
            )
        } else {
            return (
                <DesktopInput
                    activeThrower={this.props.activeThrower}
                    score={this.props.score}
                    miss={this.props.miss}
                    undo={this.props.undo}
                    activeThrows={this.props.activeThrows}
                />
            )
        }
    }
}
