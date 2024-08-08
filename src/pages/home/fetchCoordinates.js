export const fetchCoordinates = async (locationName) => {
    const apiKey = 'f403ddff6bcb4a8081c6ce8fe0b0981e'; // Replace with your OpenCage API key
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(locationName)}&key=${apiKey}`);
    const data = await response.json();
  
    if (data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry;
      return { latitude: lat, longitude: lng };
    } else {
      throw new Error('Location not found');
    }
  };