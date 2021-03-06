import React, { Component } from 'react';

import './welcomePageStyleSheet.css';

class WelcomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="video-background">
          <div className="video-foreground">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PZ4pctQMdg4?autoplay=1&loop=1&playlist=PZ4pctQMdg4" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomePage;