import React, { useState, useEffect } from 'react';


export const PruebaApisComponents = () => {
        const apiKey = "3809e0d15359f6a20e8dcd0ebf67aaad";
        const [dataForecast, setDataForecast] = useState(null);
        const [error, setError] = useState(null);
      
        useEffect(() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async function (position) {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              const unit = 'metric';
              const URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely,alerts&appid=${apiKey}&units=${unit}`;
      
              try {
                const responseForecast = await fetch(URL_FORECAST);
                if (responseForecast.ok) {
                  const data = await responseForecast.json();
                  setDataForecast(data);
                } else {
                  setError('No se pudo obtener el pronóstico del clima');
                }
              } catch (error) {
                setError('Ocurrió un error al obtener los datos del pronóstico del clima');
              }
            });
          } else {
            setError('No se pudo obtener la geolocalización');
          }
         }, []);
      
        return (
          <div>
            {dataForecast && (
              <div>
                <h2>Weather Forecast</h2>
                <pre>{JSON.stringify(dataForecast, null, 2)}</pre>
              </div>
            )}
            {error && <p>{error}</p>}
          </div>
        );
      };
      
