const WeatherMain = ({ weatherData, loading, error, hasSearched }) => {

  // Función para obtener la desc. del clima según el código (API)
  const getWeatherDescription = (code) => {
    const weatherCodes = {
      0: "Cielo despejado",
      1: "Cielo mayormente despejado",
      2: "Cielo parcialmente nublado",
      3: "Cielo nublado",
      45: "Niebla",
      48: "Niebla con escarcha",
      51: "Llovizna ligera",
      53: "Llovizna moderada",
      55: "Llovizna intensa",
      61: "Lluvia ligera",
      63: "Lluvia moderada",
      65: "Lluvia intensa",
      71: "Nieve ligera",
      73: "Nieve moderada",
      75: "Nieve intensa",
      95: "Tormenta"
    }

    return weatherCodes[code] || "Estado del tiempo desconocido"
  }


  // Para obtener el icono segun el código del clima
  const getWeatherIcon = (code) => {
    if (code === 0 || code === 1) {
      return(
        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        </div>
      )
    } else if (code === 2 || code === 3) {
      return(
        <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
          </svg>
        </div>
      )
    } else if (code === 45 || code === 48) {
      return(
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <g>
              {/* Líneas horizontales para representar niebla */}
              <rect x="3" y="6" width="14" height="1.5" rx="0.75" fill="currentColor" opacity="0.8"/>
              <rect x="2" y="9" width="16" height="1.5" rx="0.75" fill="currentColor" opacity="0.6"/>
              <rect x="4" y="12" width="12" height="1.5" rx="0.75" fill="currentColor" opacity="0.7"/>
              <rect x="3" y="15" width="14" height="1.5" rx="0.75" fill="currentColor" opacity="0.5"/>
            </g>
          </svg>
        </div>
      )
    } else if (code >= 51 && code <= 65) {
      return(
        <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8zm0-2h8a2.5 2.5 0 000-5 .5.5 0 01-.5-.5 2 2 0 10-4 0v.5a.5.5 0 01-.5.5 1.5 1.5 0 000 3z" clipRule="evenodd" />
          </svg>
        </div>
      )
    } else {
      return(
        <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        </div>
      )
    }
  }

  // Obtener el color del fondo según el código del clima
  const getBgColor = (code) => {
    if (code === 0 || code === 1) {
      return "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200"
    } else if (code === 2 || code === 3) {
      return "bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200"
    } else if (code === 45 || code === 48) {
      return "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300"
    } else if (code >= 51 && code <= 65) {
      return "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
    } else {
      return "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200"
    }
  }

  // F. para obtener el día
  const getDayName = (dateString, index) => {
    const date = new Date(dateString)
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    
    if (index === 0) return "Hoy"
    if (index === 1) return "Mañana"

    return days[date.getDay()]
  }

  // F. para formatear fecha
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return `${date.getDate()} ${['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'][date.getMonth()]}`
  }

  // Si aun no se ha buscado una ciudad
  if (!hasSearched) {
    return (
      <main className="flex justify-center items-center min-h-[70vh] py-12">
        <div className="border-2 border-gray-300 rounded-lg p-5 shadow-lg text-center">
          <h1 className="text-black font-poppins font-semibold text-2xl">
            Busca un lugar para ver el clima actual...
          </h1>
        </div>
      </main>
    )
  }

  // Cuando está cargando los datos sobre el clima
  if (loading) {
    return (
      <main className="flex justify-center items-center min-h-[70vh] py-12">
        <div className="border-2 border-blue-300 rounded-lg p-5 shadow-lg text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-blue-600 font-poppins text-lg">Cargando información...</p>
        </div>
      </main>
    )
  }

  // Si da error
  if (error) {
    return (
      <main className="flex justify-center items-center min-h-[70vh] py-12">
        <div className="border-2 border-red-300 rounded-lg p-5 shadow-lg text-center bg-red-50">
          <p className="text-red-600 font-poppins text-lg font-semibold mb-2">Error:</p>
          <p className="text-red-500">{error}</p>
        </div>
      </main>
    )
  }

  // Mostrar datos del clima
  if (weatherData && weatherData.current) {
    const { current, daily, cityName, country } = weatherData

    return (
      <main className="flex flex-col items-center min-h-[70vh] py-12 px-4">
        <div className="bg-white border-2 border-gray-300 rounded-lg p-6 shadow-xl text-center max-w-md w-full">
          {/* CIUDAD y PAÍS */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 font-poppins">
              {cityName}, {country}
            </h2>
          </div>

          {/* TEMPERATURA */}
          <div className="mb-6">
            <div className="text-5xl font-bold text-blue-600 mb-2">
              {Math.round(current.temperature_2m)}°C
            </div>
            <p className="text-gray-600 font-inter">
              Sensación térmica: {Math.round(current.apparent_temperature)}°C
            </p>
          </div>

          {/* DESC. DEL CLIMA */}
          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-700 font-poppins">
              {getWeatherDescription(current.weather_code)}
            </p>
          </div>

          {/* INFO ADICIONAL */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            {/* HUMEDAD */}
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="font-semibold text-blue-800">Humedad</p>
              <p className="text-blue-600">{current.relative_humidity_2m}%</p>
            </div>

            {/* VIENTO */}
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="font-semibold text-green-800">Viento</p>
              <p className="text-green-600">{Math.round(current.wind_speed_10m)} km/h</p>
            </div>

            {/* PRESIÓN ATMOSFÉRICA */}
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="font-semibold text-purple-800">Presión</p>
              <p className="text-purple-600">{Math.round(current.pressure_msl)} hPa</p>
            </div>

            {/* NUBOSIDAD */}
            <div className="bg-orange-50 p-3 rounded-lg">
              <p className="font-semibold text-orange-800">Nubes</p>
              <p className="text-orange-600">{current.cloud_cover}%</p>
            </div>

            {/* INFO SOBRE PRECIPITACIONES SI EXISTE */}
            {current.precipitation > 0 && (
              <div className="mt-4 bg-blue-100 p-3 rounded-lg">
                <p className="font-semibold text-blue-800">Precipitaciones</p>
                <p className="text-blue-600">{current.precipitation} mm</p>
              </div>
            )}
          
          </div>
        </div>

        {/* Previsión de 5 días del clima */}
        {daily && (
          <div className="mt-12 w-full max-w-4xl mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 font-poppins text-center">
              Previsión para los próximos 5 días
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {daily.time.slice(1, 6).map((date, index) => (
                <div key={date} className={`${getBgColor(daily.weather_code[index + 1])} rounded-xl p-4 text-center border hover:shadow-lg transition-shadow duration-300`}>
                  <p className="font-semibold text-gray-700 font-inter text-sm mb-2">
                    {getDayName(date, index + 1)}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    {formatDate(date)}
                  </p>

                  {/* ICONO DEL CLIMA */}
                  <div className="flex justify-center mb-3">
                    {getWeatherIcon(daily.weather_code[index + 1])}
                  </div>

                  {/* TEMP. */}
                  <div className="space-y-1">
                    <p className="text-lg font-bold text-gray-800">
                      {Math.round(daily.temperature_2m_max[index + 1])}°C
                    </p>
                    <p className="text-sm text-gray-600">
                      {Math.round(daily.temperature_2m_min[index + 1])}°C
                    </p>
                  </div>

                  {/* DESC. DEL CLIMA */}
                  <p className="text-xs text-gray-600 mt-2 font-inter">
                    {getWeatherDescription(daily.weather_code[index + 1])}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    )
  }

  // Si no hay datos del clima
  return (
      <main className="flex justify-center items-center min-h-[70vh] py-12">
      <div className="border-2 border-gray-300 rounded-lg p-5 shadow-lg text-center">
        <h1 className="text-black font-poppins font-semibold text-2xl">Aquí encontrarás información sobre el tiempo...</h1>
      </div>
    </main>
  )
}

export default WeatherMain