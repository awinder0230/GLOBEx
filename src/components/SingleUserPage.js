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

    this.newArticle = this.newArticle.bind(this);
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

  newArticle() {
    /*
    fetch(`api/articles/${id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: this.state.user.account,
        id: state.id,
        title: this.newTitle.value,
        author: this.state.user.name,
        tags: [],
        location: this.newLocation.value,
        content: this.newContent.value,
        popularity: this.newPopularity.value,
        article: null
      }),
    });
    */
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
        <button
          type="button"
          className="btn btn-gourmet btn-pull-right"
          data-toggle="modal"
          data-target="#modal-new-article">
          New Article
        </button>
        <div className="row margin-top-50">
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

        <div className="modal fade" id="modal-new-article" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3>New Article</h3>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <form role="form">
                    <div className="form-group row">
                      <label className="col-form-label col-md-2 col-xs-2" htmlFor="inputTitle">
                        Title
                      </label>
                      <div className="col-md-10 col-xs-10">
                        <input
                          className="form-control"
                          id="inputTitle"
                          type="text"
                          ref={(input) => { this.newTitle = input; }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-2 col-xs-2" htmlFor="inputLocation">
                        Location
                      </label>
                      <div className="col-md-10 col-xs-10">
                        <input
                          className="form-control"
                          id="inputLocation"
                          type="text"
                          ref={(input) => { this.newLocation = input; }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-2 col-xs-2" htmlFor="inputPopularity">
                        Popularity
                      </label>
                      <div className="col-md-10 col-xs-10">
                        <input
                          className="form-control"
                          id="inputPopularity"
                          type="number"
                          min="1"
                          max="5"
                          ref={(input) => { this.newPopularity = input; }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-2 col-xs-2" htmlFor="inputContent">
                        Content
                      </label>
                      <div className="col-md-10 col-xs-10">
                        <textarea
                          className="form-control"
                          id="inputContent"
                          rows="10"
                          ref={(input) => { this.newContent = input; }}
                          placeholder="Write something..."
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close without saving</button>
                <button type="button" className="btn btn-gourmet" data-dismiss="modal" onClick={this.newArticle}>Save changes</button>
              </div>
            </div>
          </div>
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
