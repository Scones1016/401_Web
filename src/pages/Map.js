import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Geocoder from 'react-native-geocoding';  


const containerStyle = {
  width: '380px',
  height: '380px',
};

const center = {
  lat: 34.05,
  lng: -118.24
};


function MyComponent(props) {

  console.log("BEGIN GOOGLE MAPS");
  console.log(props.locations);

  Geocoder.init("AIzaSyAD2rcXfEubUVEW7MUaEr9T1SXwY2hpL6U");

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAD2rcXfEubUVEW7MUaEr9T1SXwY2hpL6U"
  })

  const [map, setMap] = React.useState(null)
  
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const renderMap = (locations) => {

    return <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers. */ 

        locations.map(loc => {
          return (
            <Marker
              position={{ lat: loc.lat, lng: loc.lng }}
              label={{ text: loc.text, color: "#2294b3" }}
            />
          );
        })

      }
      <></>
    </GoogleMap>
  }

  return isLoaded ? renderMap(props.locations) : null
}

export default React.memo(MyComponent)