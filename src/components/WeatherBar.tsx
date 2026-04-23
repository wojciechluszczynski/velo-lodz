import { useEffect, useState } from 'react'

interface Weather {
  temp: number
  desc: string
  icon: string
  wind: number
  good: boolean
}

const LODZ_LAT = 51.759
const LODZ_LON = 19.457

function weatherIcon(icon: string) {
  const id = icon.replace('n', 'd')
  return `https://openweathermap.org/img/wn/${id}.png`
}

function isGoodForCycling(temp: number, wind: number, desc: string): boolean {
  if (temp < 5 || temp > 38) return false
  if (wind > 10) return false
  if (desc.includes('rain') || desc.includes('snow') || desc.includes('storm') || desc.includes('thunder')) return false
  return true
}

export function WeatherBar() {
  const [weather, setWeather] = useState<Weather | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const key = import.meta.env.VITE_OWM_KEY
    if (!key) {
      // mock data when no API key
      setWeather({ temp: 18, desc: 'clear sky', icon: '01d', wind: 3.2, good: true })
      return
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${LODZ_LAT}&lon=${LODZ_LON}&appid=${key}&units=metric&lang=pl`
    )
      .then(r => r.json())
      .then(d => {
        const temp = Math.round(d.main?.temp ?? 0)
        const wind = Math.round(d.wind?.speed ?? 0)
        const desc = d.weather?.[0]?.description ?? ''
        const icon = d.weather?.[0]?.icon ?? '01d'
        setWeather({ temp, desc, icon, wind, good: isGoodForCycling(temp, wind, d.weather?.[0]?.main ?? '') })
      })
      .catch(() => setError(true))
  }, [])

  if (error || !weather) return null

  return (
    <div className={`weather-bar${weather.good ? '' : ' weather-bar--warn'}`}>
      <img src={weatherIcon(weather.icon)} alt="" className="weather-icon" />
      <span className="weather-temp">{weather.temp}°C</span>
      <span className="weather-sep">·</span>
      <span className="weather-label">
        {weather.good
          ? 'Idealne warunki do jazdy'
          : weather.temp < 5 ? 'Zimno — ubierz się ciepło'
          : weather.wind > 10 ? `Silny wiatr ${weather.wind} m/s`
          : 'Sprawdź prognozę przed wyjazdem'}
      </span>
    </div>
  )
}
