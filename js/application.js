function myMap() {
  var location = new google.maps.LatLng(16.772817, 96.162150);

  var mapOptions = {
        center: location,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
   }
  var markerImage = 'img/marker.png';

	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: markerImage
  });
}

        