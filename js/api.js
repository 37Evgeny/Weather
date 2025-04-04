const apiKey = '3e63e2d20fd14485b4b164750250404';
const city = 'Ivanovo';
const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=4`; // Запрашиваем 4 дня (включая текущий)

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        updateWeather(data);
    })
    .catch(error => console.error('Error:', error));


