import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx'

import {thArray, course} from 'variables/Variables.jsx';
import SubmitModal from 'components/SubmitModal/SubmitModal.jsx'

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  // getInitialState() {
  //   return { showModal: false };
  // }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  render() {
      return (
        <div className="content">
              <div className="container-fluid">
                  <div className="row">
                  <SubmitModal show={this.state.showModal} onHide={this.close}/>
                      <div className="col-md-12">
                          <Card
                              title="Software Engineering"
                              category=""
                              contentClass="table-responsive table-full-width"
                              content={
                                  <Table style={{textAlign: 'center'}}  striped hover>
                                      <thead>
                                          <tr>
                                              {
                                                  thArray.map((prop, key) => {
                                                      return (
                                                      <th style={{textAlign: 'center'}} key={key}>{prop}</th>
                                                      );
                                                  })
                                              }
                                          </tr>
                                      </thead>
                                      <tbody>
                                          {
                                            course[1].assignments.map((prop,key) => {
                                              var _prop = [...Object.values(prop)]
                                              _prop.unshift(key+1)
                                              return (
                                                <tr key={key}>{
                                                  _prop.map((prop, key) => {
                                                    // if (key === 0) return (<td key={key}>{prop}</td>);
                                                    if (key === 3)
                                                      switch (prop) {
                                                        case 'v' : return (<td key={key}><span style={{color:'#33CC00'}} className="glyphicon glyphicon-ok"/></td>);
                                                        case 'x' : return (<td key={key}><span style={{color:'red'}} className="glyphicon glyphicon-remove"/></td>);
                                                        case 'v-sub' : return (<td key={key}><Button onClick={this.open}><span style={{ marginRight:'5px'}} className="glyphicon glyphicon-ok"/>Submit</Button></td>);
                                                        case 'x-sub' : return (<td key={key}><Button style={{ width:'102px'}}>Submit</Button></td>);
                                                        default: break;
                                                      }

                                                    return (<td key={key}>{prop}</td>);
                                                  })
                                                }</tr>
                                              );
                                            })
                                          }
                                      </tbody>
                                  </Table>
                              }
                          />
                                              
                      </div>

                  </div>
              </div>
          </div>
      );
  }
}

export default TableList;
