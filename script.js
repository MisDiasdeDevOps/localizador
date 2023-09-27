function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById('clock');
    clockElement.textContent = now.toLocaleTimeString();

    const dateElement = document.getElementById('date');
    dateElement.textContent = now.toLocaleDateString();

    // Para obtener la ubicación, puedes utilizar el API de geolocalización del navegador
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const locationElement = document.getElementById('location');
            const latitude = position.coords.latitude.toFixed(4);
            const longitude = position.coords.longitude.toFixed(4);
            locationElement.textContent = `Latitud: ${latitude}, Longitud: ${longitude}`;
        });
    }
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

// Llamar a la función una vez para mostrar los valores iniciales
updateClock();
