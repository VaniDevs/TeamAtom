mapkit.init({
  authorizationCallback: function(done) {
        done('eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlNITVJQRFRHNjUifQ.eyJpc3MiOiJBOE1QUEs5UTRDIiwiaWF0IjoxNTM3NjUwMzAwLCJleHAiOjE1NDAzMjg3MDB9.DRJR7P1GStJiY7I-yNB_QHF2zGPek6E74iQaFh6uStrAmy9uxGKT1X0hZ2hWqGGPu5xBvad7FfVNq99vesNCtg');
    },
  language: "en"
})

var vancouver = new mapkit.CoordinateRegion(
  new mapkit.Coordinate(49.2327, -123.0207),
  new mapkit.CoordinateSpan(0.14647972, 0.184985255)
)

var map = new mapkit.Map("map", {
  showsUserLocation: false,
  showsUserLocationControl: false
})

map.region = vancouver
