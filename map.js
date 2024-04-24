// These coordinates make sure you can't navigate outside of ukraine on the map.
var bounds = [
    [15, 40], // Southwest coordinates
    [50, 55]  // Northeast coordinates
];



//access token for the mapbox API
mapboxgl.accessToken = '';
var map = new mapboxgl.Map({
    center: [31.1656, 48.3794],
    zoom: 5.2,
    minZoom: 5.2,
    container: 'map',
    maxBounds: bounds,
    style: '' //YOUR MAP STYLE TOKEN
})



