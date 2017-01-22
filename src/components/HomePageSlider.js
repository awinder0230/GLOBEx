import React, { Component } from 'react';

import Carousel from 'nuka-carousel';

const HomePageSlider = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    return (
      <Carousel>
        <img height="400px" src="http://www4.theoakkroom.com/wp-content/uploads/2015/03/grilled-chicken-salad.jpg"/>
        <img height="400px" src="http://weirvine.com/attFiles/image/20161220/1482185232634361.jpg"/>
        <img height="400px" src="http://farmersfreshmeat.com/wp-content/uploads/2015/04/Ribeye-Grilled.png"/>
        <img height="400px" src="http://weneedfun.com/wp-content/uploads/2015/10/Beautiful-Food-Photos-1.jpg"/>
        <img height="400px" src="https://realfood.tesco.com/media/images/Indian-spiced-roast-chicken-LGH-5e23f367-fdad-4948-bd98-bb80b6d9bded-0-1400x919.jpg"/>
        <img height="400px" src="http://blog.hdwallsource.com/wp-content/uploads/2014/11/dessert-background-40348-41291-hd-wallpapers.jpg"/>
      </Carousel>
    )
  }
});

export default HomePageSlider;

