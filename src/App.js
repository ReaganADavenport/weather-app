import React from 'react'

import './App.css';



const api = {
  key: "37e14b00d41cff6e913152e3d1e91c53",
  base: "https://api.openweathermap.org/data/3.0"
}


function App() {

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
            className='search-bar'
            placeholder='Search...'
          />
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