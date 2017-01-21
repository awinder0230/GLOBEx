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
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"></input>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span className="caret"></span></a>
                <ul id="login-dp" className="dropdown-menu">
                  <li>
                    <div class="row">
                      <div class="col-md-12">
                        Login via
                        <div class="social-buttons">
                          <a href="#" class="btn btn-fb"><i class="fa fa-facebook"></i> Facebook</a>
                          <a href="#" class="btn btn-tw"><i class="fa fa-twitter"></i> Twitter</a>
                        </div>
                        or
                        <form class="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                          <div class="form-group">
                            <label class="sr-only" for="exampleInputEmail2">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email address" required></input>
                          </div>
                          <div class="form-group">
                            <label class="sr-only" for="exampleInputPassword2">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" required></input>
                            <div class="help-block text-right"><a href="">Forget the password ?</a></div>
                          </div>
                          <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                          </div>
                          <div class="checkbox">
                            <label>
                              <input type="checkbox"> keep me logged-in </input>
                            </label>
                          </div>
                        </form>
                      </div>
                      <div class="bottom text-center">
                        New here ? <a href="#"><b>Join Us</b></a>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;