import { useState } from 'react'
import WeatherHeader from './components/WeatherHeader.jsx'
import WeatherMain from './components/WeatherMain.jsx'
import WeatherFooter from './components/WeatherFooter.jsx'
import { useWeather } from './hooks/useWeather.js'
import './App.css'

function App() {

  const [hasSearched, setHasSearched] = useState(false)
  const [searchCity, setSearchCity] = useState('')
  const { weatherData, loading, error } = useWeather(searchCity)

  const handleSearch = (city) => {
    setSearchCity(city)
    setHasSearched(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <WeatherHeader onSearch={handleSearch} />
      <WeatherMain
        weatherData={weatherData}
        loading={loading}
        error={error}
        hasSearched={hasSearched}
      />
      <WeatherFooter />
    </div>
  )
}

export default App