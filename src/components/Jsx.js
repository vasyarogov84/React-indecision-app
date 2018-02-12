import React, { Component } from 'react';

import { InputField } from './InputField';
import { Header } from './Header';
import { Options } from './Options';
import { WhatToDO, RemoveAll } from './decision';
//import {SingleOption} from './singleOption';
import optionModal from './OptionModal';
import OptionModal from './OptionModal';
export default class Jsx extends React.Component {
    state = {
        title: "Indecision",
        subtitle: "Put your life in the hands of computer",
        option: [],
        singleOp : ""
    };

    componentDidMount() {

        try {
            const json = localStorage.getItem('option');
            const option = JSON.parse(json);

            if (option) {
                this.setState(() => ({
                    option: option
                }));
            }
        } catch (error) {
            console.log(error);
        }


    }




    componentDidUpdate(prevProps, prevState) {
        if (prevState.option.length !== this.state.option.length) {
            const json = JSON.stringify(this.state.option)
            localStorage.setItem('option', json);
        }
    }


    removeOption = (option) => {
        //let itemToRemovePosition = this.state.option.indexOf(option);
        var array = this.state.option;
        //array.splice(itemToRemovePosition, 1);
        this.setState((prevState) => ({
            option: prevState.option.filter((el) => option !== el)
        }));
    }

    removeAll = () => {
        this.setState(() => ({ option: [] }));
    }

    pick = () => {
        let arrayLength = this.state.option.length;
        var randomChoice = this.state.option[Math.floor(Math.random() * arrayLength)];
       
        this.setState({ singleOp: randomChoice });
        
    }

    rel =() => {
        this.setState({ singleOp: "" });
    }

    addValue = (option) => {


        if (!option) {
            return "Enter Valid Value to add item";
        } else if (this.state.option.indexOf(option) !== -1) {
            return "This option already exists";
        }

        this.setState({ option: [...this.state.option, option] });

    }

    render() {
        return (
            <div>
                <Header title={this.state.title} sub={this.state.subtitle} />
                <WhatToDO pickOne={this.pick} functionality={this.state.option.length > 0} />
                <RemoveAll remove={this.removeAll} functionality={this.state.option.length > 0}/>
                <InputField getValue={this.addValue} />
                <Options
                    choice={this.state.option}
                    removeOption={this.removeOption}
                />
                <OptionModal checkTest={this.state.singleOp} reload={this.rel}/>
            </div>
        );
    }
}