 const apiKey = "d0eb3e4114eb746514de8c390159d5af";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon");
const body = document.body;


 

 async function checkWeather(city) {
    

         const response = await fetch(apiUrl + city + `&appid=${apiKey}&units=metric`);


         if(response.status == 404){
            document.querySelector(".error").style.display = "block";
             body.style.backgroundColor = "red";
            document.querySelector(".weather").style.display = "none";
         }else{
            const data = await response.json();



         console.log('Weather data:', data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed; + "Km/h"
        
         if(data.weather[0].main =="Clouds"){
            WeatherIcon.src = "clouds.jpeg";
         }
         else if(data.weather[0].main =="Clear"){
            WeatherIcon.src = "clear.jpeg";
         }
         else if(data.weather[0].main =="Rain"){
            WeatherIcon.src = "rain.jpeg";
         }
         else if(data.weather[0].main =="Drizzle"){
            WeatherIcon.src = "drizzle.jpeg";
         }
         else if(data.weather[0].main =="Mist"){
            WeatherIcon.src = "mist.jpeg";
         }
         document.querySelector(".weather").style.display = "block";
         document.querySelector(".error").style.display = "none";
         body.style.backgroundColor = "#222";



    }

         }
 
     
    searchBtn.addEventListener("click",()=>{
      if(searchBox.value == ""){
         alert("Please enter a city name !")
      }
      else{
         checkWeather(searchBox.value);
      }
     })
    