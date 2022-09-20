import Map, {Marker,FullscreenControl,ScaleControl,NavigationControl,Popup} from 'react-map-gl';
import React, { useState } from "react"; 
import getCenter  from 'geolib/es/getCenter';

import "mapbox-gl/dist/mapbox-gl.css"; 

function ReactMap({searchResaults}) {
    const [selectedLocation,setSelectedLocation]= useState({})
    console.log(selectedLocation)
    const coordinate = searchResaults.map((result) =>({
      longitude:result.long,
      latitude:result.lat
    }))
  const center = getCenter(coordinate)
  const[viewport, setViewport] = useState({
    with:'100%',
    height:"100%",
    latitude:center.latitude,
    longitude:-center.longitude,
    zoom:11,
})
  return (
  <Map
    mapStyle="mapbox://styles/nejc000l/cl89fffk100dp14p4zcr8154o"
    mapboxAccessToken ={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
    {...viewport}
    onMove={evt => setViewport(evt.viewport)}
    >
    {searchResaults.map((result)=>(
      <div className="z-100" key={result.long}>
        <Marker
        longitude={result.long}
        latitude={result.lat}
        offsetLeft={-20}
        offsetTop={-10}
        >
        
        <p role="img" onClick={()=>setSelectedLocation(result)} className="text-2xl cursor-pointer animate-bounce">
            ⭐
        </p>

        </Marker>
        {selectedLocation.long === result.long ? (
          	<Popup 
            onClose={()=>setSelectedLocation({})}
            closeOnClick={false}
            latitude={result.lat}
            longitude={result.long}
            >
              {result.title}
            </Popup>
        ):(true)}
      </div>
    ))}
    <FullscreenControl />
    <NavigationControl />
    <ScaleControl />
    </Map>
    
    
    );
}

export default ReactMap