import React, { useState, useContext } from "react";
import {
  UserLatContext,
  UserLngContext,
} from "../components/contexts/ContextFile";

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function MapContainer(props) {
  const { userLat } = useContext(UserLatContext);
  const { userLng } = useContext(UserLngContext);
 
  const url = "https//localhost:3001.com/requests/";

  let navigate = useNavigate();
const currentUserLocation = {
  lat: userLat,
  lng: userLng
}
console.log(currentUserLocation);

  const style = {
    width: '100%',
  }
  const containerStyle = {
    width: '100%',
    height: '100%',
  }
  return (
    <>
        <div className="page-main-ctn">
        <Map
        google={props.google}
        zoom={14}
        style={style}
        containerStyle={containerStyle}
        initialCenter={currentUserLocation}  >

          <Marker onClick={props.onMarkerClick}
                  name={currentUserLocation} />

          <InfoWindow onClose={props.onInfoWindowClose}>
              <div>
                <h1>{props.selectedPlace}</h1>
              </div>
          </InfoWindow>
        </Map>
      </div>
    </>
  );
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDHD3derKpZn7Oi2zfnlqERA3Hke8SBm1M')
})(MapContainer)
