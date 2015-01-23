// geolocation
navigator.geolocation.getCurrentPosition(function(position) {
    // Get the positioning coordinates.
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    console.log("lat: "+ lat + " long: " + lon);
    // Do something interesting...
    var pos = document.getElementById('latlong');
    // pos.innerHTML = pos.innerHTML + " lat: "+ lat + " long: " + lon;
    ioSocket.emit('location', {type: 'location',
                               message: ' lat: '+ lat + ' long: ' + lon});
});
