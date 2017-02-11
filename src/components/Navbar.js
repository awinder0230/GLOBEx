import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        <nav className="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img alt="Gourmet" src="./static/icon.png" height="150%"></img>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="#/home">Home</a></li>
                <li><a href="#">Gourmets</a></li>
                <li><a href="#">Restaurant</a></li>
                <li><a href="#" data-toggle="modal" data-target="#login-modal">Login</a></li>
              </ul>
              <form className="navbar-form navbar-right" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search for a meal.."></input>
                </div>
                <button type="submit" className="btn btn-inverse" onClick={() => onSubmit()}>Submit</button>
              </form>
            </div>
          </div>
        </nav>

        <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content modal-login-content">
              <div className="modal-body modal-login-body padding-top-50">
                <div className="text-center">
                  <img alt="Gourmet" src="./static/icon.png" width="75%"></img>
                </div>
                <form className="login-form">
                  <input id="login_username" className="form-control" type="text" placeholder="Username" required/>
                  <input id="login_password" className="form-control margin-top-10" type="password" placeholder="Password" required/>
                  <div className="checkbox">
                      <label>
                          <input type="checkbox"/> Remember me
                      </label>
                  </div>
                </form>
              </div>
              <div className="modal-footer modal-login-footer">
                <div>
                  <a href="/auth/facebook" className="btn btn-login btn-lg btn-block btn-link">FaceBook Login</a>
                  //<button type="submit" className="btn btn-login btn-lg btn-block" onClick={() => onLogin()}>FB Login</button>
                </div>
			    	    <div>
                  <button id="login_lost_btn" type="button" className="btn btn-link">Forget Password?</button>
                  <button id="login_register_btn" type="button" className="btn btn-link">Register</button>
                  <a href="/auth/facebook" className="btn btn-link">FaceBook Login</a>
              </div>
			        </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
