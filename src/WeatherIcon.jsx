const WeatherIcon = (props) => {
    const { weatherForecast } = props
    return (
        <img src={weatherForecast.img} alt={weatherForecast.imgAlt} />
    )
}

export default WeatherIcon