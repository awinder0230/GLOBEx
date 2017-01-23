import React, { Component } from 'react';

class HomePageGallery extends Component {
  render() {
    const num = 12/this.props.num;
    const id = this.props.id;
    const galleryClassName = "col-md-"+num;
    return (
  	<div>
      <div className="row">
        <div className="col-md-12">
          <h3><span className="glyphicon glyphicon-check" aria-hidden="true"></span>  {props.heading}</h3>
        </div>
      </div>
      <div className="row">
        <div className="galleryClassName">
          <img width="100%" src="https://www.bostonsausage.co.uk/wp-content/uploads/2013/11/Rump-Steak-Meal-Deal.jpg"></img>
          <h6><a style={{ color: 'black' }} href="#/articles/1">Wang Roast Steak</a></h6>
          <h6><a style={{ color: 'black' }} href="#/users/1">Tiffant Chih</a></h6>
          <h6>Popularity: ★★★★★</h6>
        </div>
      </div>
    </div>
    );
  }
}

export default HomePageGallery;