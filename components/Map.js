import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as React from 'react';
import getCenter from 'geolib/es/getCenter';


function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = React.useState({});

    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }))

    const center = getCenter(coordinates)
    const [viewport, setViewport] = React.useState({
        latitude: center.latitude,
        longitude: center.longitude,
        width: '100%',
        height: '100%',
        zoom: 11
    });

    return (
        <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/aymannn/cksvwaswi6hrh18quzvq91k8q"
            mapboxApiAccessToken={process.env.mapbox_key}
            onViewportChange={(viewport) => setViewport(viewport)}
        >
            {searchResults.map((result) =>
            (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetTop={-10}
                        offsetLeft={-20}
                    >
                        <p
                            role="img"
                            aria-label='push-pin'
                            onClick={() => setSelectedLocation(result)}
                            className='cursor-pointer text-2xl animate-bounce'>
                            📌
                        </p>

                    </Marker>
                    {selectedLocation.long == result.long ? (
                        <Popup
                            className='z-50'
                            closeOnClick={true}
                            onClose={() => setSelectedLocation({})}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            {result.title}
                        </Popup>

                    ) : (false)}
                </div>
            ))}

        </ReactMapGL>
    )
}

export default Map
