
import React, { Component } from 'react';
import {Table, Col,FormGroup,ControlLabel,FormControl,Form,ToggleButton,ToggleButtonGroup} from 'react-bootstrap';
import {thWeekArray} from 'variables/Variables.jsx';



class CourseBuilder extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: [1, 3],
    };
  }

  onChange = (value) => {
    this.setState({ value });
  };

  render(){
     function classTable(){
      var weekDay=[1,2,3,4,5];
      var classcount=[1,2,3,4,5,6,7,8,9];

      return weekDay.map((weekValue, rowkey) => {
         return classcount.map((classValue, rowkey) =>{
            return weekValue.toString() + classValue.toString()
        })
      })
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
            <div className="row">
              <Col sm={8}>
                <Table style={{textAlign: 'center'}}  striped hover>
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
                     
                    }
                  </tbody>
                </Table>
                <ToggleButtonGroup
                  type="checkbox"
                  value={this.state.value}
                  onChange={this.onChange}
                > 
                  <ToggleButtonGroup type="checkbox" style={{marginBottom: '-6px'}}>
                    <ToggleButton value={11}>1</ToggleButton>
                    <ToggleButton value={21}>1</ToggleButton>
                    <ToggleButton value={31}>1</ToggleButton>
                    <ToggleButton value={41}>1</ToggleButton>
                    <ToggleButton value={51}>1</ToggleButton>                    
                  </ToggleButtonGroup>
                  <br/>
                  <ToggleButtonGroup type="checkbox" style={{marginBottom: '-6px'}}>
                    <ToggleButton value={12}>2</ToggleButton>
                    <ToggleButton value={22}>2</ToggleButton>
                    <ToggleButton value={32}>2</ToggleButton>
                    <ToggleButton value={42}>2</ToggleButton>
                    <ToggleButton value={52}>2</ToggleButton>    
                  </ToggleButtonGroup>
                  <br/>
                  
                  <ToggleButtonGroup type="checkbox" style={{marginBottom: '-6px'}}>
                    <ToggleButton value={13}>3</ToggleButton>
                    <ToggleButton value={23}>3</ToggleButton>
                    <ToggleButton value={33}>3</ToggleButton>
                    <ToggleButton value={43}>3</ToggleButton>
                    <ToggleButton value={53}>3</ToggleButton>                    
                  </ToggleButtonGroup>
                  <br/>
                  
                  <ToggleButtonGroup type="checkbox" style={{marginBottom: '-6px'}}>
                    <ToggleButton value={14}>4</ToggleButton>
                    <ToggleButton value={24}>4</ToggleButton>
                    <ToggleButton value={34}>4</ToggleButton>
                    <ToggleButton value={44}>4</ToggleButton>
                    <ToggleButton value={54}>4</ToggleButton>                    
                  </ToggleButtonGroup>
                  <br/>
                  
                  <ToggleButtonGroup type="checkbox" style={{marginBottom: '-6px'}}>
                    <ToggleButton value={15}>5</ToggleButton>
                    <ToggleButton value={25}>5</ToggleButton>
                    <ToggleButton value={35}>5</ToggleButton>
                    <ToggleButton value={45}>5</ToggleButton>
                    <ToggleButton value={55}>5</ToggleButton>                    
                  </ToggleButtonGroup>
                  <br/>
                  
                  <ToggleButtonGroup type="checkbox" style={{marginBottom: '-6px'}}>
                    <ToggleButton value={16}>6</ToggleButton>
                    <ToggleButton value={26}>6</ToggleButton>
                    <ToggleButton value={36}>6</ToggleButton>
                    <ToggleButton value={46}>6</ToggleButton>
                    <ToggleButton value={56}>6</ToggleButton>                    
                  </ToggleButtonGroup>
                  <br/>
                  
                  <ToggleButtonGroup type="checkbox" style={{marginBottom: '-6px'}}>
                    <ToggleButton value={17}>7</ToggleButton>
                    <ToggleButton value={27}>7</ToggleButton>
                    <ToggleButton value={37}>7</ToggleButton>
                    <ToggleButton value={47}>7</ToggleButton>
                    <ToggleButton value={57}>7</ToggleButton>                    
                  </ToggleButtonGroup>
                  <br/>
                  
                  <ToggleButtonGroup type="checkbox" style={{marginBottom: '-6px'}}>
                    <ToggleButton value={18}>8</ToggleButton>
                    <ToggleButton value={28}>8</ToggleButton>
                    <ToggleButton value={38}>8</ToggleButton>
                    <ToggleButton value={48}>8</ToggleButton>
                    <ToggleButton value={58}>8</ToggleButton>                    
                  </ToggleButtonGroup>
                </ToggleButtonGroup>
              </Col>
            </div>
            <div className="row">
            </div>
          </div>
        </div>
      </div>
      
    ); 

  }
}
export default CourseBuilder