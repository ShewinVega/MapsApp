/* eslint-disable */
import { MutationTree } from 'vuex';
import { MapState } from './state';
import mapboxgl from 'mapbox-gl';
import { Feature } from '@/interfaces/places';

const mutation: MutationTree<MapState> = {
    setMap(state: MapState, map: mapboxgl.Map) {
        state.map = map;
    },

    setDistanceDuration(state, {distance,duration}:{distance: number,duration: number}) {
        let kms = distance / 1000;
        kms = Math.round(kms * 100);
        kms /= 100;
        console.log(kms);

        state.distance = kms;
        state.duration = Math.floor(duration / 60);

    },

    setPlaceMarkers(state, places: Feature[]) {
        // remove markers
        state.markers.forEach(marker => marker.remove());
        state.markers = [];

        // Create new Markers
        for (const place of places) {
            const [lng, lat] = place.center;

            // Create Popup 
            const popup = new mapboxgl.Popup()
                .setLngLat( [lng, lat] )
                .setHTML(`
                    <h4>${place.text}</h4>
                    <p>${place.place_name}</p>
                `);

            // create Market
            const customMarker = new mapboxgl.Marker()
                .setLngLat( [lng, lat] )
                .setPopup(popup)
                .addTo(state.map!);

            state.markers.push(customMarker);
        }

        // Clear Polylines
        if(state.map?.getLayer('RouteString')) {
            state.map.removeLayer('RouteString');
            state.map.removeSource('RouteString');
            state.distance = undefined;
            state.duration = undefined;
        }

    },

    setRoutePolyline(state, coords: number[][]) {

        const start = coords[0];
        const end = coords[coords.length - 1];

        // Definir los bounds
        const bounds = new mapboxgl.LngLatBounds(
            [start[0],start[1]],
            [start[0],start[1]],
        );
        
        // Agregamos cada punto al bounds
        for (const coord of coords) {
            const newCoord: [number,number] = [coord[0],coord[1]];
            bounds.extend(newCoord);
        }

        state.map?.fitBounds(bounds, {
            padding: 300,
        });

        // Graficar la polyline
        const sourceData: mapboxgl.AnySourceData = {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: coords,
                        },
                    }
                ]
            },
        };

        if(state.map?.getLayer('RouteString')) {
            state.map.removeLayer('RouteString');
            state.map.removeSource('RouteString');
        }
        state.map?.addSource('RouteString', sourceData);

        state.map?.addLayer({
            id: 'RouteString',
            type: 'line',
            source: 'RouteString',
            layout: {
                'line-cap': 'round',
                'line-join': 'round',

            },
            paint: {
                'line-color': 'black',
                'line-width': 3,
            },
        });

    }
}


export default mutation;