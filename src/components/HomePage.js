import React, { Component } from 'react';
import 'isomorphic-fetch';
import HomePageSlider from './HomePageSlider.js';
import HomePageGallery3 from './HomePageGallery3.js';
import HomePageGallery4 from './HomePageGallery4.js';
import HomePageGallery6 from './HomePageGallery6.js';
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
      console.log('authors: ', json);
    });
    fetch('/api/articles/')
    .then(res => res.json())
    .then(json => { 
      this.setState({ articles: json });
      console.log('articles: ', json);
    });  
  }
/*
  componentDidMount() {
    fetch('api/users/query?name=user1')
      .then(res => { return res.json(); })
      .then(json => { this.setState({ user: json[0] }); });
  }
*/

  renderGallery() {
    return (
      <div>
        <HomePageGallery3
          heading="Chef's Choice: Western Cowboy"
          id={this.state.articles[0]._id}
          title={this.state.articles[0].title}
          author={this.state.articles[0].author}
          userId={this.state.articles[0].userId}
          popularity={this.state.articles[0].popularity}
        />
        <HomePageGallery4
          heading="Chef's Choice: Rural Life Style"
        /> 
        <HomePageGallery3
          heading="Chef's Choice: Western Cowboy"
        />
        <HomePageGallery6
          heading="Chef's Choice: Popeye the Sailor man"
        />  
        <HomePageGallery4
          heading="Chef's Choice: Rural Life Style"
        />
        <HomePageGallery3
          heading="Chef's Choice: Western Cowboy"
        />
        <HomePageGallery4
          heading="Chef's Choice: Rural Life Style"
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
