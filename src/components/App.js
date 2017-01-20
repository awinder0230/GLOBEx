import React, { Component } from 'react';

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
    if (this.state.route === '/articles') {
      return <ArticlesPage />;
    }
  }

  renderBreadcrumb() {
    
  }

  render() {
    return (
      <div>
       
      </div>
    );
  }
}


export default App;
