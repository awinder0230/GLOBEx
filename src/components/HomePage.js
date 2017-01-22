import React, { Component } from 'react';
import 'isomorphic-fetch';
import HomePageSlider from './HomePageSlider.js';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      best_sellers_articles: [],
    };
  }

/*  componentDidMount() {
    // fetch best sellers for HomePageSlider
    fetch('/api/articles/query?num=3')
    .then(res => res.json())
    .then(json => { 
      this.setState({ best_sellers_articles: json });
    });
  }*/

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <HomePageSlider/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
