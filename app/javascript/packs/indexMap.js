function initMap() {
    const taipeiPosition = {lat: 25.03750, lng: 121.56250}
    const initialCenter = new google.maps.LatLng(taipeiPosition.lat, taipeiPosition.lng);

    const map = new google.maps.Map(document.getElementById("map"), {
      center: initialCenter,
      zoom: 12,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_CENTER,
      },
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER,
      },
      scaleControl: true,
      streetViewControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP,
      },
      fullscreenControl: true,
    });

    gon.spots.forEach(spot => {
      const marker = new google.maps.Marker({
        position: { lat: +spot.latitude, lng: +spot.longitude },
        map,
        //icon: SVGPortIcon,
        title: spot.name,
        zIndex: 10
      })
    })
}
  
window.initMap = initMap;