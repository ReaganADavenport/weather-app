import React from 'react'

import './App.css';



const api = {
  key: "37e14b00d41cff6e913152e3d1e91c53",
  base: "https://api.openweathermap.org/data/3.0"
}


function App() {
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
      </main>
    </div>
)
}

export default App;