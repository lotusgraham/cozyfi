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

// let center = (lat, lng) => {
//     this.lat = lat;
//     this.lng = lng;
// }


const success = (lat, lng) => {
    mapCenter.lat= lat;
    mapCenter.lng = lng;
    // return update(mapCenter, {
    //     lat: {$set: lat},
    //     lng: {$set: lng}
    // })
}

const fail = () => {
    alert("Please refresh the page and accept the prompt to allow us to use your current location with the application.");
}

const setUserLocation = () => {
    if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                success(position.coords.latitude, position.coords.longitude);
                console.log(position.coords.latitude, position.coords.longitude);
                console.log('==============');
                var userCenter = 5;
            }
        )
        console.log('derp', userCenter);
    }
    return userCenter;
}



let mapCenter = {
    lat: 36.002453,
    lng: -78.9058,
}

// console.log(userCenter);

export default class FormMap extends React.Component {
  constructor() {
      super();
      //BINDS THIS TO EACH FUNCTION
      this.handleBoundsChanged = this.handleBoundsChanged.bind(this);
      this.handlePlacesChanged = this.handlePlacesChanged.bind(this);
    //   this.initMap = this.initMap.bind(this);

    //   setUserLocation();
      console.log('uno',mapCenter);
    let userCenter = mapCenter;

      this.state = {
          bounds: null,
          center: mapCenter,
          markers: []
      }
      console.log(this.state);
  }



  handleBoundsChanged() {
    this.setState({
      bounds: this.refs.map.getBounds(),
      center: this.refs.map.getCenter(),
    });
    console.log('dos', mapCenter);
  }


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
    this.setState({
      center: mapCenter,
      markers
    });
    this.props.dispatch(actions.setCurrentPlace(place));

  }
componentWillMount() {
          console.log(setUserLocation());
          console.log(navigator.geolocation.getCurrentPosition(function(position) {
              console.log(position.coords.latitude, position.coords.longitude);
              console.log('==============');
              return 5;
          }));
}




  render() {
    return (
      <GoogleMap
        center={this.state.center}
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
                  place='ChIJLcOqFtbarIkRnyH30OdQzUg'
                  key={index} />
        ))}
        <Marker place='ChIJLcOqFtbarIkRnyH30OdQzUg'></Marker>
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
