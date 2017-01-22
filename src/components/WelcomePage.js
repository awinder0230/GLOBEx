import React, { Component } from 'react';

class WelcomePage extends Component {
  render() {
    return (
      <div align="center" className="embed-responsive embed-responsive-16by9">
        <video autoplay loop className="embed-responsive-item">
           <source src="http://techslides.com/demos/sample-videos/small.mp4" type=video/mp4></source>
        </video>
        <button type="button" className="btn btn-outline-secondary">Serving</button>
      </div>
    );
  }
}

export default WelcomePage;