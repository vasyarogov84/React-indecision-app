import React from 'react';

export class WhatToDO extends React.Component {
    render() {
        return (
            <button onClick={this.props.pickOne} disabled={!this.props.functionality}>What to Do</button>
        );
    }
}


export class RemoveAll extends React.Component {
    render() {
        return (
            <button onClick={this.props.remove} disabled={!this.props.functionality}>Remove All</button>
        );
    }
}