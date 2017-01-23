import React, { Component } from 'react';

const HomePageGallery3 = (props) => {
  return (
  	<div>
      <div className="row">
        <div className="col-md-12">
          <h3><span className="glyphicon glyphicon-check" aria-hidden="true"></span>  {props.heading}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img width="100%" src="https://www.bostonsausage.co.uk/wp-content/uploads/2013/11/Rump-Steak-Meal-Deal.jpg"></img>
          <h6><a style={{ color: 'black' }} href={"#/articles/"+props.id}>Wang Roast Steak</a></h6>
          <h6><a style={{ color: 'black' }} href="#/users/1">Tiffant Chih</a></h6>
          <h6>Popularity: ★★★★★</h6>
        </div>
        <div className="col-md-4">
          <img width="100%" src="https://www.bostonsausage.co.uk/wp-content/uploads/2013/11/Rump-Steak-Meal-Deal.jpg"></img>
          <h6><a style={{ color: 'black' }} href={"#/articles/"+props.id}>Wang Roast Steak</a></h6>
          <h6><a style={{ color: 'black' }} href="#/users/1">Tiffant Chih</a></h6>
          <h6>Popularity: ★★★★★</h6>
        </div>
        <div className="col-md-4">
          <img width="100%" src="https://www.bostonsausage.co.uk/wp-content/uploads/2013/11/Rump-Steak-Meal-Deal.jpg"></img>
          <h6><a style={{ color: 'black' }} href={"#/articles/"+props.id}>Wang Roast Steak</a></h6>
          <h6><a style={{ color: 'black' }} href="#/users/1">Tiffant Chih</a></h6>
          <h6>Popularity: ★★★★★</h6>
        </div>
      </div>
    </div>
  );
};

export default HomePageGallery3;