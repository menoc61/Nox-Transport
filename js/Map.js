//javascript.js
//center the map on user cameroon long and lat
var myLatLng = { lat: 3.861770, lng: 11.518750 };
//set map options
var mapOptions = {
    center: myLatLng,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP

};

    //create map
    var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
        var places = new google.maps.places.Autocomplete(
      document.getElementById("searchTextField")
    );

    // The marker, positioned at user position
    const marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "user",
     // icon: "../assets/favicon.png"
    });
    //add other markers
    //setMarkers(map);

//create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

//create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

//bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);


//Fetch true distance from the distance
function fetch_distance_value(string_value){
    
    var distance = "";
    for(var i=0; string_value[i] != ' '; i++)
        distance += string_value[i];
    
    return parseFloat(distance);
}

// calculate the prize of the kilometer
function cost(miles){
    
    var cp = miles *200;
    
    return cp;
}



//define calcRoute function
function calcRoute() {
    //create request
    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }

    //pass the request to the route method
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

            //Get distance and time
            const output = document.querySelector('#output');
            var distance = result.routes[0].legs[0].distance.text;
            
            //Fetching the exact value of the distance
            distance = fetch_distance_value(distance) * 1.6;

            output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("from").value + 
            ".<br />To: " + document.getElementById("to").value + 
            ".<br /> Driving distance <i class='fa fa-road'></i> : " + Math.ceil(distance) + 
            " Km.<br/>Cost : " + cost(Math.ceil(distance)) + 
            "Fcfa .<br/>Duration <i class='fa fa-hourglass-start'></i> : " + result.routes[0].legs[0].duration.text + 
            ".</div>";
            //display route
            directionsDisplay.setDirections(result);
        } else {
            //delete route from map
            directionsDisplay.setDirections({ routes: [] });
            //center map in London
            map.setCenter(myLatLng);

            //show error message
            output.innerHTML = "<div class='alert-danger'><i class='fa fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
        }
    });

}

//create autocomplete objects for all inputs
var options = {
    types: ['(cities)']
}

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);


