import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


const optionModal = (props) => (
    <Modal 
     isOpen = {!!props.checkTest}
     onRequestClose={props.reload}
     contentLabel="Hello World"
     ariaHideApp={false}
     >
       <h2>Selected Option</h2>    
        {props.checkTest}<br/>
        
        <button onClick={props.reload}>Ok</button>
        
        
       
    </Modal>
);

export default optionModal;



