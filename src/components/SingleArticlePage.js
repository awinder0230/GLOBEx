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
      <div className="container-fluid container-low-opacity">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <img width="100%" src="http://wildfirerestaurant.co.uk/wp-content/uploads/2014/10/ph_homepage-banner.jpg" alt="" className="img-responsive"></img>
              <div className="caption">
                <h1 style={{ color: 'white' }}>The 10 Best Steakhouses in NYC</h1>
                <h3 style={{ color: 'white' }}>Zachary Feldman</h3> 
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1>The 10 Best Steakhouses in NYC</h1>
            <h3>Zachary Feldman</h3>
            <p>Kept alive by nearly two centuries of chewing carnivores, the New York City steakhouse defiantly broils on. Classic steakhouses, like Peter Luger and Keens, enjoy a certain amount of stability not common in the current dining climate, where even the most exciting chef-driven small plates tasting counters last about as long as the Edison bulbs that light their communal bathroom foyers. Many of these meat mongers have histories as well marbled as the aged cuts they serve, often extending back into the 19th and early 20th centuries. Taking their cues from the gregarious man-and-meat gatherings known as beefsteak socials, these old guard chophouses almost always feature dark wood and clubby atmospheres, but thanks to this current period of food culture awareness, a modern version of the steakhouse has emerged, where starters and sides are less of an afterthought. Traditional or contemporary, the restaurants on this list all excel in both char and charm. These are the 10 best steakhouses in NYC.</p>
            <p>10. Christos Steakhouse, (4108 23rd Avenue, Queens; 718-777-8400) Formerly a Greek taverna, this Astoria steakhouse has an adjoining butcher shop and ages its steaks on premises, so you can take home the same quality cuts the kitchen serves in the restaurant. The lengthy menu incorporates Hellenic touches with dishes like smoked feta mashed potatoes and a lamb bacon Cobb salad. As for the beef, porterhouse is a good choice, but Christos also dry ages its filet mignon, lending a funk not often found in the usually wet aged cut. Hiding ice cream and red velvet cake, the 'Baked Astoria' makes for an appropriately decadent finish.</p>
            <p>9. St. Anselm, (335 Metropolitan Avenue, Brooklyn; 718-384-5054) Although it sits not far from what is arguably the most famous steakhouse in the country, Joe Carroll's Williamsburg paean to all things grilled has never needed to worry about competing with the Luger leviathan. There's not much dry aged hullaballoo in this dining room. Most carnivorous patrons go for the faultless $16 hanger steak, but New York strip, and tomahawk rib eye cuts are also available. Creamed spinach and thick-cut bacon are familiar sides, but chances are you won't find shishito peppers and long beans on other steakhouse menus around town — so consider ordering them here.</p>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default SingleArticlePage;