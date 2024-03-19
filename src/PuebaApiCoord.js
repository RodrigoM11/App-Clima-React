import React, { useEffect } from 'react';


export const PruebaApiCoordComponent = () => {
    useEffect(() => {
        const form = document.getElementById('geocoding-form');
        const placeNameInput = document.getElementById('place-name');
        const coordinatesSpan = document.getElementById('coordinates');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var placeName = placeNameInput.value;

            fetch('https://nominatim.openstreetmap.org/search?format=json&q=' + placeName)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        var coordinates = data[0];
                        coordinatesSpan.textContent = 'Latitud: ' + coordinates.lat + ', Longitud: ' + coordinates.lon;
                    } else {
                        coordinatesSpan.textContent = 'Lugar no encontrado';
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        });
    }, []);

    return (
        <div>
            <form id="geocoding-form">
                <input type="text" id="place-name" placeholder="Nombre del lugar" />
                <button type="submit">Obtener coordenadas</button>
            </form>
            <div>
                <p>Coordenadas: <span id="coordinates"></span></p>
            </div>
        </div>
    );
}

    
   

    



