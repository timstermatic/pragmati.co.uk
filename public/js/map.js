function initialize() {

    var mapCanvas = document.getElementById('map');

    var us = new google.maps.LatLng(51.1280, -2.9930);

    var  styles=  [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}];

    var mapOptions = {
        center: us,
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: 0,
        zoomControl: 0,
        mapTypeControl: 0,
        scaleControl: 0,
        streetViewControl:0,
        overviewMapControl: 0,
        scrollwheel: false,
        styles: styles
    }

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: us,
        map: map,
        title: 'Hello World!',
        icon: '/img/map-icon.png'
    });



   google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(us);
    $('#map').height($(window).height()-$('#header').height()+40);
   });

}
google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){
  $('.bxslider').bxSlider( { minSlides: 2, maxSlides: 2, inifiniteScroll: true});

  $('#map').height($(window).height()-$('#header').height()+40);
});
