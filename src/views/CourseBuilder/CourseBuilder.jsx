
import React, { Component } from 'react';
import {Table, Col,FormGroup,ControlLabel,FormControl,Form,ToggleButtonGroup,ToggleButton} from 'react-bootstrap';
import {thWeekArray} from 'variables/Variables.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx'

const ParentComponent = props => (
  <div className="inlineForm">
    <div id="children-pane" style={{width:'1000px', height:'300px', overflow:'scroll', marginLeft:'5.25%', marginBottom:'3%', overflowX:'auto'}}>
      {props.children}
    </div>
    <Button onClick={props.addChild} style={props.style}>Add Student</Button>    
  </div>
);



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
            <Form inline key={i} style={{marginLeft:'5.25%', marginBottom:'3%'}}>
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
          <div className="card card-user">
            <br/>
            <div className="row">
              <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    <h5>Course Name</h5>
                  </Col>
                  <Col sm={5}>
                    <FormControl type="text" placeholder="Course Name" />
                  </Col>
                </FormGroup>
              </Form>
            </div>
            <div className="row card" style={{width: '80%',marginLeft: '50px'}}>
                <Table striped hover style={{tableLayout: 'fixed',width:'100% '}}>
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
                            if(rowProp === 0)return (<td key={colKey}><hr key={colKey} style={{borderWidth: '1px'}}/></td>)
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
            </div>
            <div className="row">
                <ParentComponent style={{marginLeft:'5.25%', marginBottom:'3%'}} addChild={this.onAddChild}>
                 {children}
                </ParentComponent>
            </div>
            <div className="row">
            <Button style={{marginLeft:'75%', marginBottom:'3%'}}>Save</Button>
            </div>
          </div>
        </div>
      </div>
      
    ); 

  }
}
export default CourseBuilder