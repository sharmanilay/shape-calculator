import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';

export default class Header extends Component {
  render(){
    return(
      <header>
      <Navbar fluid={true} className="head navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <h2><a className="brand" href="/">Shape Calculator</a></h2>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
      </header>
    );
  }
}
