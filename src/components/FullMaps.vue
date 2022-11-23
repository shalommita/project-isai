<!-- <template>
    <MapboxMap style="height: 400px" access-token="pk.eyJ1IjoibnVlbHZzIiwiYSI6ImNsOHE0NjM5eDF3azczdXBpcmxsMGtxM2kifQ.hjATsxH1uRXxwzZbfo5CrA" map-style="mapbox://styles/nuelvs/cl8wk0xfn000v14qsukkzdajj" :center="[110.69480464649932, -7.610613442012233]" :zoom="17">
    
        <MapboxMarker :lng-lat="[110.69480464649932, -7.610613442012233]" :offset="[110.69480464649932, -7.610613442012233]"/>

    </MapboxMap>
</template>

<script setup>
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
</script> -->






<template>
    <div id="mapContainer"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
// import data from "../data/Titikkoordinatpoint_3.js"
// import autolinker from "autolinker";

export default {
    name: "BaseMap",
    data() {
        return {
            accessToken: "pk.eyJ1IjoibnVlbHZzIiwiYSI6ImNsOHE0NjM5eDF3azczdXBpcmxsMGtxM2kifQ.hjATsxH1uRXxwzZbfo5CrA",
        };
    },
    components: {
        // Mapboxmarker
    },

    mounted() {
        mapboxgl.accessToken = this.accessToken;

        var map = new mapboxgl.Map({
            container: "mapContainer",
            style: "mapbox://styles/nuelvs/cl8wk0xfn000v14qsukkzdajj",
            center: [110.69480464649932, -7.610613442012233],
            zoom: 17,
            bearing: 360.0,
        });
        map.addControl(new mapboxgl.NavigationControl(), "top-right");
        map.on('style.load', () => {
            map.setFog({});
        });
        map.on('load', () => {
            map.addSource('sample', {
                type: 'geojson',
                // data: '../data/Titikkoordinat.geojson'
                data: {
"type": "FeatureCollection",
"name": "Titikkoordinat",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "1", "Kode_Sampe": "KL-01", "CI": "0", "R": "178", "G": "172", "B": "156", "float_RI": "0.0171429" }, "geometry": { "type": "Point", "coordinates": [ 110.693156102776243, -7.610714335855231 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "2", "Kode_Sampe": "KL-02", "CI": "0", "R": "191", "G": "188", "B": "167", "float_RI": "0.00791557" }, "geometry": { "type": "Point", "coordinates": [ 110.693420000246093, -7.610225960401904 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "3", "Kode_Sampe": "KL-03", "CI": "0", "R": "187", "G": "186", "B": "173", "float_RI": "0.00268097" }, "geometry": { "type": "Point", "coordinates": [ 110.693689999670156, -7.610414959918835] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "4", "Kode_Sampe": "KL-04", "CI": "-1", "R": "176", "G": "178", "B": "154", "float_RI": "-0.00564972" }, "geometry": { "type": "Point", "coordinates": [ 110.693457000311582, -7.610761965171914 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "5", "Kode_Sampe": "KL-05", "CI": "-1", "R": "172", "G": "175", "B": "154", "float_RI": "-0.00864553" }, "geometry": { "type": "Point", "coordinates": [ 110.693636962419276, -7.610865325689994 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "6", "Kode_Sampe": "KL-06", "CI": "0", "R": "174", "G": "170", "B": "156", "float_RI": "0.0116279" }, "geometry": { "type": "Point", "coordinates": [ 110.693765999951466, -7.610508961148942 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "7", "Kode_Sampe": "KL-07", "CI": "0", "R": "174", "G": "172", "B": "151", "float_RI": "0.00578035" }, "geometry": { "type": "Point", "coordinates": [ 110.693985464783822, -7.610494358793781 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "8", "Kode_Sampe": "KL-08", "CI": "0", "R": "170", "G": "170", "B": "158", "float_RI": "0" }, "geometry": { "type": "Point", "coordinates": [ 110.693722999861819, -7.610976958888017 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "9", "Kode_Sampe": "KL-09", "CI": "0", "R": "174", "G": "173", "B": "158", "float_RI": "0.00288184" }, "geometry": { "type": "Point", "coordinates": [ 110.6938185213195, -7.611041389394057 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "10", "Kode_Sampe": "KL-10", "CI": "0", "R": "190", "G": "183", "B": "166", "float_RI": "0.0187668" }, "geometry": { "type": "Point", "coordinates": [ 110.694058000412539, -7.610630966218435 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "11", "Kode_Sampe": "KL-11", "CI": "-1", "R": "168", "G": "172", "B": "162", "float_RI": "-0.0117647" }, "geometry": { "type": "Point", "coordinates": [ 110.693865000402226, -7.611258965130784 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "12", "Kode_Sampe": "KL-12", "CI": "0", "R": "178", "G": "177", "B": "162", "float_RI": "0.0028169" }, "geometry": { "type": "Point", "coordinates": [ 110.694081883923644, -7.610854175857614 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "13", "Kode_Sampe": "KL-13", "CI": "0", "R": "184", "G": "183", "B": "167", "float_RI": "0.0027248" }, "geometry": { "type": "Point", "coordinates": [ 110.694179999756244, -7.610642965333802 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "14", "Kode_Sampe": "KL-14", "CI": "0", "R": "166", "G": "166", "B": "145", "float_RI": "0" }, "geometry": { "type": "Point", "coordinates": [ 110.694245000006191, -7.610752960383451 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "15", "Kode_Sampe": "KL-15", "CI": "-1", "R": "178", "G": "183", "B": "166", "float_RI": "-0.0138504" }, "geometry": { "type": "Point", "coordinates": [ 110.694148999824876, -7.610991958702423 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "16", "Kode_Sampe": "KL-16", "CI": "-1", "R": "181", "G": "189", "B": "164", "float_RI": "-0.0216216" }, "geometry": { "type": "Point", "coordinates": [ 110.693970000057632, -7.611310960972477 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "17", "Kode_Sampe": "KL-17", "CI": "-1", "R": "175", "G": "183", "B": "159", "float_RI": "-0.0223464" }, "geometry": { "type": "Point", "coordinates": [ 110.694108000403048, -7.611383965854446 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "18", "Kode_Sampe": "KL-18", "CI": "-1", "R": "164", "G": "173", "B": "143", "float_RI": "-0.0267062" }, "geometry": { "type": "Point", "coordinates": [ 110.694269999803538, -7.611033961329819 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "19", "Kode_Sampe": "KL-19", "CI": "-1", "R": "175", "G": "206", "B": "138", "float_RI": "-0.0813648" }, "geometry": { "type": "Point", "coordinates": [ 110.694365999710186, -7.610834962603639 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "20", "Kode_Sampe": "KL-20", "CI": "0", "R": "177", "G": "173", "B": "150", "float_RI": "0.0114286" }, "geometry": { "type": "Point", "coordinates": [ 110.694559000042503, -7.610513961884647 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "21", "Kode_Sampe": "KL-21", "CI": "0", "R": "171", "G": "167", "B": "157", "float_RI": "0.0118343" }, "geometry": { "type": "Point", "coordinates": [ 110.694266999989921, -7.611372960973386 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "22", "Kode_Sampe": "KL-22", "CI": "-1", "R": "175", "G": "176", "B": "164", "float_RI": "-0.002849" }, "geometry": { "type": "Point", "coordinates": [ 110.694411999713182, -7.61110996302676 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "23", "Kode_Sampe": "KL-23", "CI": "0", "R": "171", "G": "170", "B": "151", "float_RI": "0.00293255" }, "geometry": { "type": "Point", "coordinates": [ 110.694609999591052, -7.610672965101555 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "24", "Kode_Sampe": "KL-24", "CI": "0", "R": "178", "G": "171", "B": "157", "float_RI": "0.0200573" }, "geometry": { "type": "Point", "coordinates": [ 110.694709999894982, -7.610786964798656 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "25", "Kode_Sampe": "KL-25", "CI": "0", "R": "182", "G": "180", "B": "158", "float_RI": "0.00552486" }, "geometry": { "type": "Point", "coordinates": [ 110.6945253994935, -7.610919890790656 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "26", "Kode_Sampe": "KL-26", "CI": "0", "R": "167", "G": "159", "B": "145", "float_RI": "0.0245399" }, "geometry": { "type": "Point", "coordinates": [ 110.694787186606817, -7.610434614243839 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "27", "Kode_Sampe": "KL-27", "CI": "-1", "R": "168", "G": "170", "B": "140", "float_RI": "-0.00591716" }, "geometry": { "type": "Point", "coordinates": [ 110.694403016231519, -7.610304543787532 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "28", "Kode_Sampe": "KL-28", "CI": "0", "R": "155", "G": "151", "B": "138", "float_RI": "0.0130719" }, "geometry": { "type": "Point", "coordinates": [ 110.694272423296241, -7.610266583914258 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "29", "Kode_Sampe": "KL-29", "CI": "0", "R": "167", "G": "165", "B": "143", "float_RI": "0.0060241" }, "geometry": { "type": "Point", "coordinates": [ 110.694014049235221, -7.610170196649338 ] } },
{ "type": "Feature", "properties": { "Name": "", "description": "", "No": "30", "Kode_Sampe": "KL-30", "CI": "0", "R": "186", "G": "177", "B": "161", "float_RI": "0.0247934" }, "geometry": { "type": "Point", "coordinates": [ 110.693870000321738, -7.610119965460583 ] } }
]
}

            });
            map.addLayer({
                'id': 'sample-layer',
                'type': 'circle',
                'source': 'sample',
                'paint': {
                    'circle-radius': 4,
                    'circle-stroke-width': 2,
                    'circle-color': 'red',
                    'circle-stroke-color': 'white'
                }
            });
            map.on('click', 'sample-layer', (e) => {
                const geometry = e.features[0].geometry;
                const properties = e.features[0].properties;
                if (geometry.type === 'Point'){
                    const coordinates = geometry.coordinates.slice();
                    const kode = properties.Kode_Sampe;
                    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML("<p>"+kode+"</p>")
                    .addTo(map);
                }
                map.on('mouseenter', 'sample-layer', () => {
                    map.getCanvas().style.cursor = 'pointer';
                });
                    
                    // Change it back to a pointer when it leaves.
                map.on('mouseleave', 'sample-layer', () => {
                    map.getCanvas().style.cursor = '';
                });
            });
            // map.addLayer({
            //     'id': 'sample-layer',
            //     'type': 'circle',
            //     'source': 'sample',
            //     'paint': {
            //         'circle-radius': 4,
            //         'circle-stroke-width': 2,
            //         'circle-color': 'red',
            //         'circle-stroke-color': 'white'
            //     }
            // })
        })
        // new mapboxgl.Marker({
        //     color: "blue",
        // })
        // .setLngLat([110.69480464649932, -7.610613442012233])
        // .setPopup(new mapboxgl.Popup().setHTML(
        //     "<table>\
        //         <tr>\
        //             <td colspan='2'>Hello World!</td>\
        //         </tr>\
        //     </table>"
        // ))
        // .addTo(map);
    },
};
</script>

<style lang="scss">
#mapContainer {
    width: 800px;
    height: 480px;
}
.mapboxgl-popup-content-wrapper{
    padding: 0px;
}
</style>





<!-- <template>
    <MglMap id="mapContainer" :accessToken="accessToken" :mapStyle="mapStyle" :center="coordinates">
    </MglMap>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap,  } from "vue-mapbox";

export default {
    components: {
        MglMap,
    },
    data() {
        return {
            accessToken: "pk.eyJ1IjoibnVlbHZzIiwiYSI6ImNsOHE0NjM5eDF3azczdXBpcmxsMGtxM2kifQ.hjATsxH1uRXxwzZbfo5CrA", // your access token. Needed if you using Mapbox maps
            mapStyle: "mapbox://styles/nuelvs/cl8wk0xfn000v14qsukkzdajj", // your map style
            coordinates: [110.69480464649932, -7.610613442012233],
        };
    },
    created(){
        this.Mapbox = Mapbox;
    }
};
</script> -->