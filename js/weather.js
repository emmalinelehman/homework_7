function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.querySelector('#forecast').style.display = "block";

    //Set default location if one isn't provided
    let location = "Ann Arbor";

    // Your code here.
    if (document.querySelector("#location").value){
        location = document.querySelector("#location").value
    }
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format = "imperial";

    // Your code here.
    if (document.getElementById("fahrenheit").checked){
        format = "imperial";
    }
    if (document.getElementById("celcius").checked){
        format = "metric";
    }
    console.log("Format is " + format);


    //set the query  
    let query = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=" + format + "&appid=" + "771063bb4fde1ba86309dc7699d22dac";
    // Your code here.  
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(json);


        loc= json['name'];
        temp= json['main']['temp'];
        tempImg= json["weather"][0]["icon"]
        des = json["weather"][0]["description"]



        document.querySelector("#loc").innerHTML = loc;
        document.querySelector("#temp").innerHTML = temp + " with " + des;
        document.querySelector("#tempImg").src =  'http://openweathermap.org/img/wn/' + tempImg + '.png';
        document.querySelector("#tempImg").alt =  des;
    

    });
}
