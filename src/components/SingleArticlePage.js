import 'isomorphic-fetch';
import React, { Component } from 'react';

class SingleArticlePage extends Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      id: '',
      title: '',
      author: '',
      tags: [],
      location: '',
      content: '',
      popularity: 0,
      article: null
    };

    this.saveChanges = this.saveChanges.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    //fetch(`api/articles/`)
      //.then(res => { return res.json(); })
      //.then(json => {
        //const id = json[0]._id;
        fetch(`api/articles/${id}`)
          .then(res => { return res.json(); })
          .then(json => {
            console.log('article', json);
            this.setState({
              userId: json.userId,
              id: json.id,
              title: json.title,
              author: json.author,
              tags: json.tags,
              location: json.location,
              content: json.content,
              popularity: json.popularity,
              article: json.article
            });
            this.newTitle.value = json.title;
            this.newContent.value = json.content;
        });
      //});
  }

  saveChanges() {
    const { id } = this.props;
    this.setState((state) => {
      state.title = this.newTitle.value;
      state.content = this.newContent.value;
      fetch(`api/articles/${id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: state.userId,
          id: state.id,
          title: state.title,
          author: state.author,
          tags: state.tags,
          location: state.location,
          content: state.content,
          popularity: state.popularity,
          article: state.article
        }),
      });
      return state;
    });
  }

  render() {
    return (
      <div className="container-fluid container-low-opacity">
        <div className="row">
          <div className="col-md-12 cover-photo">
            <div className="text-center cover-photo-thumnail">
              <img style={{ opacity: '0.5' }} width="100%" src="http://wildfirerestaurant.co.uk/wp-content/uploads/2014/10/ph_homepage-banner.jpg" alt="" className="img-responsive"></img>
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
            <h1>{this.state.title}
              <button type="button" className="close" data-toggle="modal" data-target="#modal-config">
                <i className="material-icons">settings</i>
              </button>
            </h1>
            <h3>{this.state.author}</h3>
            <p>{this.state.content}</p>
          </div>
          <div className="col-md-2"></div>
        </div>

        <div className="modal fade" id="modal-config" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Edit Article</h3>
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
                          placeholder="Aritcle Title..."
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
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close without saving</button>
                <button type="button" className="btn btn-gourmet" data-dismiss="modal" onClick={this.saveChanges}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleArticlePage;
