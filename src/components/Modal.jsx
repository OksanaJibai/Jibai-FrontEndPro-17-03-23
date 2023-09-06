import {Component} from "react";


class Modal extends Component{
    render(){
        return (
            <div className="modal" style={{display: "block"}} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title">Modal title</div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.props.onClose}>
                            </button>
                        </div>
                        <div className="modal-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
                        <div className="modal-footer">
                            <button type="button" className="modal-close-button btn btn-outline-danger" onClick={this.props.onClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
