import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>{this.props.title}</h1>
                {this.props.sub && <h3>{this.props.sub}</h3>}
            </div>
        );
    }
}

Header.defaultProps = {
    title: 'New Indecision'
}