import { useState, useEffect } from 'react'

export function useWeather(city) {
    const [weatherData, setWeatherData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!city) return

        const fetchWeather = async () => {
            setLoading(true)
            setError(null)

            try {
                // Paso 1: Obtener coordenadas de la ciudadd
                const cityResponse = await fetch(
                    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=es&format=json`
                )
                
                if (!cityResponse.ok) {
                    throw new Error('Ciudad no encontrada')
                }
                
                const cityData = await cityResponse.json()
                
                if (!cityData.results || cityData.results.length === 0) {
                    throw new Error('Ciudad no encontrada')
                }
                
                const { latitude, longitude } = cityData.results[0]
                
                // Paso 2: Obtener datos del clima usando las coordenadas
                const weatherResponse = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=6`
                )
                
                if (!weatherResponse.ok) {
                    throw new Error('Error al obtener datos del clima')
                }
                
                const weatherData = await weatherResponse.json()
                
                setWeatherData({
                    current: weatherData.current,
                    daily: weatherData.daily,
                    cityName: cityData.results[0].name,
                    country: cityData.results[0].country
                })
                
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchWeather()
    }, [city])

    return { weatherData, loading, error }
}