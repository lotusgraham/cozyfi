import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../redux/actions/workspace.js';
import store from '../redux/store.js';

import {Card, CardHeader} from 'material-ui/Card';
import update from 'react-addons-update';



class PlaceInfo extends React.Component {
  constructor(props) {
     super(props);
 };

 render() {
        return (
            <div className="zoneinfo">{<Card>
             <CardHeader
              title={this.props.workspace.googleData}
              subtitle={this.props.workspace.description}
             />
              <CardText expandable={true}>
                  <ul>
                    <li>{tile.description}</li>
                    <li>{tile.directions}</li>
                    <li>{tile.perks}</li>
                    <li>{tile.quirks}</li>
                  </ul>
              </CardText>
             </Card>}</div>
        );
    }
};



const mapStateToProps = (state, props) => {
    return {
        workspace: state.workspaceCache[0] || {}
    }
};

const Container = connect(mapStateToProps)(PlaceInfo);

export default Container;
