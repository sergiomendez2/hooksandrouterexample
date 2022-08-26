import './App.css';
import React,{useState, useEffect} from 'react';
import RouterExample from "./components/RouterExample";


function useCoordanates() {
    const [coordanates, setCoordanates] = useState({lat: 0, lng: 0});
    useEffect(() => {

        let geoId = window.navigator.geolocation.watchPosition(position => {
            setCoordanates({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        });
        return () => {
            navigator.geolocation.clearWatch(geoId);
        }
    });
    return coordanates;
}



function App() {
    const coordanates = useCoordanates();
  return  coordanates.lat ===0 ? <div>still getting your location</div> :(
      <>
       <h1>your location</h1>
         <h1>Latitude: {coordanates.lat}</h1>
          <h1>Longitude: {coordanates.lng}</h1>
          <hr />
          <RouterExample />
      </>

  );
}

export default App;
