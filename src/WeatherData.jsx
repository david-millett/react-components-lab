const WeatherData = (props) => {
    const { weatherForecast } = props
    return (
        <>
            <p><span>conditions: </span>{weatherForecast.conditions}</p>
            <p><span>time: </span>{weatherForecast.time}</p>
        </>
    )
}

export default WeatherData