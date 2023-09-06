import React from 'react';
import Modal from "./Modal"
import {createPortal} from "react-dom";
export default class Portal extends React.Component {
    state = { modal: false };

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    render() {
        return (
            <div>
                <button type="button" className="modal-open-button btn btn-outline-success" onClick={() =>this.toggle()}>Open</button>
                <button style={{display: "none"}}>
                    {this.state.modal && createPortal(
                        <Modal onClose={() =>this.toggle()}/>,
                        document.body
                    )}
                </button>
            </div>
        );
    }
}