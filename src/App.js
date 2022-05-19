import React, { useState } from 'react'

import './App.css';


const api = {
  key: "d5b6f7817e359e9e2ba28dae84ba4e6e",
  base: "https://api.openweathermap.org/data/2.5"
}


function App() {

  const [lat, long, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.button === "Enter"){
      fetch(`${api.base}weather?lat=${lat}&lon=${long}&units=imperial&appid=${api.key}`)
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

    return `${day} ${date} ${month} ${year}`
  }

  return(
    <div className="App">
      <main>
        <div className='search-box'>
          <input
            type="text"
            className='search-bar1'
            placeholder='Latitude...'
            onChange={e => setQuery(e.target.value)}
            value={lat}
          />
          <input
            type="text"
            className='search-bar2'
            placeholder='Longitude...'
            onChange={f => setQuery(f.target.value)}
            value={long}
          />
          <button className='Button' onClick={search}>Enter</button>
        </div>
        <div className='location-box'>
          <div className='location'>
            Atlanta, US
          </div>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
        <div className='weather-box'>
          <div className='temp'>
            80˚f
          </div>
          <div className='weather'>Sunny</div>
        </div>
      </main>
    </div>
)
}

export default App;