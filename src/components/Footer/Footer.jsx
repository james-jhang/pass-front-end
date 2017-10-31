import React, {Component} from 'react';


class Footer extends Component {
	render() {
		return (
            <footer className="footer">
                <div className="container-fluid">
                    {/* <nav className="pull-left">
                        <ul>
                            <li>
                                <a href="#pablo">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#pablo">
                                    Company
                                </a>
                            </li>
                            <li>
                                <a href="#pablo">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#pablo">
                                   Blog
                                </a>
                            </li>
                        </ul>
                    </nav> */}
                    <p className="copyright pull-right">
                        &copy; {(new Date()).getFullYear()} <a href="http://lbd-react.creative-tim.com/?_ga=2.202273938.2036390166.1509098139-2058117058.1509098139#/dashboard">Creative Tim</a>, made with love for a better web
                    </p>
                </div>
            </footer>
		);
	}
}

export default Footer;
