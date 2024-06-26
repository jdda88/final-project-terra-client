// import React, { useEffect } from 'react';

// function Map() {
//   useEffect(() => {
//     const initialize = () => {
//       const mapOptions = {
//         zoom: 8,
//         center: new window.google.maps.LatLng(-34.397, 150.644),
//         mapTypeId: window.google.maps.MapTypeId.ROADMAP
//       };
//       const map = new window.google.maps.Map(document.getElementById('map_canvas'), mapOptions);
//     };

//     // Load Google Maps API and initialize the map
//     const script = document.createElement('script');
//     script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false';
//     script.onload = initialize;
//     document.head.appendChild(script);
//   }, []);

//   return (
//     <div id="map_canvas" style={{ height: '100vh' }}></div>
//   );
// }

// export default Map;