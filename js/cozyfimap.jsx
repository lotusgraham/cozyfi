import React, { Component } from "react";

import { GoogleMap, GoogleMapLoader, Marker, SearchBox } from "react-google-maps";

const searchStyles = {
    border: '1px solid transparent',
    borderRadius: '1px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
    boxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    fontSize: '14px',
    height: '32px',
    marginTop: '27px',
    outline: 'none',
    padding: '0 12px',
    textOverflow: 'ellipses',
    width: '400px',
}

const mapCenter = {
    lat: 36.002453,
    lng: -78.905869,
}

export default class CozyFiMap extends React.Component {
  constructor() {
      super();
      //BINDS THIS TO EACH FUNCTION
      this.handleBoundsChanged = this.handleBoundsChanged.bind(this);
      this.handlePlacesChanged = this.handlePlacesChanged.bind(this);

      this.state = {
          bounds: null,
          center: mapCenter,
          markers: []
      }
  }

  // let mapCenter = {
  //     lat: 36.002453,
  //     lng: -78.905869,
  // }

  handleBoundsChanged() {
    this.setState({
      bounds: this.refs.map.getBounds(),
      center: this.refs.map.getCenter(),
    });
  }

  handlePlacesChanged() {
    const places = this.refs.searchBox.getPlaces();
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
      markers,
    });
  }

  render() {
    return (
      <GoogleMap
        center={this.state.center}
        containerProps={{
          style: {
            height: '500px',
            width: '500px',
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
          placeholder="Customized your placeholder"
          style={searchStyles}
        />
        {this.state.markers.map((marker, index) => (
          <Marker position={marker.position} key={index} />
        ))}
      </GoogleMap>
    );
  }
}
