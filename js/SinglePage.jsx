import React from 'react';
import ReactDOM from 'react-dom';
import {Cardz, Gridz} from './Cardz'


// export default class SinglePage


export default class SinglePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tilesData: [
        {
          img: 'http://loremflickr.com/640/400/breakfast/all',
          title: 'Breakfast',
          author: 'jill111',
          featured: true,
          expanded: false,
        },
        {
          img: 'http://loremflickr.com/640/400/burger/all',
          title: 'Tasty burger',
          author: 'pashminu',
          expanded: true,

        },
        {
          img: 'http://loremflickr.com/640/400/camera/all',
          title: 'Camera',
          author: 'Danson67',
          expanded: false,

        },
        {
          img: 'http://loremflickr.com/640/400/morning/all',
          title: 'Morning',
          author: 'fancycrave1',
          featured: true,
          expanded: false,

        },
        {
          img: 'http://loremflickr.com/640/400/hats/all',
          title: 'Hats',
          author: 'Hans',
          expanded: false,
        },
        {
          img: 'http://loremflickr.com/640/400/honey/all',
          title: 'Honey',
          author: 'fancycravel',
          expanded: false,
        },
        {
          img: 'http://loremflickr.com/640/400/vegetables/all',
          title: 'Vegetables',
          author: 'jill111',
          expanded: false,
        },
        {
          img: 'http://loremflickr.com/640/400/plant/all',
          title: 'Water plant',
          author: 'BkrmadtyaKarki',
          expanded: false,
        },
      ]
    };
  }
  render() {
    return (
    <div style={{flex: .5, flexDirection:'row'}}>
        <Cardz />
        <Cardz />
        <Cardz />
        <Cardz />
        <Cardz />
        <Cardz />
        <Cardz />
    </div>
  );
}
}
