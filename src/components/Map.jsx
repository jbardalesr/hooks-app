import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const mapStyle = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = { lat: data.lat, lng: data.lng };
  return (
    <LoadScript googleMapsApiKey="AIzaSyBmvDUTc90G0jJzMXN-GUauAsUDkICOYv0">
      <GoogleMap mapContainerStyle={mapStyle} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter}></Marker>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
