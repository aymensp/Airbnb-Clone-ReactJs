import ReactMapGL from 'react-map-gl';
import * as React from 'react';
import { env } from '../next.config';


function Map() {
    const [viewport, setViewport] = React.useState({
        latitude: 37.7577,
        longitude: -122.4376,
        width: '100%',
        height: '100%',
        zoom: 10
    });
    return (
        <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/aymannn/cksvwaswi6hrh18quzvq91k8q"
            mapboxApiAccessToken={process.env.mapbox_key}
            onViewportChange={(viewport) => setViewport(viewport)}
        />
    )
}

export default Map
