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

// save index to the state
//set clicked on workspace to index, set that in the state as focused workspace
// in PlaceInfo instead of workspace[0] do state.focusedWorkspace

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
    var tiles = this.props.workspaceCache.map((tile, index) => {
      console.log('strung: ', tile);
      return(
      <Card
          onClick={this.handleToggle.bind(this, !tile.expanded, index)}
          expanded="{tile.expanded}"
          onExpandChange={this.handleExpandChange} updateCard={this.updateCard.bind(this)}>
          <CardHeader
            title={tile.googleData.name}
            subtitle={tile.description}
            avatar="{tile.avatar}"
            actAsExpander={true}
            showExpandableButton={true}
          />
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
