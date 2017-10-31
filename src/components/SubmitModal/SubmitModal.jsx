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
              <Modal.Title style={{lineHeight: '30px'}}>
                {this.props.title}
                <span className="text-muted" style={{fontSize:'18px'}}><br/>Due date: {this.props.dueDate}</span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p><b>Project Objective:</b></p>
              <p style={{textAlign: "justify"}}>This project requires students to work on a software project in order to exercise the software engineering methodologies learned and to gain project experiences. The major focus of the project will be <font color="#0000FF"><b>teamwork</b></font>, <font color="#0000FF"><b>project planning</b></font>, <font color="#0000FF"><b>system analysis and design</b></font>, <font color="#0000FF"><b>the uses of CASE tools</b></font>, and <font color="#0000FF"><b>documentations</b></font> (including project plan, system requirement specification, software design document,&nbsp;and software test document).</p>
              <p>... ...</p>
            </Modal.Body>
            <Modal.Footer>
              {/* <div className="row"> */}
                <div className="upload-btn-wrapper" style={{marginRight: '5px'}}>
                  <Button ><span><input type="file" name="myfile" /></span> Upload a file</Button>
                  
                </div>
                <Button >Close</Button>
              {/* </div> */}
            </Modal.Footer>
          </Modal>
      );
    }
    
}

export default SubmitModal;