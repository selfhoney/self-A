

// maruoka
function maruoka_initialize() {
  const maruoka_myLatlng = new google.maps.LatLng(36.151790, 136.264306),
  mapOptions = {
    zoom: 15,
    center: maruoka_myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  const maruoka_map = new google.maps.Map(document.getElementById('js-maruoka'), mapOptions),
  contentString = 'Some address here..',
  infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 500
  });
 
  const marker = new google.maps.Marker({
    position: maruoka_myLatlng,
    map: maruoka_map
  });
 
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(maruoka_map,marker);
  });
 
  google.maps.event.addDomListener(window, "resize", function() {
    var center = maruoka_map.getCenter();
    google.maps.event.trigger(maruoka_map, "resize");
    maruoka_map.setCenter(center);
  });
}
 
google.maps.event.addDomListener(window, 'load', maruoka_initialize);



// rumiale
function rumiale_initialize() {
  const rumiale_myLatlng = new google.maps.LatLng(34.710400, 135.622793),
  mapOptions = {
    zoom: 15,
    center: rumiale_myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  const rumiale_map = new google.maps.Map(document.getElementById('js-rumiale'), mapOptions),
  contentString = 'Some address here..',
  infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 500
  });
 
  const marker = new google.maps.Marker({
    position: rumiale_myLatlng,
    map: rumiale_map
  });
 
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(rumiale_map,marker);
  });
 
  google.maps.event.addDomListener(window, "resize", function() {
    var center = rumiale_map.getCenter();
    google.maps.event.trigger(rumiale_map, "resize");
    rumiale_map.setCenter(center);
  });
}
 
google.maps.event.addDomListener(window, 'load', rumiale_initialize);



// reve
function reve_initialize() {
  const reve_myLatlng = new google.maps.LatLng(34.736871, 135.584318),
  mapOptions = {
    zoom: 15,
    center: reve_myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  const reve_map = new google.maps.Map(document.getElementById('js-reve'), mapOptions),
  contentString = 'Some address here..',
  infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 500
  });
 
  const marker = new google.maps.Marker({
    position: reve_myLatlng,
    map: reve_map
  });
 
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(reve_map,marker);
  });
 
  google.maps.event.addDomListener(window, "resize", function() {
    var center = reve_map.getCenter();
    google.maps.event.trigger(reve_map, "resize");
    reve_map.setCenter(center);
  });
}
 
google.maps.event.addDomListener(window, 'load', reve_initialize);
