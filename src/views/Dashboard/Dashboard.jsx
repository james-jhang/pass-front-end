import React, { Component } from 'react';
import {Modal, Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';

// import ChartistGraph from 'react-chartist';
// import {Card} from 'components/Card/Card.jsx';
// import {StatsCard} from 'components/StatsCard/StatsCard.jsx';
// import {Tasks} from 'components/Tasks/Tasks.jsx';

import {CourseCard} from 'components/CourseCard/CourseCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';
import Checkbox from 'elements/CustomCheckbox/CustomCheckbox.jsx';

import color from "assets/img/bg-book.jpg";
import avatar from "assets/img/faces/source.gif";
import {course} from 'variables/Variables.jsx';
import logo from 'assets/img/homework256.png';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { showLoginModal: false, showCourseModal: false };
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeCourseModal = this.closeCourseModal.bind(this);
    this.openCourseModal = this.openCourseModal.bind(this);
  }
  // createLegend(json){
  //   var legend = [];
  //   for(var i = 0; i < json["names"].length; i++){
  //     var type = "fa fa-circle text-"+json["types"][i];
  //     legend.push(
  //       <i className={type} key={i}></i>
  //     );
  //     legend.push(" ");
  //     legend.push(
  //       json["names"][i]
  //     );
  //   }
  //   return legend;
  // }

  // handleCheckbox = event => {
  //   const target = event.target;
  //   this.setState({
  //       [target.name]: target.checked
  //   });
  // };

  componentDidMount() {
    this.openLoginModal();
  }

  closeLoginModal() {
    this.setState({ showLoginModal: false });
  }

  openLoginModal() {
    this.setState({ showLoginModal: true });
  }

  closeCourseModal() {
    this.setState({ showCourseModal: false });
  }

  openCourseModal() {
    this.setState({ showCourseModal: true });
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
    var imgStyle = {
      width: '110px',
    };
    return (
      <div className="content">
        <div className="container-fluid">
          <Modal show={this.state.showLoginModal} onHide={this.closeLoginModal} dialogClassName="custom-modal-width">
            <Modal.Header closeButton>
              <Modal.Title style={{textAlign: 'center'}}>
                <img src={logo} alt="logo_image" style={imgStyle}/>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form horizontal>
                <FieldGroup
                  id="formHorizontalEmail"
                  type="text"
                  label="Email / ID"
                  placeholder="Email / ID"
                />

                <FieldGroup
                  id="formHorizontalPassword"
                  type="password"
                  label="Password"
                  placeholder="Password"
                />
                <FormGroup>
                  <Col sm={12}>
                    <table>
                      <tbody>
                        <tr key="1">
                          <td>
                            <Checkbox 
                              number={"1"}
                              isChecked={false}
                            />
                          </td>
                          <td>Remember me</td>
                        </tr>
                      </tbody>
                    </table>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={12}>
                    <Button type="submit" style={{width: '100%'}}>
                      Log in
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal show={this.state.showCourseModal} onHide={this.closeCourseModal}>
            <Modal.Header closeButton>
              <Modal.Title style={{textAlign: 'center'}}>
                <p className="pe-7s-notebook">I'm course</p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form horizontal>
                <FieldGroup
                  id="formHorizontalEmail"
                  type="text"
                  label="Email / ID"
                  placeholder="Email / ID"
                />
                <FieldGroup
                  id="formHorizontalPassword"
                  type="password"
                  label="Password"
                  placeholder="Password"
                />
                <FormGroup>
                  <Col sm={12}>
                    <table>
                      <tbody>
                        <tr key="1">
                          <td>
                            <Checkbox 
                              number={"1"}
                              isChecked={false}
                            />
                          </td>
                          <td>Remember me</td>
                        </tr>
                      </tbody>
                    </table>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={12}>
                    <Button type="submit" style={{width: '100%'}}>
                      Log in
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </Modal.Body>
          </Modal>
          {/* <div className="row">
            <div className="col-lg-3 col-sm-6">
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning"></i>}
                statsText="Capacity"
                statsValue="999GB"
                statsIcon={<i className="fa fa-refresh"></i>}
                statsIconText="Updated now"
              />
            </div>
            <div className="col-lg-3 col-sm-6">
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success"></i>}
                statsText="Revenue"
                statsValue="$1,345"
                statsIcon={<i className="fa fa-calendar-o"></i>}
                statsIconText="Last day"
              />
            </div>
            <div className="col-lg-3 col-sm-6">
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger"></i>}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o"></i>}
                statsIconText="In the last hour"
              />
            </div>
            <div className="col-lg-3 col-sm-6">
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info"></i>}
                statsText="Followers"
                statsValue="+45"
                statsIcon={<i className="fa fa-refresh"></i>}
                statsIconText="Updated now"
              />
            </div>
          </div> */}
          <Button fill style={{position: 'fixed', right: '5%', top: '10%'}}  href={'#/newcourse'}>Create course</Button>
          <div className="row">
            {
              course.map(function(eachCourse, key) {
                return (
                  <div key={key} className="col-sm-6 col-md-4 col-lg-3">
                    <CourseCard
                      courseLink={key === 0 ? "#/assignments" : "#/table"}
                      bgImage={color}
                      avatar={avatar}
                      courseName={eachCourse.courseName}
                      description={
                        <span>
                          {eachCourse.courseTime.map((eachTime, key) => (<span key={key}>{eachTime}<br/></span>))}
                          <br/>
                          {eachCourse.teacher_ch}
                          <br/>
                          {eachCourse.teacher_en}
                        </span>
                      }
                      socials={
                        <Button simple href={eachCourse.courseWebsite} target="_blank"><i className="pe-7s-home"></i> Course home</Button>
                      }
                    />
                  </div>
                );
              })
            }
          </div>
          {/* <div className="row">
              <div className="col-md-8">
                <Card
                  statsIcon="fa fa-history"
                  id="chartHours"
                  classes="ct-chart"
                  title="Users Behavior"
                  category="24 Hours performance"
                  stats="Updated 3 minutes ago"
                  content={
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}/>
                    }
                  legend={
                    <div className="legend">
                      {this.createLegend(legendSales)}
                    </div>
                  }
                />
              </div>
              <div className="col-md-4">
                <Card
                  statsIcon="fa fa-clock-o"
                  id="chartPreferences"
                  classes="ct-chart ct-perfect-fourth"
                  title="Email Statistics"
                  category="Last Campaign Performance"
                  stats="Campaign sent 2 days ago"
                  content={
                    <ChartistGraph data={dataPie} type="Pie"/>
                  }
                  legend={
                    <div className="legend">
                      {this.createLegend(legendPie)}
                    </div>
                  }
                />
              </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Card
                id="chartActivity"
                classes="ct-chart"
                title="2014 Sales"
                category="All products including Taxes"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <ChartistGraph
                    data={dataBar}
                    type="Bar"
                    options={optionsBar}
                    responsiveOptions={responsiveBar}
                  />
                }
                legend={
                  <div className="legend">
                    {this.createLegend(legendBar)}
                  </div>
                }
              />
            </div>
            <div className="col-md-6">
              <Card
                classes="table-full-width"
                title="Tasks"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <table className="table">
                    <Tasks />
                  </table>
                }
              />
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
