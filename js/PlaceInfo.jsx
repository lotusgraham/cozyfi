import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../redux/actions/workspace.js';
import store from '../redux/store.js';

import AddButton from './AddButton';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import update from 'react-addons-update';
import Divider from 'material-ui/Divider';



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
           <ul >
                    <li className="lists">{this.props.workspace.description}</li>
                    <li className="lists">{this.props.workspace.directions}</li>
                    <li className="lists">{this.props.workspace.perks}</li>
                    <li className="lists">{this.props.workspace.quirks}</li>
                  </ul>
              <div className="checkboxes"></div>
             </Card>}</div>
        );
    }
};



const mapStateToProps = (state, props) => {
  console.log(state);
  var index = state.clicker || 0
  console.log(state.clicker);

  var workspace = state.workspaceCache[index] || {}
    return {
        workspace: workspace,
        googleData: workspace.googleData || {}
    }
};

const Container = connect(mapStateToProps)(PlaceInfo);

export default Container;
