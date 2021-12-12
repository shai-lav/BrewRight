//rendering the map to the page
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: 25.612677,
            lng: 85.158875
        }
    });

    // create label with string for the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // create an array which contains objects where the coffee shops located.
    const locations = [{
            lat: 25.5874,
            lng: 85.0922
        },
        {
            lat: 25.5907,
            lng: 85.1100
        },
        {
            lat: 25.6097,
            lng: 85.1345
        },
        {
            lat: 25.616825,
            lng: 85.113336
        },
        {
            lat: 25.6179,
            lng: 85.1677
        },
        {
            lat: 25.6225,
            lng: 85.0403
        },
        {
            lat: 25.643941,
            lng: 85.100401
        },
    ];

    // create a new marker 
    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });

    // add a marker clusterer
    new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}