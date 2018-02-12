import React , { Component } from 'react';

export class InputField extends Component {
    state = {
        error: undefined
    };
    
    

    getValue = (e) => {
        e.preventDefault();
        const option = e.target.elements.inputForm.value.trim();
        const error = this.props.getValue(option);

        this.setState(() => ({ error: error }));

        if (option) {
            e.target.elements.inputForm.value = '';
            this.props.getValue(option);
        }
    }



    render() {
        var style = {
            color: "red"
        }
        return (
            <div>
                <br />
                {this.state.error && <p style={style}>{this.state.error}</p>}
                <form onSubmit={this.getValue} >
                    <input name="inputForm" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}