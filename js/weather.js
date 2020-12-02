function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.getElementById("forecast").style.display="block";
    //Set default location if one isn't provided
    let location = "Ann Arbor";
    if (document.querySelector("#location").value != ""){
        location = document.querySelector("#location").value;
    }


    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format = "imperial";
    if (document.querySelector("input[name = temp]:checked")){
        format = document.querySelector("input[name = temp]:checked").value
    }

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&units="+format+"&appid=8005204f5fd82cd95f16b09014d66d57";
    // Your code here.  
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc = document.querySelector("#loc");
    let temp = document.querySelector("#temp");
    let tempImg = document.querySelector("#tempImg");
    let desc = document.querySelector("#desc")
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        loc.innerHTML = json["name"]
        temp.innerHTML = json["main"]["temp"]
        desc.innerHTML = json["weather"]["0"]["description"]
        tempImg.src = "https://openweathermap.org/img/wn/"+json["weather"]["0"]["icon"]+".png"
        tempImg.alt = desc.innerHTML
        console.log(json)
    });
}
