import { useState } from 'react'

const WeatherHeader = ({ onSearch }) => {

    const [inputValue, setInputValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim()) {
            onSearch(inputValue.trim())
            setInputValue('')
        }
    }
    return (
      <header className='relative flex flex-col sm:flex-row sm:justify-between sm:items-center h-auto sm:h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 p-6 shadow-lg'>
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-8 right-8 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
          <div className="absolute bottom-4 left-1/3 w-12 h-12 bg-white/10 rounded-full blur-md"></div>
        </div>

        {/* Título con icono */}
        <div className="relative z-10 flex items-center justify-center sm:justify-start mb-4 sm:mb-0">
          <div className="mr-3 p-2 bg-white/20 rounded-full backdrop-blur-sm">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className='text-3xl sm:text-4xl text-white font-bold font-poppins tracking-wide drop-shadow-lg'>
            ForeWeather
          </h1>
        </div>

        {/* Formulario de búsqueda mejorado */}
        <div className='relative z-10 flex justify-center w-full sm:w-auto sm:flex-1 sm:max-w-md sm:ml-8'>
          <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-3 w-full'>
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Buscar ciudad...'
                className='w-full pl-10 pr-4 py-3 rounded-xl border-0 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 focus:bg-white transition-all duration-300 font-inter shadow-lg'
              />
            </div>
            <button
              type='submit'
              className='px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-xl hover:from-orange-500 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 font-semibold font-inter shadow-lg transform hover:scale-105 active:scale-95'
            >
              <span className="hidden sm:inline">Buscar</span>
              <svg className="w-5 h-5 sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>
      </header>
    )
}

export default WeatherHeader