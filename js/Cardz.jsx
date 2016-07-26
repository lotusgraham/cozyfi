import React, { Component } from "react";
import {connect} from 'react-redux';

import * as actions from '../redux/actions/workspace.js';
import store from '../redux/store.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import update from 'react-addons-update';

const styles = {
    cardz: {
        maxHeight: 500
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
            subtitle={tile.description}
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
          <CardTitle title={tile.placeData} subtitle="Card subtitle" expandable={true} />
          <CardText expandable={true}>
              <ul>
                  <li>{tile.description}</li>
                  <li>{tile.directions}</li>
                  <li>{tile.perks}</li>
                  <li>{tile.quirks}</li>
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
        state: state
    }
};

const Container = connect(mapStateToProps)(Cardz);

export default Container;
