import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../redux/actions/workspace.js';
import store from '../redux/store.js';

import {Card, CardHeader} from 'material-ui/Card';
import update from 'react-addons-update';



class PlaceInfo extends React.Component {
  constructor(props) {
     super(props);
     this.state = {tilesData: []};
 };

handleToggle(toggle, index, event) {
    var newState = update(this.state, {tilesData: {[index]: {expanded: {$set: toggle}}}})
    console.log(index)
    console.log(newState);
    this.setState(newState);
  };
 render() {
var comboinfo = this.props.workspaceCache.map((tile, index) => {
      console.log('strung: ', tile);
      return(
          <Card>
           <CardHeader
           onClick={this.handleToggle.bind(this, !tile.expanded, index)}
            title={tile.placeData}
            subtitle={tile.description}
            actAsExpander={true}
            showExpandableButton={true}
           />
           </Card>)
   })
        return (
            <div className="zoneinfo">{comboinfo}</div>
        );
    }
};



const mapStateToProps = (state, props) => {
    return {
        workspaceCache: state.workspaceCache
    }
};

const Container = connect(mapStateToProps)(PlaceInfo);

export default Container;
