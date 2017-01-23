import React, { Component } from 'react';

const HomePageGallery4 = (props) => {
  return (
  	<div>
      <div className="row">
        <div className="col-md-12">
          <h3><span className="glyphicon glyphicon-check" aria-hidden="true"></span>  {props.heading}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <img width="100%" src="http://cdn.foodbeast.com/content/uploads/2016/07/Garden-Salad-1.jpg"></img>
          <h6><a style={{ color: 'black' }} href="#/articles/2">Caesar Salad</a></h6>
          <h6><a style={{ color: 'black' }} href="#/users/2">Jason Kuo</a></h6>
          <h6>Popularity: ★★★★</h6>
        </div>
        <div className="col-md-3">
          <img width="100%" src="http://cdn.foodbeast.com/content/uploads/2016/07/Garden-Salad-1.jpg"></img>
          <h6><a style={{ color: 'black' }} href="#/articles/2">Caesar Salad</a></h6>
          <h6><a style={{ color: 'black' }} href="#/users/2">Jason Kuo</a></h6>
          <h6>Popularity: ★★★★</h6>
        </div>
        <div className="col-md-3">
          <img width="100%" src="http://cdn.foodbeast.com/content/uploads/2016/07/Garden-Salad-1.jpg"></img>
          <h6><a style={{ color: 'black' }} href="#/articles/2">Caesar Salad</a></h6>
          <h6><a style={{ color: 'black' }} href="#/users/2">Jason Kuo</a></h6>
          <h6>Popularity: ★★★★</h6>
        </div>
        <div className="col-md-3">
          <img width="100%" src="http://cdn.foodbeast.com/content/uploads/2016/07/Garden-Salad-1.jpg"></img>
          <h6><a style={{ color: 'black' }} href="#/articles/2">Caesar Salad</a></h6>
          <h6><a style={{ color: 'black' }} href="#/users/2">Jason Kuo</a></h6>
          <h6>Popularity: ★★★★</h6>
        </div>
      </div>
    </div>
  );
};

export default HomePageGallery4;