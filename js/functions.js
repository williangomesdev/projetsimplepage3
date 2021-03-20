window.onload = () => {
    //função para iniciar mapa
    var map;

    initialize = () => {
        var mapProp = {
            center: new google.maps.LatLng(-27.609959, -48.576585),
            scrollWhell: false,
            zoom: 12,
            MapTypeId: google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("map"), mapProp);
    }

    initialize();
}