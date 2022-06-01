import React, { useState } from 'react'

import './App.css';

import cloudy from './Assets/cloudy.png';
import partly from './Assets/partly-cloudy.png';
import rain from './Assets/rainy.png';
import snowy from './Assets/snowy.png';
import stormy from './Assets/stormy.png';
import sunny from './Assets/sunny.png';


const api = {
  key: "68bbe789f0044e9f8e2173410222405",
  base: "https://api.weatherapi.com/v1/current.json?"
}


function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter"){
      fetch(`${api.base}key=${api.key}&q=${query}&aqi=yes`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
      }
  }

  const icons = [partly, sunny, rain, cloudy, snowy, stormy];

  const getIcon = (weather) => {
    switch(weather){
      case "Partly cloudy":
        return icons[0]
        break;
      case "Sunny":
        return icons[1]
        break;
      case "Clear":
        return icons[1]
        break;
      case "Light rain":
        return icons[2]
        break;
      case "Moderate rain":
        return icons[2]
        break;
      case "Heavy rain":
        return icons[2]
          break;
      case "Light rain shower":
        return icons[2]
        break;
      case "Overcast":
        return icons[3]
        break;
      case "Snow":
        return icons[4]
        break;
      case "Moderate or heavy rain with thunder":
        return icons[5]
        break;
      default:
        return icons[0]
    }
  }
  

  const dateBuilder = (d) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day}, ${date} ${month}, ${year}`
  }

  return(
    <div className={
      (typeof weather.current !== "undefined") ? ((weather.current.temp_f > 75) ? 'App-hot':'App') : 'App-mild'}>
      <main>
        <div className='search-box'>
          <input
            type="text"
            className='search-bar'
            placeholder='Search...'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.current !== "undefined") ? (
           <div>
           <div className='location-box'>
             <div className='location'>{weather.location.name}, {weather.location.country}</div>
             <div className='date'>{dateBuilder(new Date())}</div>
           </div>
           <div className='weather-box'>
             <div className='temp'>{weather.current.temp_f}˚F</div>
             <div className='weather'>{weather.current.condition.text}</div>
             <div className='weather-icon'>
               <img className='icon' src={getIcon(weather.current.condition.text)}></img>
               </div>
           </div>
         </div>
        ) : (<div></div>)}
      </main>
    </div>
)
}

export default App;