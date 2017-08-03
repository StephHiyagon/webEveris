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
console.log(item);
  function success(pos) {
    var crd = pos.coords;
    state.lat = crd.latitude;
    state.log = crd.longitude;
    const marker = new google.maps.Marker({
      position: {lat:crd.latitude , lng: crd.longitude},
      map: map
    });

    map.setZoom(18);
    map.setCenter({lat:crd.latitude , lng: crd.longitude});
    //
    // console.log(pos);
    // console.log('Your current position is:');
    // console.log('Latitude : ' + crd.latitude);
    // console.log('Longitude: ' + state.log);
    // console.log('More or less ' + crd.accuracy + ' meters.');


    // const store = new google.maps.Marker({
    //
    //   console.log(item.stores[0].latitud);
    //   // position: {lat:item.stores[0].latitud , lng: item.stores[0].longitud },
    //   map: map
    // });

  };



  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  navigator.geolocation.getCurrentPosition(success, error);
}
