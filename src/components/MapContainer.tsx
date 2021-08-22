import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { ReactElement } from "react";

interface PropsMap {
    polyLineArray: ReactElement[]
}

function Map(props: PropsMap) {    
    return (
        <MapContainer zoomControl={false} scrollWheelZoom={true} center={[47.596350,-122.205360]} zoom={17}>
            <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
            />
            {props.polyLineArray}
        </MapContainer>
    )
}

export default Map