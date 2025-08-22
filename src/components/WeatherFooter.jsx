const WeatherFooter = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 mt-auto">
            <div className="max-w-4xl mx-auto px-4">
                {/* Contenido principal del footer */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    
                    {/* Información del proyecto */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold font-poppins mb-2 flex items-center justify-center md:justify-start">
                            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            ForeWeather
                        </h3>
                        <p className="text-blue-200 font-inter text-sm">
                            Información meteorológica en tiempo real
                        </p>
                        <p className="text-blue-300 font-inter text-xs mt-1">
                            Powered by Open-Meteo API
                        </p>
                    </div>

                    {/* Información del desarrollador */}
                    <div className="text-center">
                        <p className="font-poppins text-lg mb-2">
                            Desarrollado por <span className="font-bold">Fer Gómez</span>
                        </p>
                        
                        {/* Enlaces sociales */}
                        <div className="flex items-center justify-center space-x-4">
                            <a 
                                href="https://github.com/fgomez2" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition-colors duration-300 group"
                            >
                                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                </svg>
                                <span className="font-inter text-sm">GitHub</span>
                            </a>

                            <a 
                                href="www.linkedin.com/in/fernando-gómez-garcía-50562735a"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors duration-300 group"
                            >
                                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                </svg>
                                <span className="font-inter text-sm">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Separador */}
                <div className="border-t border-blue-500 my-6 opacity-50"></div>

                {/* Copyright y información adicional */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} ForeWeather - Fernando Gómez. Todos los derechos reservados.</p>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-xs">
                        <span>Hecho con</span>
                        <svg className="w-4 h-4 text-red-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span>usando React & Tailwind</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default WeatherFooter