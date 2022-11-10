import { FC, useState } from "react"
import RMap from 'react-map-gl';

const Map: FC = () => {

  const [viewState, setViewState] = useState({
    latitude: 37.7557,
    longitude: -122.4376,
    zoom: 11,
  })  

  return (
    <RMap
      style={{height: '75vh'}}
      mapStyle="mapbox://styles/pamanberuang/clab747yz000416qo1ahh94k4"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      attributionControl={false}
    >

    </RMap>
  )
}

export default Map