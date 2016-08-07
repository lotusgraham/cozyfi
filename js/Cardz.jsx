import React, { Component } from "react";
import {connect} from 'react-redux';

import * as actions from '../redux/actions/workspace.js';
import store from '../redux/store.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import update from 'react-addons-update';

const styles = {
    cardz: {
        maxHeight: 500
    },
    cardtext: {
      fontSize: '20px',
    }
};


class Cardz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tilesData: []};
};

  handleToggle(toggle, index, event) {
    var newState = update(this.state, {tilesData: {[index]: {expanded: {$set: toggle}}}})
    console.log(index)

    this.setState(newState);
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
    var frontImage = "https://static1.squarespace.com/static/53fe0ff1e4b03ae33c173d0b/t/565f50cfe4b0d9b44ab71fe0/1449087188284/Provost-Studio-RTP-Frontier_Photo-14_x.jpg?format=1500w"
    var avatar = "https://res.cloudinary.com/movielala/image/upload/star-avatar_zqsvpt.png"
    console.log("thingy1");

    var tiles = this.props.workspaceCache.map((tile, index) => {

      console.log('the photo url:', tile.googleData.photos[0].getUrl({ 'maxWidth': 350, 'maxHeight': 350 }));
      console.log("thingy4");

      return(
      <Card
          onClick={this.handleToggle.bind(this, !tile.expanded, index)}
          expanded={tile.expanded}
          onExpandChange={this.handleExpandChange} updateCard={this.updateCard.bind(this)}>
          <CardHeader
            title={tile.googleData.name}
            avatar={tile.googleData.photos[0].getUrl({ 'maxWidth': 35, 'maxHeight': 35 })}
            subtitle={tile.description}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText>
          </CardText>
          <CardMedia
            inlineStyle={styles.cardz}
            expandable={true}
            overlay={<CardTitle title={tile.placeData} subtitle={tile.googleData.name} />}
          >
            <img src={tile.googleData.photos[1].getUrl({ 'maxWidth': 200, 'maxHeight': 160 })} />
          </CardMedia>
          <CardTitle title={tile.placeData} subtitle={tile.googleData.formatted_address} expandable={true} />
          <CardText expandable={true} style={styles.cardtext}>
              <ul>
                  <li>{tile.description}</li>
                  <li>{'Special Directions:   '+tile.directions}</li>
                  <li>{'Perks:   '+tile.perks}</li>
                  <li>{'Quirks:   '+tile.quirks}</li>
                  <br />
                    <li>{'Google Rating: '+tile.googleData.rating}</li>
                    <br />
                      <li>{'Has Wifi:   '+tile.hasWifi}</li>
                      <li>{'Has Food:   '+tile.hasFood}</li>
                      <li>{'Has Outlets:   '+tile.hasOutlets}</li>
                      <li>{'Has Table Space:   '+tile.hasTableSpace}</li>
                      <li>{'Has Caffiene:   '+tile.hasCaffeine}</li>
                      <li>{'has Outdoor Seating:   '+tile.hasOutdoorSpace}</li>
                      <li>{'is Accessible:   '+tile.isAccessible}</li>
                      <li>{'is Quiet:   '+tile.isQuiet}</li>

              </ul>

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
        workspaceCache: state.workspaceCache
    }
};

const Container = connect(mapStateToProps)(Cardz);

export default Container;
