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
      articles: [{_id: "", title: "", author:"", userId: "", tags: "", popularity: 0}],
    };
  }

  componentDidMount() {
    // fetch best sellers for HomePageSlider
    fetch('/api/users/')
    .then(res => res.json())
    .then(json => { 
      this.setState({ best_choice_authors: json });
    });
    fetch('/api/articles/')
    .then(res => res.json())
    .then(json => { 
      this.setState({ articles: json });
    });  
  }

  renderGallery() {
    console.log(this.state.articles);
    return (
      <div>
        <HomePageGallery
          heading="Chef's Choice: Western Cowboy"
          articles={this.state.articles.slice(0, 3)}
          num={3}
        />
        <HomePageGallery
          heading="chef's choice: rural life style"
          articles={this.state.articles.slice(3, 7)}
          num={4}
        /> 
        <HomePageGallery
          heading="Chef's Choice: Western Cowboy"
          articles={this.state.articles.slice(7, 10)}
          num={3}
        />
        <HomePageGallery
          heading="Chef's Choice: Popeye the Sailor man"
          articles={this.state.articles.slice(10, 16)}
          num={6}
        />  
        <HomePageGallery
          heading="Chef's Choice: Western Cowboy"
          articles={this.state.articles.slice(16, 20)}
          num={4}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <HomePageSlider/>
          </div>
        </div>
        {this.renderGallery()}
      </div>
    );
  }
}

export default HomePage;
