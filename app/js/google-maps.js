// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 50.456262, lng: 30.612874};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map, icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'});
}