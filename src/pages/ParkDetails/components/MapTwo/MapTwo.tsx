import { useState, useRef } from "react"
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerProps,
} from "@react-google-maps/api"
import "./MapTwo.css"

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

interface Result {
  name: string
  lat: number
  lng: number
}

const GoogleMaps = ({ center, zoom, position }: MapProps) => {
    const divRef = useRef<HTMLDivElement>(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_googleApi_Key}`,
  })

  const [results, setResults] = useState<Result[]>([])

  const handleMarkerClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const result: Result = {
        name: "New Result",
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      }
      setResults([...results, result])
      console.log(results)
      const divValue = divRef.current?.textContent;
    console.log(divValue)
    }
  }

  if (!isLoaded) return <div>Loading...</div>
  return (
    <GoogleMap
      mapContainerClassName="GoogleMapSize"
      zoom={zoom}
      center={center}
      onClick={handleMarkerClick}
    >
      <Marker position={position} />
      {results.map((result) => (
        <Marker key={`${result.lat}-${result.lng}`} position={result} />
      ))}
    </GoogleMap>
  )
}

export default GoogleMaps