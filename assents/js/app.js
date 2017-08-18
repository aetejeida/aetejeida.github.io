$(document).ready(function () {
    $('.parallax').parallax();
    $(".button-collapse").sideNav({
        menuWidth: 200
    });
});

function getLocalitation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(addposition);
    } else { 
        
    }
}

function addposition(position){

   var c =  document.getElementById("d");
   c.style.display = "block";
   c.href = "https://www.google.es/maps/dir/"+position.coords.latitude+","+position.coords.longitude+"/25.542054,-103.441809";
   c.target ="_blank";
}


function myScroll(value) {
    $("html, body").animate({ scrollTop: $('#' + value + '').offset().top }, 1000);

}

function myScrollmobile(value) {
    $("html, body").animate({ scrollTop: $('#' + value + '').offset().top }, 1000);
    $('.button-collapse').sideNav('hide');
}

function initMap() {
    var uluru = { lat: 25.542054, lng: -103.441809 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru,
        disableDefaultUI: true,
        scrollwheel: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: false,
        disableDoubleClickZoom: true,
        styles: [
  {
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#242f3e"
        }
      ]
  },
  {
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#746855"
        }
      ]
  },
  {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
            "color": "#242f3e"
        }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
            "visibility": "off"
        }
      ]
  },
  {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#d59563"
        }
      ]
  },
  {
      "featureType": "poi",
      "stylers": [
        {
            "visibility": "off"
        }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#d59563"
        }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#263c3f"
        }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#6b9a76"
        }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#38414e"
        }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
            "color": "#212a37"
        }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
            "visibility": "off"
        }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#9ca5b3"
        }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#746855"
        }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
            "color": "#1f2835"
        }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#f3d19c"
        }
      ]
  },
  {
      "featureType": "transit",
      "stylers": [
        {
            "visibility": "off"
        }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#2f3948"
        }
      ]
  },
  {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#d59563"
        }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
            "color": "#17263c"
        }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
            "color": "#515c6d"
        }
      ]
  },
  {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
            "color": "#17263c"
        }
      ]
  }
        ]
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

$(window).scroll(function () {
   if($(window).scrollTop() > 100){
        $("#navbar").removeClass('styleNavInit');
        $("#navbar").addClass('white');
        document.getElementById("title").style.display = "block";

   }
   else{
    $("#navbar").removeClass('white');
    $("#navbar").addClass('styleNavInit');
    document.getElementById("title").style.display = "none";
   }
});