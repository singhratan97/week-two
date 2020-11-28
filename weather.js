//Generate an API key with given link below
//https://openweathermap.org/guide
//Print the current weather data in console- By city name, By city ID, By lat lang
//API key was generated in the above website - ba97c584a3a3fc9c8e8a9298baad92d4


//BY CITY NAME - California

//Creating a request variable 
var request = new XMLHttpRequest();

//Open the request
request.open('GET' , 'https://api.openweathermap.org/data/2.5/weather?q=California&APPID=ba97c584a3a3fc9c8e8a9298baad92d4', true);

//Send the request
request.send();

//Load the response
request.onload = function (){
    var byCityName = JSON.parse(this.response);
    console.log(byCityName);
}


//BY CITY ID - 3530

//Creating a request variable 
var request = new XMLHttpRequest();

//Open the request
request.open('GET' , 'https://api.openweathermap.org/data/2.5/weather?id=3530&appid=ba97c584a3a3fc9c8e8a9298baad92d4', true);

//Send the request
request.send();

//Load the response
request.onload = function (){
    var byCityID = JSON.parse(this.response);
    console.log(byCityID);
}


//BY GEOGRAPHICAL LOCATION (Lat and Long) - 13 and 80

//Creating a request variable 
var request = new XMLHttpRequest();

//Open the request
request.open('GET' , 'https://api.openweathermap.org/data/2.5/weather?lat=13&lon=80&appid=ba97c584a3a3fc9c8e8a9298baad92d4', true);

//Send the request
request.send();

//Load the response
request.onload = function (){
    var byCityID = JSON.parse(this.response);
    console.log(byCityID);
}
