import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img alt="Gourmet" src="...link for brand picture"></img>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="#">Gourmets</a></li>
              <li><a href="#">Restaurant</a></li>
              <li><a href="#" data-toggle="modal" data-target="#login-modal">Login</a></li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"></input>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}


export default Navbar;