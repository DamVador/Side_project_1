function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: -28.643387, lng: 153.612224 },
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

    // spots.forEach(port => {
    //   const marker = new google.maps.Marker({
    //     position: { lat: +port.latitude, lng: +port.longitude },
    //     map,
    //     icon: SVGPortIcon,
    //     title: port.name,
    //     label: port.slug,
    //     zIndex: 10
    //   })
}
  
  window.initMap = initMap;