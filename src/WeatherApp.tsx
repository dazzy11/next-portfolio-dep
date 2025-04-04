import { useState, FormEvent } from 'react'
import axios from 'axios'
import { FaSearch, FaThermometerHalf, FaTint, FaWind } from 'react-icons/fa'

interface WeatherData {
  location: {
    name: string
    country: string
    localtime: string
  }
  current: {
    temp_c: number
    condition: {
      text: string
      icon: string
    }
    feelslike_c: number
    humidity: number
    wind_kph: number
  }
}

const WeatherApp = () => {
  const [city, setCity] = useState<string>('')
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const API_KEY = import.meta.env.VITE_API_KEY // Replace with your WeatherAPI key

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
    if (!city.trim()) return

    setIsLoading(true)
    setErrorMessage('')

    try {
      const response = await axios.get<WeatherData>(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      )
      setWeatherData(response.data)
    } catch (error) {
      setErrorMessage('Failed to fetch weather data. Please try again.')
      setWeatherData(null)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Weather Finder
        </h1>

        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 flex items-center gap-2"
          >
            <FaSearch /> Search
          </button>
        </form>

        {isLoading && <p className="text-center text-gray-600">Loading...</p>}

        {errorMessage && (
          <p className="text-center text-red-500">{errorMessage}</p>
        )}

        {weatherData && (
          <div className="weather-info">
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {weatherData.location.name}, {weatherData.location.country}
              </h2>
              <p className="text-gray-600 text-sm">
                {weatherData.location.localtime}
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 mb-6">
              <img
                src={weatherData.current.condition.icon}
                alt="Weather icon"
                className="w-16 h-16"
              />
              <div>
                <p className="text-4xl font-bold text-gray-800">
                  {weatherData.current.temp_c}°C
                </p>
                <p className="text-gray-600">
                  {weatherData.current.condition.text}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 p-3 rounded-lg">
                <FaThermometerHalf className="mx-auto text-blue-500 mb-2" />
                <p className="text-sm text-gray-600">Feels like</p>
                <p className="font-semibold">
                  {weatherData.current.feelslike_c}°C
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <FaTint className="mx-auto text-blue-500 mb-2" />
                <p className="text-sm text-gray-600">Humidity</p>
                <p className="font-semibold">
                  {weatherData.current.humidity}%
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <FaWind className="mx-auto text-blue-500 mb-2" />
                <p className="text-sm text-gray-600">Wind</p>
                <p className="font-semibold">
                  {weatherData.current.wind_kph} km/h
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default WeatherApp