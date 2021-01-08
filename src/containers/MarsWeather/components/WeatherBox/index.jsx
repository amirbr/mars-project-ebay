import './style.css'

const WeatherBox = ({ dataPoint, temperature, wind, pressure,  firstUTC, lastUTC }) => (
  <div className='weather-box'>
    <div><span>Data Point:</span> {dataPoint}</div>
    <div><span>Temperature[AVG]:</span> {temperature}</div>
    <div><span>Wind[AVG]:</span> {wind}</div>
    <div><span>Pressure[AVG]:</span> {pressure}</div>
    <div><span>First UTC:</span> {firstUTC}</div>
    <div><span>Last UTC:</span> {lastUTC}</div>
  </div>
)

export default WeatherBox
