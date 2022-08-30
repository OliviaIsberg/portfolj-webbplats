import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "../../css/map.css";

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBLljf2f9SiQSf_LnF-JqBnlBUFf8Lq9ic",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <MapRender />;
}

function MapRender() {
  const center = useMemo(
    () => ({ lat: 57.709885785113364, lng: 11.994543536474401 }),
    []
  );

  return (
    <GoogleMap zoom={18} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  );
}

export default Map;
