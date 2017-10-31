import React, {Component} from 'react';
import { } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import HeaderLinks from '../Header/HeaderLinks.jsx';

import imagine from 'assets/img/sidebar-3.jpg';
// import logo from 'assets/img/reactlogo.png';
import logo from 'assets/img/homework256.png';

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth
        }
    }
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
    }
    activeRoutes(routeNames) {
      for(var i = 0; i<routeNames.length;i++) {
        if(this.props.location.pathname.indexOf(routeNames[i]) > -1) return 'active';
      }
      return '';
    }
    updateDimensions(){
        this.setState({width:window.innerWidth});
    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    render(){
        const sidebarBackground = {
            backgroundImage: 'url(' + imagine + ')'
        };
        return (
            <div id="sidebar" className="sidebar" data-color="black" data-image={imagine}>
                <div className="sidebar-background" style={sidebarBackground}></div>
                    <div className="logo">
                        <a href="/dashboard" className="simple-text logo-mini">
                            <div className="logo-img">
                                <img src={logo} alt="logo_image"/>
                            </div>
                        </a>
                        <a href="/dashboard" className="simple-text logo-normal">
                            Assignmnet Submission
                        </a>
                    </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        { this.state.width <= 991 ? (<HeaderLinks />):null }
                        <li className={this.activeRoutes(["/dashboard", "/table"])}>
                            <NavLink to={'/dashboard'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-notebook"></i>
                                <p>My Course</p>
                            </NavLink>
                        </li>
                        <li className={this.activeRoute("/user")}>
                            <NavLink to={'/user'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-user"></i>
                                <p>User Profile</p>
                            </NavLink>
                        </li>
                        <li className={this.activeRoute("/accounts")}>
                            <NavLink to={'/accounts'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-users"></i>
                                <p>Accounts</p>
                            </NavLink>
                        </li>
                        <li className={this.activeRoute("/typography")}>
                            <NavLink to={'/typography'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-news-paper"></i>
                                <p>Typography</p>
                            </NavLink>
                        </li>
                        <li className={this.activeRoute("/icons")}>
                            <NavLink to={'/icons'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-science"></i>
                                <p>Icons</p>
                            </NavLink>
                        </li>
                        {/* <li className={this.activeRoute("/maps")}>
                            <NavLink to={'/maps'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-map-marker"></i>
                                <p>Maps</p>
                            </NavLink>
                        </li> */}
                        <li className={this.activeRoute("/notifications")}>
                            <NavLink to={'/notifications'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-bell"></i>
                                <p>Notifications</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
