import React, { Component } from "react";
import {connect} from 'react-redux';

import * as actions from '../redux/actions/workspace.js';
import store from '../redux/store.js';

import { GoogleMap, GoogleMapLoader, Marker, SearchBox } from "react-google-maps";

import update from 'react-addons-update';

const searchStyles = {
    border: '1px solid transparent',
    borderRadius: '1px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
    boxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    fontSize: '14px',
    height: '50px',
    marginTop: '313px',
    marginLeft: '-80px',
    outline: 'none',
    padding: '0 12px',
    textOverflow: 'ellipses',
    width: '350px',
}

let ralDur = {
    lat: 36.002453,
    lng: -78.9058,
}

export default class FormMap extends React.Component {
  constructor() {
      super();
      //BINDS THIS TO EACH FUNCTION
      this.handleBoundsChanged = this.handleBoundsChanged.bind(this);
      this.handlePlacesChanged = this.handlePlacesChanged.bind(this);
      this.componentWillMount = this.componentWillMount.bind(this);

  }


  handleBoundsChanged() {}


  handlePlacesChanged() {
    const places = this.refs.searchBox.getPlaces();
    const placeId = places[0].place_id;
    const place = {
        placeId: places[0].place_id,
            lat: places[0].geometry.location.lat(),
            lng: places[0].geometry.location.lng()
        };
    const markers = [];

    // Add a marker for each place returned from search bar
    places.forEach(function (place) {
      markers.push({
        position: place.geometry.location,
      });
    });

    // Set markers; set map center to first search result
    const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;
    this.state = {
      center: mapCenter,
      markers
    };
    this.props.dispatch(actions.setCurrentPlace(place));

  }
  componentWillMount() {
      this.props.dispatch(actions.getUserLoc());

      this.state = {
          bounds: null,
          center: ralDur, //Set initial center to hard-coded Raleigh coordinates
          markers: []
      }
  }


  render() {
    return (
      <GoogleMap
        center={this.props.state.userLoc}
        containerProps={{
          style: {
            height: '400px',
            width: '450px',
          },
        }}
        defaultZoom={15}
        onBoundsChanged={this.handleBoundsChanged}
        ref="map"
      >
        <SearchBox
          bounds={this.state.bounds}
          controlPosition={google.maps.ControlPosition.TOP_LEFT}
          onPlacesChanged={this.handlePlacesChanged}
          ref="searchBox"
          placeholder="Enter the title of a Cozy-Coworking Space"
          style={searchStyles}
        />
        {this.state.markers.map((marker, index) => (
          <Marker position={marker.position}
                  key={index} />
        ))}
      </GoogleMap>
    );
  }
}

const mapStateToProps = (state, props) => {
    return {
        state: state
    }
}

const Container = connect(mapStateToProps)(FormMap);
export default Container;
