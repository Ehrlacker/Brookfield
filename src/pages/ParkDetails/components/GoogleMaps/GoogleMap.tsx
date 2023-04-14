import { GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api"
import "./GoogleMaps.css"

type Lat = {
  lat: number
}

type Lng = {
  lng: number
}

interface MapProps {
  center: Lat & Lng
  zoom: number
  position: Lat & Lng
}

const GoogleMaps = ({ center, zoom, position }: MapProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_googleApi_Key}`,
  })



 
  if (!isLoaded) return <div>Loading...</div>
  return (
    <GoogleMap
      mapContainerClassName="GoogleMapSize"
      zoom={zoom}
      center={center}
    >
      <MarkerF position={position} />
    </GoogleMap>
    
   
  )
  
}

export default GoogleMaps




