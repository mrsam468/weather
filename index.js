let weather = {
    apikey    :"c357478e01d646558ef205232252705",
    fetchWeather:function(city){
        fetch("http://api.weatherapi.com/v1//current.json?key=" + this.apikey + "&q=" + city)
            .then((response )=> (response.json()))
            .then(data =>this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data.location;
        const {temp_c } = data.current;
        // const {condition} = data.current;
        const{humidity} = data.current;
        const {wind_kph}=data.current;
        const {icon} =data.current.condition;
        const {text} = data.current.condition;
        console.log(name, temp_c, humidity,wind_kph,icon,text);
        document.querySelector("#cityname").innerText = "Weather in " + name;
        document.querySelector("#temperature").innerText = temp_c +"C";
        document.querySelector("#description").innerText = text;
        document.querySelector("#humidity").innerText = "Humidity:"+humidity+"%";
        document.querySelector("#windspeed").innerText = "wind speed:"+wind_kph+"km/h";
        document.querySelector(".image").src = icon;
        
    },
search: function(){
     this.fetchWeather(document.querySelector(".city").value)}
}
document.querySelector("#searchbutton").addEventListener("click", function(){
    weather.search();
})
document.querySelector(".city").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
        document.querySelector(".city").value=""
    }
})
weather.fetchWeather("abuja");