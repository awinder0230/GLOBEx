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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="thumbnail text-center">
              <img src="http://www.drodd.com/images15/food11.jpg" alt="" className="img-responsive"></img>
              <div className="caption">
                <h1 style={{ color: 'white' }}>{this.state.user.name}'s Cuisine Diary</h1>
                <h3 style={{ color: 'white' }}>This is my account: {this.state.user.account}</h3> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleUserPage;