import WeatherIcon from './WeatherIcon'
import './WeatherForecast.css'
import WeatherData from './WeatherData'

const WeatherForecast = (props) => {
    const { weatherForecast } = props
    return (
        <div className='weather'>
            <h2>{weatherForecast.day}</h2>
            <WeatherIcon weatherForecast={weatherForecast} />
            <WeatherData weatherForecast={weatherForecast} />            
        </div>
    )
}

export default WeatherForecast