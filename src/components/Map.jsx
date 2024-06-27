import { useState, useEffect, React } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useNavigate } from "react-router-dom";
import PlanList from "../pages/PlanList";
import PlanDetailsCard from "./PlanDetailsCard";
// import { getDestinations } from './api';
// import { Marker } from "react-simple-maps";

function MapComponent() {
  const [center, setCenter] = useState({ lat: 40.7128, lng: -74.0060 });
  const [mapLoaded, setMapLoaded] = useState(false); // Track map loading
  const navigate = useNavigate();

  const markers = [
    { id: 'destinationIdHere', lat: 40.7128, lng: -74.0060, title: 'Destination Example'},
  ];

  useEffect(() => {
    // Simulate a delay for loading (replace with your actual map loading logic)
    setTimeout(() => {
      setMapLoaded(true);
    }, 2000); // 2 seconds delay
  }, []);
  

  return (
    <div>
      <div className="app">
        {mapLoaded ? (
      <LoadScript googleMapsApiKey="AIzaSyBP88BUsPdlJa6jR8cwUiUi_lr0ZGqjiPM">
        <GoogleMap
          mapContainerStyle={{ height: '500px', width: '70vw' }}
          center={center}
          zoom={3}
        >
          {markers.map((marker) => (
            <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => navigate(`/plan/${planId}`)}
            />
          ))}
        </GoogleMap>
      </LoadScript>
        ) : (
          <div className="loading-indicator">Loading Map...</div> 
        )}
        console.log("loading map")
        
    </div> 
    </div>
  )
}
export default MapComponent;
