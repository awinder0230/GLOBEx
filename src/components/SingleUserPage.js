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
        fetch(`api/articles/query?author=${this.state.user.account}&num=10`)
          .then(res => { return res.json(); })
          .then(json => { console.log('articles', json) ; this.setState({ articles: json }); });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 cover-photo">
            <div className="thumbnail text-center cover-photo-thumnail">
              <img src="http://www.drodd.com/images15/food11.jpg" alt="" className="img-responsive"></img>
              <div className="caption">
                <h1 style={{ color: 'white' }}>{this.state.user.name}'s Cuisine Diary</h1>
                <h3 style={{ color: 'white' }}>This is my account: {this.state.user.account}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {this.state.articles.map((article, index) => 
            { return ( 
              <SingleUserPageArticle key={index +1 }
                title={article.title}
                href={`#/articles/${article._id}`}
                author={article.author}
                content={article.content}
              />);
            })}
        </div>
      </div>
    );
  }
}

export default SingleUserPage;

const SingleUserPageArticle = props => <div className="list-group">
  <a href={props.href} className="list-group-item list-group-item-action">
    <h1 className="list-group-item-heading">{props.title}</h1>
    <h3 className="list-group-item-heading">{props.author}</h3>
    <p className="list-group-item-text">{props.content}</p>
  </a>
</div>
