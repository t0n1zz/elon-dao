import { FC, useMemo, useState } from "react"
import {render} from 'react-dom';
import RMap, { 
  Marker,
  Popup,
  NavigationControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';

import CITIES from '../components/map/exampleData.json'
import Pin from '../components/map/pin'

export default function App()  {
  const [popupInfo, setPopupInfo] = useState({
    city: '',
    population: '',
    image: '',
    state: '',
    latitude: 0,
    longitude: 0
  });
  const [viewState, setViewState] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 3.5,
    bearing: 0,
    pitch: 0
  })  

  const pins = useMemo(
    () =>
      CITIES.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );

  return (
    <RMap
      style={{height: '75vh'}}
      mapStyle="mapbox://styles/pamanberuang/clab747yz000416qo1ahh94k4"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
    >
      <GeolocateControl position="top-left" />
      <NavigationControl position="top-left" />
      <ScaleControl />
      {pins}
      {popupInfo && (
        <Popup
          anchor="top"
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          onClose={() => setPopupInfo({
            city: '',
            population: '',
            image: '',
            state: '',
            latitude: 0,
            longitude: 0
          })}
        >
          <div>
            {popupInfo.city}, {popupInfo.state}
          </div>
        </Popup>
      )}
    </RMap>
  )
}

export function renderToDom(container : any) {
  render(<App />, container);
}