import React, { Component } from 'react';


export class CourseCard extends Component{
    render(){
        return (
          <div className="card card-course">
            <a href={this.props.courseLink}>
                <div className="image">
                    <img src={this.props.bgImage} alt="..."/>
                </div>
                <div className="content">
                    <div className="author">
                            {/* {<img className="avatar border-gray" src={this.props.avatar} alt="..."/>} */}
                            <h4 className="title">
                              <br /> 
                              <b>{this.props.courseName}</b>
                              {/* <br /> */}
                              {/* <small>{this.props.userName}</small> */}
                            </h4>
                    </div>
                    <br />
                    <p className="description text-center">
                        {this.props.description}
                    </p>
                </div>
                <hr />
                <div className="footer">
                    {this.props.socials}
                </div>
            </a>
          </div>
        );
    }
}

export default CourseCard;
