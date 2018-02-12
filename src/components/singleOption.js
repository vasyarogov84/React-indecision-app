import React, {Component} from 'react';

export const SingleOption = (props) => (
        <div>
            {props.singleElement}
            {props.singleElement && <button style={{ marginLeft: '10px', borderRadius: '10%' }}
                onClick={(e) => {
                    props.removeOption(props.singleElement);
                }}
            >
                remove
            </button>}
        </div>
    );
