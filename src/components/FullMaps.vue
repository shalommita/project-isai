<template>
    <div id="mapContainer"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import MapboxGeocoder from 'mapbox-gl-geocoder';

export default {
    name: "BaseMap",
    data() {
        return {
            accessToken: "pk.eyJ1IjoibnVlbHZzIiwiYSI6ImNsYjJhYjhwZzAyc3kzb3MwY2phbHpmbXcifQ.dgj4J7DNpOHg9k7kGBuGdw",
        };
    },
    mounted() {
        mapboxgl.accessToken = this.accessToken;
        var map = new mapboxgl.Map({
            container: "mapContainer",
            style: "mapbox://styles/nuelvs/cl8wk0xfn000v14qsukkzdajj",
            center: [110.69480464649932, -7.610613442012233],
            zoom: 8,
            bearing: 360.0,
        });
        map.addControl(new mapboxgl.NavigationControl(), "top-right");
        map.addControl(new MapboxGeocoder({ accessToken: mapboxgl.accessToken, mapboxgl: mapboxgl }), "top-left");
        map.on('style.load', () => {
            map.setFog({});
        });
        map.on('load', () => {
            map.addSource('sample', {
                type: 'geojson',
                data: 'https://ikmf43bh4s7vcjzgos6gm32bwy0hnjgp.lambda-url.us-east-1.on.aws/'
            });
            map.addLayer({
                'id': 'sample-layer',
                'type': 'circle',
                'source': 'sample',
                'paint': {
                    'circle-radius': 5,
                    'circle-stroke-width': 2,
                    'circle-color': 'red',
                    'circle-stroke-color': 'white'
                }
            });
            map.addLayer({
                'id': 'sample-label',
                'type': 'symbol',
                source: 'sample'
            })
            map.on('click', 'sample-layer', (e) => {
                const geometry = e.features[0].geometry;
                const properties = e.features[0].properties;
                if (geometry.type === 'Point') {
                    const coordinates = geometry.coordinates.slice();
                    const lokasi = properties.location;
                    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                    }
                    new mapboxgl.Popup()
                        .setLngLat(coordinates)
                        .setHTML("<h4>Informasi Lokasi</h4>" +
							"<table>"+
								"<tr>"+
									"<td>Nama </td>"+
									"<td> : " + e.features[0].properties.titik_sample +"</td>"+
								"</tr>"+
								"<tr>"+
									"<td>Lokasi </td>"+
									"<td> : " + lokasi +"</td>"+
								"</tr>"+
								"<tr>"+
									"<td>Komoditas </td>"+
									"<td> : " + e.features[0].properties.comodity +"</td>"+
								"</tr>"+
								"<tr>"+
									"<td>Karbon Tanah </td>"+
									"<td> : " + e.features[0].properties.karbon_tanah +"</td>"+
								"</tr>"+
								"<tr>"+
									"<td>Karbon Tanaman </td>"+
									"<td> : " + e.features[0].properties.karbon_tanaman +"</td>"+
								"</tr>"+
								"<tr>"+
									"<td>Tanggal </td>"+
									"<td> : " + e.features[0].properties.date_pretty +"</td>"+
								"</tr>"+
                                "<tr>"+
									"<td>Citra NIR</td>"+
									"<td> : <img src="+e.features[0].properties.NIR_url+"></td>"+
								"</tr>"+
							"</table>" +
                            "<a href='/visual_page/"+e.features[0].properties.titik_sample+"'>Lihat grafik -></a>"
                        )
                        .addTo(map);
                }
                map.on('mouseenter', 'sample-layer', () => {
                    map.getCanvas().style.cursor = 'pointer';
                });
                // Change it back to a pointer when it leaves.
                map.on('mouseleave', 'sample-layer', () => {
                    map.getCanvas().style.cursor = '';
                })
            });
        })
    },
};
</script>

<style lang="scss">
#mapContainer {
    width: 100%;
    height: 80%;
}
</style>
