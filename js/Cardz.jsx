import React, { Component } from "react";
import {connect} from 'react-redux';

import * as actions from '../redux/actions/workspace.js';
import store from '../redux/store.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import update from 'react-addons-update';

const styles = {cardz: {
    maxHeight: 500
}
}


class Cardz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tilesData: [
        {
          img: 'https://static1.squarespace.com/static/53fe0ff1e4b03ae33c173d0b/t/565f50cfe4b0d9b44ab71fe0/1449087188284/Provost-Studio-RTP-Frontier_Photo-14_x.jpg?format=1500w',
          avatar: 'https://writenaked.files.wordpress.com/2016/01/img_3792.jpg?w=300&h=254',
          title: 'The Frontier',
          placeid:'ChIJAfxBZL3vrIkRYVG0gkU72dI',
          subtitle: 'Free coworking environment in RTP',
          wifi: 'RTPGuest',
          passwrod: 'open',
          quirks: 'wifi is weird sometimes',
          address: {street: '800 Park Offices Dr',
                    city: 'Durham, NC',
                    zip: 27709},
          submitter: 'gwhitley',
          featured: true,
          expanded: false,
        },
        {
          img: 'https://c2.staticflickr.com/6/5349/17374712440_ae198715ea_z.jpg',
          avatar: 'http://s3-media4.fl.yelpcdn.com/bphoto/eryKArSBuET-Dj4FcBuoKw/348s.jpg',
          title: 'Cocoa Cinnamon',
          subtitle: 'Hip coffee shop in Durham\'s DIY district',
          placeid: 'ChIJ005xLnTkrIkRyOEuOjvwi94',
          wifi: 'Cocoa Cinnamon',
          passwrod: 'ESPRESSO!',
          quirks: 'nowhere to park',
          address: {street: '420 W Geer St',
                    city: 'Durham, NC',
                    zip: 27707},
          submitter: 'gwhitley',
          expanded: false,

        },
        {
          img: 'http://video.aia.org/aiaawards/2013/2013-library-awards/jbhj-library/i/photo4.jpg',
          avatar: 'https://i.vimeocdn.com/portrait/8150369_300x300.jpg',
          title: 'James B Hunt Jr Library',
          placeid: 'ChIJQR9Zn3X1rIkRWX_jnCZmAr4',
          subtitle: 'NCSU Campus Library, designer digs with super-fast wifi',
          wifi: 'Library Wifi',
          passwrod: 'open',
          quirks: 'pay to park',
          address: {street: '1070 Partners Way',
                    city: 'Raleigh, NC',
                    zip: 27606},
          submitter: 'gwhitley',
          expanded: false,

        },
        {
          img: 'https://farm4.staticflickr.com/3835/15130401655_c191ae776b.jpg',
          avatar: 'https://static1.squarespace.com/static/56b3cbf945bf21bec4f54976/t/56b657aeb6aa60e6d942a7cf/1467146667788/?format=1500w',
          title: 'Honeysuckle Teahouse',
          placeid: 'ChIJLcOqFtbarIkRnyH30OdQzUg',
          subtitle: 'Open air tea cafe on an herb farm outside Chapel Hill',
          wifi: 'GuestWifi',
          passwrod: '1122112233',
          quirks: 'kind of a far drive from town',
          address: {street: '1070 Partners Way',
                    city: 'Raleigh, NC',
                    zip: 27606},
          submitter: 'gwhitley',
          expanded: false,

        },
      ]
    };
};

  handleToggle(toggle, index, event) {
    var newState = update(this.state, {tilesData: {[index]: {expanded: {$set: toggle}}}})
    console.log(index)

    this.setState(newState);
  };

  componentWillMount() {
      this.props.dispatch(actions.fetchWorkspaceData()); // puts the data in the store



  };

updateCard() {
    var newState = update(this.state, {
        tilesData: {
            [index]: {
                placeId: {
                    $set: this.props.actions.workspace.currentPlace
                }
            }
        }
    })
    this.setState(newState);
};

  render() {
    var tiles = this.props.state.workspaceCache.map((tile, index) => {
      console.log('strung: ', tile);
      return(
      <Card
          onClick={this.handleToggle.bind(this, !tile.expanded, index)}
          expanded="{tile.expanded}"
          onExpandChange={this.handleExpandChange} updateCard={this.updateCard.bind(this)}>
          <CardHeader
            title={tile.placeData}
            subtitle="{tile.desc}"
            avatar="{tile.avatar}"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText>
          </CardText>
          <CardMedia
            inlineStyle={styles.cardz}
            expandable={true}
            overlay={<CardTitle title={tile.placeData} subtitle="Overlay subtitle" />}
          >
            <img src="{tile.img}" />
          </CardMedia>
          <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
          </CardActions>
        </Card>)
    })
    return (
        <div>
            {tiles}
        </div>
    );
  }
}

const mapStateToProps = (state, props) => {
    return {
        state: state
    }
};

const Container = connect(mapStateToProps)(Cardz);

export default Container;
