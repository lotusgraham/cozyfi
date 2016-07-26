import React, { Component } from "react";
import {connect} from 'react-redux';

import * as actions from '../redux/actions/workspace.js';
import store from '../redux/store.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import update from 'react-addons-update';

import CozyFiMap from './cozyfimap.jsx';
import Cardz from './Cardz';

import AddButton from './AddButton';

const imgUrl = 'http://thepurposeisprofit.com/wp-content/uploads/2014/07/Fiap-paulista-coworking.jpg'


const styles = {
    container: {
        flex: .3,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-end',
        height: 750,
        overflowY: 'auto',
        marginBottom: 24,
        color: 'white',
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize: "cover",
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    },
        cardz: {
            maxHeight: 500
        },
    cozyFiMap: {
        "border": `1px solid transparent`,
        "borderRadius": `1px`,
        "boxShadow": `0 2px 6px rgba(0, 0, 0, 0.3)`,
        "boxSizing": `border-box`,
        "MozBoxSizing": `border-box`,
        "fontSize": `14px`,
        "height": `32px`,
        "marginTop": `27px`,
        "outline": `none`,
        "padding": `0 12px`,
        "textOverflow": `ellipses`,
        "width": `400px`
    }

}

// toggle={this.props.state.tilesData[index].expanded}

const SinglePage = () => (
        <div className = "singlePage" style={styles.container}>
            <div className="cardz" style={styles.cardz}> <Cardz/> </div>
            <div><AddButton /></div>
            <div className="cozyFiMap" style={styles.cozyfiMap}> <CozyFiMap /> </div>
        </div>
);

export default SinglePage;
