window.onload = () => {
    //função para iniciar mapa
    var map;

    initialize = () => {
        var mapProp = {
            center: new google.maps.LatLng(-27.609959, -48.576585),
            scrollwhell: false,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        }

        map = new google.maps.Map(document.getElementById("map"), mapProp);
    }

    initialize();
}