var x=document.getElementById("demo");
function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
    else{
        x.innerHTML="Geolocation is not supported by this browser.";
    }
}

function showPosition(position){
  let  lat=position.coords.latitude;
  let  lon=position.coords.longitude;
    displayLocation(lat,lon);
}

function showError(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            x.innerHTML="User denied the request for Geolocation."
        break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML="Location information is unavailable."
        break;
        case error.TIMEOUT:
            x.innerHTML="The request to get user location timed out."
        break;
        case error.UNKNOWN_ERROR:
            x.innerHTML="An unknown error occurred."
        break;
    }
}
//inisialise geocode script
function initialize() {
  geocoder = new google.maps.Geocoder();
}
let places, input, address, city;
  google.maps.event.addDomListener(window, "load", function () {
    var places = new google.maps.places.Autocomplete(
      document.getElementById("searchTextField")
    );
    google.maps.event.addListener(places, "place_changed", function () {
      var place = places.getPlace();
      console.log(place)
      var address = place.formatted_address;
      var latitude = place.geometry.location.lat();
      var longitude = place.geometry.location.lng();
      var latlng = new google.maps.LatLng(latitude, longitude);
      var geocoder = (geocoder = new google.maps.Geocoder());
      geocoder.geocode({ latLng: latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            var address = results[0].formatted_address;
            var pin =
              results[0].address_components[
                results[0].address_components.length - 1
              ].long_name;
            var country =
              results[0].address_components[
                results[0].address_components.length - 2
              ].long_name;
            var state =
              results[0].address_components[
                results[0].address_components.length - 3
              ].long_name;
            var city =
              results[0].address_components[
                results[0].address_components.length - 4
              ].long_name;
              console.log(country)
              console.log(state)
              console.log(city)
              console.log(place.address_components[1],place.address_components[2])
             let row = `
             <tr id="country">
        <td>${country}</td>
        <td>${state}</td>
         <td>${city}</td>
         <td>${place}</td>
      </tr>
    
            
             `
             $("#body").append(row)
          }
        }
      });
    });
  });