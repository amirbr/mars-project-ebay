import React, { useEffect, useState } from 'react'
import axios from "axios"
import WeatherBox from './components/WeatherBox'
import Pagination from "../../components/Pagination";
import './style.css'

const MARS_WEATHER_API = 'https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0'
const ITEMS_PER_PAGE = 10

const MarsWeather = () => {
  const [marsWeather, setMarsWeather] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState('')

  useEffect(() => {
    axios.get(MARS_WEATHER_API).then(response => {
      setMarsWeather(response.data)
    })
  },[])

  const handleChange = (event) => {
    console.log(sortBy, 'sortBy')
    setSortBy(event.target.value)
  }

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const sortBySelectedItem = () => {
    return Object.keys(marsWeather).sort().reduce(function (result, key) {
      // to implement
      return result;
    }, {});
  }

  const moreThenOnePage = () => Math.ceil(Object.keys(setMarsWeather).length / ITEMS_PER_PAGE) > 1

  return (
    <div className='container-mars-weather'>
      <div>
        <label>
          Sort By:
          <select value={sortBy} onChange={handleChange}>
            <option value="temperature">Temperature</option>
            <option value="wind">Wind</option>
          </select>
        </label>
        <h1>Mars Weather</h1>
      </div>

      <div className='mars-weather'>
        {Object.keys(marsWeather).length > 0 && marsWeather.sol_keys.map(solKey => (
          <WeatherBox
            key={solKey}
            dataPoint={solKey}
            temperature={marsWeather[solKey]['AT'].av}
            wind={marsWeather[solKey]['HWS'].av}
            pressure={marsWeather[solKey]['PRE'].av}
            firstUTC={marsWeather[solKey].First_UTC}
            lastUTC={marsWeather[solKey].Last_UTC}
          />
        ))}
      </div>
      {moreThenOnePage() && (
        <Pagination
          currentPage={currentPage}
          itemAmount={Object.keys(setMarsWeather).length}
          onPageChange={onPageChange}
        />
      )}
    </div>
  )
}

export default MarsWeather
