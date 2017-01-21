import React, { Component } from 'react';

import WelcomePage from './WelcomePage';
import HomePage from './HomePage';
import SingleUserPage from './SingleUserPage';
import Navbar from './Navbar';

class App extends Component {
  state = {
    route: window.location.hash.substr(1),
  };

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1),
      });
    });
  }

  renderRoute() {
    // www.globex.com/home/
    if (this.state.route === '/home') {
      return <HomePage />;
    }
    // www.globex.com/users/userid/
    if (this.state.route.startsWith('/users/')) {
      const id = this.state.route.split('/users/')[1];
      return <SingleUserPage id={id} />;
    }
    // www.globex.com
    return <WelcomePage />;
  }

  renderBreadcrumb() {
    
  }

  render() {
    return (
      <div>
        {this.renderNavbar()}
        {this.renderRoute()}
      </div>
    );
  }
}

export default App;
