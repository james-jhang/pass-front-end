
import React, { Component } from 'react';
import {Table, Col, FormGroup, ControlLabel, FormControl, Form, Row} from 'react-bootstrap';
import {thWeekArray} from 'variables/Variables.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx'
import {Card} from 'components/Card/Card.jsx';

class CourseBuilder extends Component {
  state = {
    numChildren: 0
  }
  onAddChild = () => {
      this.setState({
      numChildren: this.state.numChildren + 1
      });
      var ScrollToBottom = document.getElementById("children-pane");
      ScrollToBottom.scrollTop = ScrollToBottom.scrollHeight;
  }
  render(){
    const children = [];
    for (var i = 0; i < this.state.numChildren; i += 1) {
        children.push(
            <Form inline key={i}>
                <FormGroup controlId="formInlineName">
                    <ControlLabel>Student ID </ControlLabel>
                    {''}
                    <FormControl type="text" style={{marginLeft:'1%'}} />
                </FormGroup>
                {''}
            </Form>
        );
    };
    function Choose(e) {
        e.preventDefault();
        console.log(e.target.style.background)
        if(e.target.style.background==='rgb(235, 237, 227)'){
          e.target.style.background='transparent'
          return
        }
        e.target.style.background='#ebede3'
    }
    return(
      <div className="content">
        <div className="container-fluid">
          <Card
            content={
              <div>
                <Row style={{display: 'flex'}}>
                  <Col sm={8}>
                    <Form>
                      <FormGroup controlId="courseName">
                        <ControlLabel>Course Name</ControlLabel>
                        <FormControl type="text" label="Text" placeholder="Course Name" />
                      </FormGroup>
                      <FormGroup controlId="courseTimePicker">
                        <ControlLabel>Course time</ControlLabel>
                        <Table responsive bordered striped hover>
                          <thead>
                            <tr>
                              {
                                thWeekArray.map((prop, key) => {
                                  return (
                                    <th style={{textAlign: 'center'}} key={key}>{prop}</th>
                                  )
                                })
                              }
                            </tr>
                          </thead>
                          <tbody>
                            {
                              [1,2,3,4,0,5,6,7,8,9].map((rowProp,rowKey)=>{
                                return(
                                  <tr key={rowKey}>{           
                                    [1,2,3,4,5].map((prop, colKey) => {
                                      if(rowProp === 0) return (<td key={colKey}><hr key={colKey} style={{borderWidth: '1px'}}/></td>)
                                      return (
                                        <td key={colKey} style={{marginLeft:'0px'}}>
                                          <Button simple key={colKey} style={{marginLeft:'0px',width:'100%'}} onClick={Choose}>{rowProp}</Button>
                                        </td>
                                      );
                                    })
                                  }
                                  </tr>                          
                                )
                              })
                            }
                          </tbody>
                        </Table>
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col sm={4}>
                    <Form>
                      <FormGroup controlId="courseStudent">
                        <ControlLabel>Course student</ControlLabel>
                          <div id="children-pane" style={{width:'100%', maxHeight:'65%',  overflow:'scroll', overflowX: 'hidden'}}>
                            {children}
                          </div>
                      </FormGroup>
                    </Form>
                    <div style={{position: 'absolute', bottom: '1em', right: '1em', left: '1em'}}>
                      <Button bsSize="large" onClick={this.onAddChild} block>Add Student</Button>
                      <Button bsSize="large" block>Save</Button>
                    </div>
                  </Col>
                </Row>
              </div>
            }
          />
        </div>
      </div>
      
    ); 

  }
}
export default CourseBuilder