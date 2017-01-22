import React, { Component } from 'react';
import 'isomorphic-fetch';
import HomePageSlider from './HomePageSlider.js';
import HomePageGallery from './HomePageGallery.js';
import 'slick-carousel';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      best_choice_authors: [],
    };
  }

  componentDidMount() {
    // fetch best sellers for HomePageSlider
    fetch('/api/users/query?name=user1')
    .then(res => res.json())
    .then(json => { 
      this.setState({ best_choice_authors: json });
    });
    console.log(this.state.best_choice_authors);
  }
/*
  componentDidMount() {
    fetch('api/users/query?name=user1')
      .then(res => { return res.json(); })
      .then(json => { this.setState({ user: json[0] }); });
  }
*/
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <HomePageSlider/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <HomePageGallery/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
