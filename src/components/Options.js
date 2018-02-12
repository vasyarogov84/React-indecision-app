import React from 'react';
import { SingleOption } from './singleOption';

export const Options = (props) =>  (
        <ol>
            {props.choice.map((el, index) => {
                return <li key={index}><SingleOption singleElement={el} removeOption={props.removeOption} /></li>
            })}
        </ol>
    );
