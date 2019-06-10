function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3 ,
    center: {
      lat: 46.619261,
      lng: -33.134766
    }
  });

  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var locations = [
    {lat: 53.350140, lng: -6.266155},
    {lat: 53.353584, lng: -6.251495},
    {lat: 53.350140, lng: -6.266155},
  ];
  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });

  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
