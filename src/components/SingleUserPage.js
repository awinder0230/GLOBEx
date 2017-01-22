import 'isomorphic-fetch';
import React, { Component } from 'react';

class SingleUserPage extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: 'test',
        account: 'test'
      },
      articles: []
    };
  }

  componentDidMount() {
    fetch('api/users/query?name=user1')
      .then(res => { return res.json(); })
      .then(json => { this.setState({ user: json[0] }); })
      .then( () => {
        fetch(`api/articles/query?author=${this.state.user.account}`)
          .then(res => { return res.json(); })
          .then(json => { console.log('articles', json) ; this.setState({ articles: json }); });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.user.name}</h1>
        <h2>{this.state.user.account}</h2>
      </div>
    );
  }
}

export default SingleUserPage;