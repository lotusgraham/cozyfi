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
      this.initMap = this.initMap.bind(this);

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

  initMap() {
    //  var map = new google.maps.Map( {
    //    center: this.state.center,
    //    zoom: 15
    //  });

     var infowindow = new google.maps.InfoWindow();
     var service = new google.maps.places.PlacesService(mapCenter);

     service.getDetails({
         //need to find out how to get grab placeId from marker
       placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
     }, function(place, status) {
       if (status === google.maps.places.PlacesServiceStatus.OK) {
         var marker = new google.maps.Marker({
           map: mapCenter,
           position: place.geometry.location
         });
         google.maps.event.addListener(marker, 'click', function() {
           infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
             'Place ID: ' + place.place_id + '<br>' +
             place.formatted_address + '</div>');
           infowindow.open(mapCenter, this);
         });
       }
     });
   }
  render() {
    return (
      <GoogleMap
        center={this.state.center}
        containerProps={{
          style: {
            height: '750px',
            width: '500',
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
