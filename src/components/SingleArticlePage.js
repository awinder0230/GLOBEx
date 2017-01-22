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
    const { id } = this.props;

    fetch(`api/articles/5884f19bf9526826cc454447`)
      .then(res => { return res.json(); })
      .then(json => { console.log('article', json) ; this.setState({ article: json });
    });
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default SingleArticlePage;