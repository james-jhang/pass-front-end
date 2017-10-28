import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap';
// import {Popover, Tooltip, OverlayTrigger} from 'react-bootstrap';

export class SubmitModal extends Component{
    render() {
      // const popover = (
      //   <Popover id="modal-popover" title="popover">
      //     very popover. such engagement
      //   </Popover>
      // );
      // const tooltip = (
      //   <Tooltip id="modal-tooltip">
      //     wow.
      //   </Tooltip>
      // );
  
      return (
          <Modal show={this.props.show} onHide={this.props.onHide}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Text in a modal</h4>
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
  
              <hr />
  
            </Modal.Body>
            <Modal.Footer>
              <Button >Close</Button>
            </Modal.Footer>
          </Modal>
      );
    }
    
}

export default SubmitModal;