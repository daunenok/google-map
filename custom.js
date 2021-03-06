$(document).ready(function() {
	$("form").on("submit", function(event) {
		lat = $("#lat").val();
		long = $("#long").val();
		message = $("#mess").val();

		markerPos = new google.maps.LatLng(lat, long);
		marker = new google.maps.Marker({
			position: markerPos,
			animation: google.maps.Animation.DROP,
			icon: "marker.png"
		});
  		marker.setMap(map);
  		map.setCenter(markerPos);

  		infowindow = new google.maps.InfoWindow({
    		content: message
  		});
  		google.maps.event.addListener(marker, 'click', function() {
  			infowindow.open(map,marker);
  		});

		event.preventDefault();
	});
});

function myMap() {
	elem = document.getElementById("map");
	stylesMap = new google.maps.StyledMapType([
    	{
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#0079ff"
            },
            {
                "saturation": "70"
            },
            {
                "lightness": "0"
            }
        ]
	    },
	    {
	        "featureType": "all",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "administrative",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "administrative.country",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "saturation": "2"
	            }
	        ]
	    },
	    {
	        "featureType": "administrative.country",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "administrative.locality",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "administrative.land_parcel",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape.man_made",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape.natural",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape.natural.landcover",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            },
	            {
	                "saturation": "100"
	            },
	            {
	                "lightness": "100"
	            },
	            {
	                "gamma": "6.53"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "labels.text",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.attraction",
	        "elementType": "labels.text",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.attraction",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "color": "#000000"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.business",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "color": "#000000"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.government",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.government",
	        "elementType": "labels.text",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.government",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "color": "#000000"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.government",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.medical",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "color": "#000000"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.park",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "color": "#000000"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.place_of_worship",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "color": "#050404"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.school",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.school",
	        "elementType": "labels.text",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.school",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "color": "#000000"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.school",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.sports_complex",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.sports_complex",
	        "elementType": "labels.text",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.sports_complex",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "color": "#000000"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.sports_complex",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "transit.station",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "transit.station.airport",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "transit.station.bus",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "hue": "#00c3ff"
	            },
	            {
	                "saturation": "0"
	            },
	            {
	                "lightness": "0"
	            }
	        ]
	    }
	]);
	mapProp= {
	    center:new google.maps.LatLng(0, 0),
	    zoom:3
	};
	map=new google.maps.Map(elem,mapProp);
	map.mapTypes.set('styled_map', stylesMap);
	map.setMapTypeId('styled_map');
}