import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import {Modal, Form, FormGroup, FormControl, Col, ControlLabel} from 'react-bootstrap';
import Button from 'elements/CustomButton/CustomButton.jsx'
import {thUserArray, tdUserArray} from 'variables/Variables.jsx';

class AccountManager extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false ,action:''};
    this.close = this.close.bind(this);
    // this.open = this.open.bind(this);    
    this.createUser = this.createUser.bind(this);    
    this.editUser = this.editUser.bind(this);
    
  }
  handleCheckbox = event => {
    const target = event.target;
    console.log(event.target);
    this.setState({
        [target.name]: target.checked
    });
  };

  close() {
    this.setState({ showModal: false });
  }

  createUser() {
    this.setState({ showModal: true ,action : 'Create'});
  }
  editUser() {
    this.setState({ showModal: true , action : 'Edit'});
  }
  render() {
    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <Col sm={12}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
          </Col>
        </FormGroup>
      );
    }
    return (
      <div className="content">
        <div className="container-fluid">
        <Modal show={this.state.showModal} onHide={this.close} dialogClassName="custom-modal-width">
            <Modal.Header closeButton>
              <Modal.Title style={{textAlign: 'center'}}>
                <i style={{fontSize: '40px'}} className="pe-7s-add-user"></i>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form horizontal>
                <FieldGroup
                  id="formHorizontalEmail"
                  type="text"
                  label="Account ID"
                  placeholder="Account ID"
                />
                <FieldGroup
                  id="formHorizontalPassword"
                  type="text"
                  label="Name"
                  placeholder="Name"
                />
                <FieldGroup
                  id="formHorizontalPassword"
                  type="text"
                  label="E-mail"
                  placeholder="e-mail"
                />
                <Col sm={12}>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Role</ControlLabel>
                  <FormControl componentClass="select" placeholder="Choose Role">
                    <option value="Instructor">Instructor</option>
                    <option value="Teaching Assistant">Teaching Assistant</option>
                    <option value="Student">Student</option>
                  </FormControl>                  
                </FormGroup>
                </Col>
                <FormGroup>
                  <Col sm={12}>
                    <Button type="submit" style={{width: '100%'}}>
                      {this.state.action}
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </Modal.Body>
          </Modal>
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                  <div className="header">
                    <div className="row">
                      <div className="col-sm-2">
                        <h4 style={{float:'left'}} className="title">User</h4>
                      </div>
                      <div className="col-sm-2 col-xs-offset-9 col-sm-offset-7 col-md-offset-7 col-lg-offset-8">
                        <Button onClick={this.createUser}>Create User</Button>
                      </div>
                    </div>
                  </div>
                  <div className={"content table-responsive table-full-width"}>
                    <Table striped hover responsive>
                      <thead>
                        <tr>
                          {
                            (() => {
                              var thUserArrayWithBtns = [...thUserArray];
                              thUserArrayWithBtns.unshift("");
                              thUserArrayWithBtns.push("");
                              return thUserArrayWithBtns.map((prop, key) => {
                                      return (
                                        <th key={key}>{prop}</th>
                                      );
                                    });
                            })()
                          }
                        </tr>
                      </thead>
                      <tbody>
                        {
                          tdUserArray.map((prop, rowKey) => {
                            var _prop = [...Object.values(prop)]
                            _prop.unshift('remove')
                            _prop.push('edit')
                            return (
                              <tr key={rowKey}>
                                {
                                  _prop.map((prop, colKey) => {
                                    switch(colKey) {
                                      case 0: 
                                        return (
                                          <td key={colKey}>
                                            <Button simple>X</Button>
                                          </td>
                                        );
                                      case _prop.length-1:
                                        return (
                                          <td key={colKey}>
                                            <Button onClick={this.editUser}>edit</Button>
                                          </td>
                                        );
                                      default: return (<td key={colKey}>{prop}</td>);
                                    }
                                  })
                                }
                              </tr>
                            );
                          })
                        }
                      </tbody>
                    </Table>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountManager;
