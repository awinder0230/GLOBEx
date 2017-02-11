import React, { Component } from 'react';

import WelcomePage from './WelcomePage';
import HomePage from './HomePage';
import SingleUserPage from './SingleUserPage';
import SingleArticlePage from './SingleArticlePage';
import Navbar from './Navbar';

class App extends Component {
  state = {
    route: window.location.hash.substr(1),
    search: '',
  };

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1),
      });
    });
  }

  onSubmit() {
    let target = document.getElementsByClassName('form-control')[0];
    this.setState({
      route: '/users/' + target.value,
      search: target.value,
    });
    target.value = '';
  }

  onLogin() {
    let target = document.getElementsByClassName('form-control')[0];
    this.setState({
      route: '/users/' + target.value,
      search: target.value,
    });
    target.value = '';
  }
  
  renderNavbar() {
    return <Navbar onSubmit={() => this.onSubmit()}/>;
  }

  renderRoute() {
    console.log("route: ", this.state.route);
    // www.globex.com/home/
    if (this.state.route === '/home') {
      return <HomePage />;
    }
    // www.globex.com/users/userid/
    if (this.state.route.startsWith('/users/')) {
      const id = this.state.route.split('/users/')[1];
      return <SingleUserPage id={id} />;
    }
    // www.globex.com/articles/articleid/
    if (this.state.route.startsWith('/articles/')) {
      const id = this.state.route.split('/articles/')[1];
      return <SingleArticlePage id={id} />;
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
