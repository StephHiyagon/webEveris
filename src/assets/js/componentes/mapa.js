let map;
function initMap(item) {

  buscame(item);
    const uluru = {lat: -12, lng: -77};
       map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 8,
        center: uluru
      });
}

function buscame(item) {
console.log(item.stores[0]);
  function success(pos) {
    var crd = pos.coords;
    state.lat = crd.latitude;
    state.log = crd.longitude;
    const marker = new google.maps.Marker({
      position: {lat:item.stores[0].latitud , lng: item.stores[0].longitud },
      map: map
    });

    map.setZoom(18);
    map.setCenter({lat:item.stores[0].latitud , lng: item.stores[0].longitud });
    const marker1 = new google.maps.Marker({
      position: {lat:crd.latitude , lng: crd.longitude },
      map: map
    });
  };

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  navigator.geolocation.getCurrentPosition(success, error);
}
