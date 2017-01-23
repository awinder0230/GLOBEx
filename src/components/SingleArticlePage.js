import 'isomorphic-fetch';
import React, { Component } from 'react';

class SingleArticlePage extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      author: '',
      tags: [],
      location: '',
      content: '',
      popularity: 0,
      article: null
    };
  }

  componentDidMount() {
    // const { id } = this.props;
    fetch(`api/articles/`)
      .then(res => { return res.json(); })
      .then(json => {
        fetch(`api/articles/${id}`)
          .then(res => { return res.json(); })
          .then(json => {
            console.log('article', json);
            this.setState({
              id: json.id,
              title: json.title,
              author: json.author,
              tags: json.tags,
              location: json.location,
              content: json.content,
              popularity: json.popularity,
              article: json.article 
            });
        });
      });    
  }

  render() {
    return (
      <div className="container-fluid container-low-opacity">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <img width="100%" src="http://wildfirerestaurant.co.uk/wp-content/uploads/2014/10/ph_homepage-banner.jpg" alt="" className="img-responsive"></img>
              <div className="caption">
                <h1 style={{ color: 'white' }}>{this.state.title}</h1>
                <h3 style={{ color: 'white' }}>{this.state.author}</h3> 
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1>{this.state.title}</h1>
            <h3>{this.state.author}</h3>
            <p>{this.state.content}</p>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default SingleArticlePage;