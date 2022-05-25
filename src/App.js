import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

import './App.css';


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
  

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month}, ${year}`
  }

  return(
    <div className={
      (typeof weather !== "undefined") ? 
        ((weather.current.temp_f > 75) ? 
          'App-hot':'App') 
        : 'App'}>
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
        {(typeof weather !== "undefined") ? (
           <div>
           <div className='location-box'>
             <div className='location'>{weather.location.name}, {weather.location.country}</div>
             <div className='date'>{dateBuilder(new Date())}</div>
           </div>
           <div className='weather-box'>
             <div className='temp'>{weather.current.temp_f}˚F</div>
             <div className='weather'>{weather.current.condition.text}</div>
           </div>
         </div>
        ) : (<div></div>)}
      </main>
    </div>
)
}

export default App;