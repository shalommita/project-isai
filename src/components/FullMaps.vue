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
            zoom: 6,
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
                    'circle-radius': 6,
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
                            "Nama : " + e.features[0].properties.titik_sample + "<br>" +
                            "Lokasi : " + lokasi + "<br>" +
                            "Longitude : " + coordinates[0] + "<br>" +
                            "Longitude : " + coordinates[1] + "<br>" +
                            "<table class = graph>" + 
                                "<caption>"+"Visualisasi Nilai Karbon Tahun 2022"+"</caption>"+
                                "<thead>"+
                                "<tr>"+
                                    "<th scope=col>"+"Periode"+"</th>"+
                                    "<th scope=col>"+"Nilai Karbon"+"</th>"+
                                "</tr>"+
                            "</thead>"+"<tbody>"+
                                "<tr style=height:20%>"+
                                    "<th scope=row>"+"Krbn tnh HST 1"+"</th>"+
                                    "<td>"+"<span>"+e.features[0].properties.karbon_tanah+"</span>"+"</td>"+
                                "</tr>"+
                                "<tr style=height:30%>"+
                                    "<th scope=row>"+"Krbn tnmn HST 1"+"</th>"+
                                    "<td>"+"<span>"+e.features[0].properties.karbon_tanaman+"</span>"+"</td>"+
                                "</tr>"+
                            "</tbody>"+
                        "</table>"
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
    height: 100%;
}

.mapboxgl-popup-content-wrapper {
    padding: 0px;
}

.graph {
	margin-bottom:1em;
    font:xx-small arial,helvetica,sans-serif;
}

.graph caption {
	font:bold small arial,helvetica,sans-serif;
	padding-bottom:0.33em;
}

.graph tbody th {
	text-align:right;
}

@supports (display:grid) {

	@media (min-width:32em) {

		.graph {
			display:block;
            width:200px;
            height:200px;
		}

		.graph caption {
			display:block;
		}

		.graph thead {
			display:none;
		}

		.graph tbody {
			position:relative;
			display:grid;
			grid-template-columns:repeat(auto-fit, minmax(2em, 1fr));
			column-gap:2.5%;
			align-items:end;
			height:50%;
			margin:3em 0 1em 2.8em;
			padding:0 1em;
			border-bottom:2px solid rgba(0,0,0,0.5);
			background:repeating-linear-gradient(
				180deg,
				rgba(170,170,170,0.7) 0,
				rgba(170,170,170,0.7) 1px,
				transparent 1px,
				transparent 20%
			);
		}

		.graph tbody:before,
		.graph tbody:after {
			position:absolute;
			left:-3.2em;
			width:2.8em;
			text-align:right;
			font:bold 80%/120% arial,helvetica,sans-serif;
		}

		.graph tr {
			position:relative;
			display:block;
		}

		.graph tr:hover {
			z-index:999;
		}

		.graph th,
		.graph td {
			display:block;
			text-align:center;
		}

		.graph tbody th {
			position:absolute;
			bottom:-5em;
			left:0;
			width:100%;
			font-weight:normal;
			text-align:center;
            white-space:nowrap;
			text-indent:0;
		}

		.graph tbody th:after {
			content:"";
		}

		.graph td {
			width:100%;
			height:100%;
			background:blue;
			border-radius:0.5em 0.5em 0 0;
			transition:background 0.5s;
		}

		.graph tr:hover td {
			opacity:0.7;
		}

		.graph td span {
			overflow:hidden;
			position:absolute;
			left:50%;
			top:50%;
			width:0;
			padding:0.5em 0;
			margin:-1em 0 0;
			font:normal 85%/120% arial,helvetica,sans-serif;
/* 			background:white; */
/* 			box-shadow:0 0 0.25em rgba(0,0,0,0.6); */
			font-weight:bold;
			opacity:0;
			transition:opacity 0.5s;
            color:white;
		}

		.toggleGraph:checked + table td span,
		.graph tr:hover td span {
			width:4em;
			margin-left:-2em; /* 1/2 the declared width */
			opacity:1;
		}



    


	} /* min-width:32em */

} /* grid only */

</style>
