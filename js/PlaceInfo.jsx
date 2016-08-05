import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../redux/actions/workspace.js';
import store from '../redux/store.js';

import {Card, CardHeader, CardText} from 'material-ui/Card';
import update from 'react-addons-update';



class PlaceInfo extends React.Component {
  constructor(props) {
     super(props);
 };

 render() {
        return (
            <div className="zoneinfo">{<Card>
             <CardHeader
              title={this.props.googleData.name}
              subtitle={this.props.googleData.formatted_address}
             />
              <CardText>
                  <ul>
                    <li>{this.props.workspace.description}</li>
                    <li>{this.props.workspace.directions}</li>
                    <li>{this.props.workspace.perks}</li>
                    <li>{this.props.workspace.quirks}</li>
                  </ul>
           </CardText>
             </Card>}</div>
        );
    }
};



const mapStateToProps = (state, props) => {
  var workspace = state.workspaceCache[0] || {}
    return {
        workspace: workspace,
        googleData: workspace.googleData || {}
    }
};

const Container = connect(mapStateToProps)(PlaceInfo);

export default Container;
