import React, { Component } from 'react';
// import {FormGroup,ControlLabel,FormControl} from 'react-bootstrap';

import {Card} from 'components/Card/Card.jsx';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';
import {UserCard} from 'components/UserCard/UserCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

import avatar from "assets/img/faces/source.gif";

class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols = {["col-md-4", "col-md-4" , "col-md-4"]}
                      proprieties = {[
                        {
                          label : "account id",
                          type : "text",
                          bsClass : "form-control",
                          defaultValue : "125598165",
                          disabled : true
                        },
                        {
                          label : "Username",
                          type : "text",
                          bsClass : "form-control",
                          defaultValue : "David Bowie",
                          disabled : true
                        },
                        {
                          label : "Role",
                          type : "text",
                          bsClass : "form-control",
                          defaultValue : "Student",
                          disabled : true
                        }
                      ]}
                    />
                    <FormInputs
                      ncols = {["col-md-6"]}
                      proprieties = {[
                        {
                          label : "Email",
                          type : "email",
                          bsClass : "form-control",
                          placeholder : "place your email",
                          defaultValue : "davidbowie1969@gmail.com"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols = {["col-md-6", "col-md-6"]}
                      proprieties = {[
                        {
                          label : "New Password",
                          type : "password",
                          bsClass : "form-control",
                          placeholder : "Home Adress",
                          defaultValue : "sdkfgksdgokdfg"
                        },
                        {
                          label : "Confirm Password",
                          type : "password",
                          bsClass : "form-control",
                          placeholder : "Home Adress",
                          defaultValue : "sdkfgksdgokdfg"
                        }
                      ]}
                    />
                    <Button
                      bsStyle="info"
                      pullRight
                      fill
                      type="submit"
                    >
                      Update Profile
                    </Button>
                    <div className="clearfix"></div>
                  </form>
                }
              />
            </div>
            <div className="col-md-4">
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="David Bowie"
                userName="Student: 125598165"
                description={
                  <span>
                    <br />
                    <a href="https://en.wikipedia.org/wiki/David_Bowie_(1969_album)">davidbowie1969@gmail.com</a>
                  </span>
                }
                /*socials={
                    <div>
                        <Button simple><i className="fa fa-facebook-square"></i></Button>
                        <Button simple><i className="fa fa-twitter"></i></Button>
                        <Button simple><i className="fa fa-google-plus-square"></i></Button>
                    </div>
                }*/
              />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
