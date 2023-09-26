function updateDateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const now = new Date();
    
    dateElement.textContent = now.toLocaleDateString('es-ES', options);
    timeElement.textContent = now.toLocaleTimeString('es-ES');
  }
  
  function getLocation() {
    const locationElement = document.getElementById('location');
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        locationElement.textContent = `Latitud: ${latitude}, Longitud: ${longitude}`;
      }, error => {
        locationElement.textContent = 'No se pudo obtener la ubicación.';
      });
    } else {
      locationElement.textContent = 'Geolocalización no es compatible en este navegador.';
    }
  }
  
  // Actualizar fecha, hora y ubicación cada segundo
  setInterval(() => {
    updateDateTime();
    getLocation();
  }, 1000);
  
  // Inicializar al cargar la página
  updateDateTime();
  getLocation();
  